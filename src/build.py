import os
import re
from datetime import datetime
from openai import OpenAI

# Initialize the OpenAI client
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# Function to parse the outline.md file, including the title
def parse_outline_file(filename):
    outline = []
    current_chapter = {}
    book_title = "Book Title"  # Default title if none is found

    with open(filename, 'r') as file:
        for line in file:
            # Detect book title from the first line
            title_match = re.match(r'^\s*## \*\*Title\*\*: \*\*"(.*?)"\*\*', line)
            if title_match:
                book_title = title_match.group(1).strip()

            # Detect chapter titles
            chapter_title_match = re.match(r"^### \*\*(.*?)\*\*", line)
            if chapter_title_match:
                # Save the previous chapter if it exists
                if current_chapter:
                    outline.append(current_chapter)
                # Start a new chapter
                current_chapter = {
                    "title": chapter_title_match.group(1).strip(),
                    "outline": ""
                }
            elif line.startswith("   - "):
                current_chapter["outline"] += line.strip() + " "

        # Append the last chapter if it exists
        if current_chapter:
            outline.append(current_chapter)
    return book_title, outline

# Function to generate a single book summary from the entire outline
def generate_book_summary(outline):
    outline_text = " ".join([chapter['outline'] for chapter in outline])

    prompt = (
        "Create an informative summary of the entire book based on the following outline. "
        "The book integrates themes of yoga, Traditional Chinese Medicine, and biomechanics, emphasizing spinal health and movement principles.\n\n"
        f"Outline: {outline_text}\n\n"
        "Generate a single summary capturing the main themes and purpose of the book in a way that reflects its unique approach and insights."
    )

    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "You are an expert summarizer skilled in synthesizing broad ideas into clear overviews."},
                {"role": "user", "content": prompt}
            ]
        )

        return response.choices[0].message.content

    except Exception as e:
        print(f"Error calling OpenAI API: {e}")
        return ""

# Function to generate Introduction, Conclusion, and each full chapter
def generate_section_text(section_type, content, book_summary, previous_chapter_outline=None, next_chapter_outline=None):
    # Adjust prompt for section type
    if section_type == "Introduction":
        prompt = (
            f"Book Summary: {book_summary}\n\n"
            "Write an engaging and thorough Introduction for the book that explains the main themes, purpose, and approach in detail. "
            "Discuss the book's structure, the unique integration of yoga, Traditional Chinese Medicine, and biomechanics, and how these elements "
            "contribute to spinal health. Make it inviting and accessible for readers of all backgrounds, explaining what they can expect to gain "
            "from the book and how the content is relevant to modern health and movement practices."
        )
    elif section_type == "Conclusion":
        prompt = (
            f"Book Summary: {book_summary}\n\n"
            "Write a compelling Conclusion that summarizes the book's insights and key takeaways. Reinforce the book's value and "
            "encourage readers to apply the lessons to their own practices. Conclude with a positive note that invites reflection."
        )
    else:
        # Construct prompt for chapters
        prompt = (
            f"Book Summary: {book_summary}\n\n"
            + (f"Previous Chapter Outline: {previous_chapter_outline}\n\n" if previous_chapter_outline else "")
            + (f"Next Chapter Outline: {next_chapter_outline}\n\n" if next_chapter_outline else "")
            + f"Generate a comprehensive, well-organized book chapter based on the following chapter outline.\n\n"
            f"Title: {section_type}\n\n"
            f"Outline: {content}\n\n"
            "Write a detailed, reader-friendly explanation of the chapter’s core concepts, using clear language and a logical progression. "
            "Include relevant examples, metaphors, and step-by-step explanations to make complex ideas accessible. Provide actionable advice and "
            "practical exercises where applicable, guiding readers on how to apply these concepts in their own practice. Highlight connections between "
            "physical, energetic, and mental aspects, and conclude with key takeaways that reinforce the chapter's insights and benefits."
        )

    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "You are a professional author and subject-matter expert tasked with writing a comprehensive and engaging book chapter."},
                {"role": "user", "content": prompt}
            ]
        )

        return response.choices[0].message.content

    except Exception as e:
        print(f"Error calling OpenAI API: {e}")
        return ""

# Main function to generate the book summary, Introduction, Conclusion, and each chapter
def generate_book_from_outline(outline, book_title, combined_output_file="combined_output.md"):
    # Generate the single book summary
    book_summary = generate_book_summary(outline)

    # Get current date
    current_date = datetime.now().strftime("%Y-%m-%d")

    # Construct metadata for the combined markdown output
    combined_content = "---\n"
    combined_content += f'title: "{book_title}"\n'
    combined_content += 'author: "Michael Garrett Seiler, Dr. Katherine Gallardo, M.D."\n'
    combined_content += f'date: "{current_date}"\n'
    combined_content += "---\n\n"

    combined_content += f"# {book_title}\n\n"  # Actual title header for readers
    combined_content += "## Table of Contents\n\n"
    combined_content += "- [Introduction](#introduction)\n"

    # Generate the Introduction
    introduction_text = generate_section_text("Introduction", "", book_summary)
    combined_content += "\n# Introduction\n\n" + introduction_text + "\n\n"

    # Generate each chapter and add to the combined output
    for i, chapter in enumerate(outline):
        title = chapter['title']
        chapter_outline = chapter['outline']

        # Set previous and next chapter outlines if available
        previous_chapter_outline = outline[i - 1]['outline'] if i > 0 else None
        next_chapter_outline = outline[i + 1]['outline'] if i < len(outline) - 1 else None

        # Generate the full text for the chapter
        chapter_text = generate_section_text(title, chapter_outline, book_summary, previous_chapter_outline, next_chapter_outline)

        # Filename with leading zero for sorting
        chapter_filename = f"{i+1:02d}-{title.replace(' ', '_').replace(':', '')}.md"
        with open(chapter_filename, 'w') as file:
            file.write(f"# {title}\n\n{chapter_text}")

        print(f"Chapter '{title}' generated and saved as {chapter_filename}.")

        # Update the Table of Contents and chapter content in combined output
        combined_content += f"- [{title}](#{title.replace(' ', '-').lower()})\n"
        combined_content += f"\n# {title}\n\n{chapter_text}\n\n"

    # Generate the Conclusion
    conclusion_text = generate_section_text("Conclusion", "", book_summary)
    combined_content += "- [Conclusion](#conclusion)\n\n"
    combined_content += "\n# Conclusion\n\n" + conclusion_text + "\n\n"

    # Write the combined content to a single markdown file
    with open(combined_output_file, 'w') as combined_file:
        combined_file.write(combined_content)

    print(f"Combined markdown file '{combined_output_file}' generated for PDF conversion.")

# Parse the outline.md file, then generate the book summary, Introduction, Conclusion, and full chapters
book_title, book_outline = parse_outline_file("../outline.md")
generate_book_from_outline(book_outline, book_title)



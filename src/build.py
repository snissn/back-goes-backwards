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
    + f"Write an in-depth, book-style chapter based on the following outline.\n\n"
    f"Title: {section_type}\n\n"
    f"Outline: {content}\n\n"
    "Begin with an engaging introduction that sets up the main themes of the chapter, providing context on why these ideas matter in "
    "the larger scope of the book. Use this section to make the reader feel connected to the topic by exploring historical, cultural, or "
    "theoretical background where relevant, and establishing how the themes fit into the modern context of well-being, health, and movement.\n\n"
    "Develop each core concept in a logical and smooth progression, ensuring readers can follow the ideas clearly. Allow for exploratory "
    "discussions, connecting these concepts with previous chapters and relevant areas of yoga, Traditional Chinese Medicine, biomechanics, "
    "and practical well-being practices. Use examples, metaphors, and analogies from everyday life and the specific disciplines covered "
    "to make complex ideas more accessible and relatable. Frame sections with narrative explanations that are both informative and enjoyable, "
    "encouraging readers to reflect on the ideas and their significance.\n\n"
    "In addition to explaining core concepts, provide actionable advice, exercises, or reflections where appropriate to help readers apply "
    "the chapter’s insights in their own life or practice. Make room for insights that highlight connections between physical, energetic, and mental aspects, "
    "using references and analogies that show how these dimensions are interwoven. Conclude with a thoughtful reflection or summary that "
    "ties together the chapter’s main ideas, encouraging readers to integrate the knowledge into their broader understanding of the book’s themes and "
    "inspiring further personal growth and exploration."
    )

    try:
        system_prompt = (
            "You are a skilled author and subject-matter expert tasked with writing a book chapter that is rich, engaging, and informative. "
            "Each chapter should feel like part of a comprehensive, narrative-driven book. Your writing should be thorough, clear, and immersive, "
            "weaving together historical context, theoretical depth, practical insights, and narrative flow.\n\n"
            "Provide expansive explanations that explore each concept in detail. Use a storytelling approach where possible, with thoughtful examples, "
            "real-world analogies, and relatable scenarios to make complex ideas accessible. Create a balance of theoretical discussion, cultural "
            "and historical background, and actionable advice, keeping the reader engaged and informed.\n\n"
            "As you write, connect the physical, energetic, and mental aspects in ways that resonate with readers. Allow each chapter to flow smoothly, "
            "building a cohesive narrative that ties into the book's broader themes on yoga, Traditional Chinese Medicine, biomechanics, and well-being."
        )
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": prompt}
            ],
            max_tokens=4000,  # Adjust based on desired chapter length
            temperature=0.7  # Optional: adjust for creativity; 0.7 encourages a balanced, engaging style
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

        # Add only one header for the chapter in the combined output
        combined_content += f"- [{title}](#{title.replace(' ', '-').lower()})\n"  # TOC entry
        combined_content += f"\n# {title}\n\n{chapter_text}\n\n"  # Chapter content

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



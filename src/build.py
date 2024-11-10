import os
import re
from openai import OpenAI

# Initialize the OpenAI client
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# Function to parse the summary.md file
def parse_summary_file(filename):
    outline = []
    current_chapter = {}
    capture_summary = False

    with open(filename, 'r') as file:
        for line in file:
            # Detect chapter titles
            chapter_title_match = re.match(r"^### \*\*(.*?)\*\*", line)
            if chapter_title_match:
                # Save the previous chapter if it exists
                if current_chapter:
                    outline.append(current_chapter)
                # Start a new chapter
                current_chapter = {
                    "title": chapter_title_match.group(1).strip(),
                    "summary": ""
                }
                capture_summary = False  # Reset capture summary flag

            # Capture main concepts to cover
            elif line.strip() == "#### **Main Concepts to Cover:**":
                capture_summary = True

            # Detect bullet points under "Main Concepts to Cover"
            elif capture_summary and line.startswith("   - "):
                current_chapter["summary"] += line.strip() + " "

        # Append the last chapter if it exists
        if current_chapter:
            outline.append(current_chapter)
    return outline

# Function to parse the outline.md file for additional context
def parse_outline_file(filename):
    with open(filename, 'r') as file:
        book_summary = file.read().strip()  # Assuming the entire outline.md file is a summary of the book
    return book_summary

# Function to call the OpenAI API to expand each chapter
def generate_chapter_text(chapter_title, chapter_summary, book_summary, previous_chapter_outline=None, next_chapter_outline=None):
    # Construct the prompt with book overview and surrounding chapter outlines
    prompt = (
        f"Book Overview: {book_summary}\n\n"
        + (f"Previous Chapter Outline: {previous_chapter_outline}\n\n" if previous_chapter_outline else "")
        + (f"Next Chapter Outline: {next_chapter_outline}\n\n" if next_chapter_outline else "")
        + f"Expand the following outline into a comprehensive, well-organized book chapter.\n\n"
        f"Title: {chapter_title}\n\n"
        f"Summary: {chapter_summary}\n\n"
        "Write a detailed, reader-friendly explanation of the chapter’s core concepts, using clear language and a logical progression. "
        "Include relevant examples, metaphors, and step-by-step explanations to make complex ideas accessible. Provide actionable advice and "
        "practical exercises where applicable, guiding readers on how to apply these concepts in their own practice. Highlight connections between "
        "physical, energetic, and mental aspects, and conclude with key takeaways that reinforce the chapter's insights and benefits."
    )

    try:
        # Call to the OpenAI API to generate the chapter text
        response = client.chat.completions.create(
            model="chatgpt-4o-latest",
            messages=[
                {"role": "system", "content": (
                    "You are a professional author and subject-matter expert tasked with writing a comprehensive and engaging book chapter on spinal health, "
                    "integrating Ashtanga yoga, Tai Chi, and Traditional Chinese Medicine concepts. Your writing style should be informative, accessible, "
                    "and infused with depth and clarity, making complex ideas easy for readers to understand and apply in their own practices. "
                    "Write with a balanced tone that appeals to readers who are both new to these disciplines and experienced practitioners. "
                    "Explain anatomical and biomechanical concepts in detail, using practical examples and metaphors where helpful, and describe the "
                    "energetic and philosophical aspects of each topic in a way that respects traditional practices while making them relevant to modern readers. "
                    "Keep a flow that transitions naturally between theory, practical advice, and deeper spiritual insights."
                )},
                {"role": "user", "content": prompt}
            ]
        )

        # Extract the generated chapter content
        return response.choices[0].message.content

    except Exception as e:
        print(f"Error calling OpenAI API: {e}")
        return ""

# Main function to iterate over the outline and save chapters to text files
def generate_book_from_outline(outline, book_summary):
    for i, chapter in enumerate(outline):
        title = chapter['title']
        summary = chapter['summary']

        # Set previous and next chapter outlines if available
        previous_chapter_outline = outline[i - 1]['summary'] if i > 0 else None
        next_chapter_outline = outline[i + 1]['summary'] if i < len(outline) - 1 else None

        # Generate full text for the chapter
        chapter_text = generate_chapter_text(title, summary, book_summary, previous_chapter_outline, next_chapter_outline)

        # Save the chapter to a file
        filename = f"{title.replace(' ', '_').replace(':', '')}.md"
        with open(filename, 'w') as file:
            file.write(f"{title}\n\n{chapter_text}")

        print(f"Chapter '{title}' generated and saved as {filename}.")

# Parse the summary.md and outline.md files, then generate the book
summary_outline = parse_summary_file("../summary.md")
book_summary = parse_outline_file("../outline.md")
generate_book_from_outline(summary_outline, book_summary)



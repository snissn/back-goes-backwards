import os
import sys
import json
from datetime import datetime
from openai import OpenAI

# Initialize the OpenAI client
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# Function to generate Markdown text for each leaf node
def generate_markdown_text(title, content, book_summary=None):
    """
    Generate Markdown text for a leaf node using OpenAI ChatGPT API.
    """
    prompt = ""
    if book_summary:
        prompt += f"Book Summary: {book_summary}\n\n"

    prompt += (
        f"Write detailed and engaging content for '{title}' based on the extended outline below. "
        f"Ensure the content is immersive and provides a thorough exploration of the topic.\n\n"
    )
    prompt += f"Extended Outline:\n{content}\n\n"
    prompt += (
        "Generate: Rich paragraphs. Avoid bullet points unless necessary. "
        "Create engaging, well-structured content that flows naturally and feels like a completed section of the book."
    )

    try:
        # System message to set the context for generation
        system_prompt = (
            "You are an expert author skilled in crafting book content that explores cultural, historical, theoretical, and practical insights. "
            "Use original exposition to bring depth and engagement to each section."
        "You are writing as an expert author and a subject matter expert in Ashtanga Yoga in the style of Krishnamacharya, Pattabhi Jois, and A.G. Mohan with lessons from the Upanishads and the Bhagavad Gita, "
        "creating a deeply holistic approach to yoga that unites physical, philosophical, and spiritual dimensions, Traditional Chinese Medicine, and biomechanics, "
        "emphasizing spinal health and movement principles.\n\n"
        f"Outline: {outline_text}\n\n"
        "Generate a concise summary capturing the main themes and purpose of the book."
        )

        print("Generating content for:", title)
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": prompt}
            ],
            max_tokens=3000,
            temperature=0.5
        )

        return response.choices[0].message.content

    except Exception as e:
        print(f"Error generating content for '{title}': {e}")
        return f"# {title}\n\nContent could not be generated."

# Recursive function to traverse and generate Markdown
def traverse_and_generate(data, key_path=None, book_summary=None, level=1):
    """
    Traverse the nested JSON, generate content for each leaf node using OpenAI API, 
    and build Markdown content.
    """
    if key_path is None:
        key_path = []

    markdown_content = ""

    if isinstance(data, dict):
        for key, value in data.items():
            markdown_content += traverse_and_generate(value, key_path + [key], book_summary, level)
    elif isinstance(data, list):
        for index, item in enumerate(data):
            markdown_content += traverse_and_generate(item, key_path + [f"[{index}]"], book_summary, level)
    else:
        # Reached a leaf node
        title = " -> ".join(key_path)
        content = str(data)
        markdown_content += generate_markdown_text(title, content, book_summary) + "\n\n"
        print(markdown_content)

    return markdown_content

# Function to generate the book summary
def generate_book_summary(outline_text):
    """
    Generate a summary of the entire book using OpenAI API.
    """
    prompt = (
        "Create an informative summary of the entire book based on the following outline. "
        "The book integrates Ashtanga Yoga in the style of Krishnamacharya, Pattabhi Jois, and A.G. Mohan with lessons from the Upanishads and the Bhagavad Gita, "
        "creating a deeply holistic approach to yoga that unites physical, philosophical, and spiritual dimensions, Traditional Chinese Medicine, and biomechanics, "
        "emphasizing spinal health and movement principles.\n\n"
        f"Outline: {outline_text}\n\n"
        "Generate a concise summary capturing the main themes and purpose of the book."
    )

    try:
        response = client.chat.completions.create(
            model="gpt-4o",
            messages=[
                {"role": "system", "content": "You are an expert summarizer skilled in creating concise summaries."},
                {"role": "user", "content": prompt}
            ],
            temperature=0.5
        )
        return response.choices[0].message.content

    except Exception as e:
        print(f"Error generating book summary: {e}")
        return ""

# Main function to generate the Markdown book
def generate_markdown_book(json_file, outline_text):
    """
    Generate a complete Markdown book based on the provided JSON file and outline text.
    """
    summary = generate_book_summary(outline_text)

    # Read JSON file
    with open(json_file, 'r') as file:
        data = json.load(file)

    book_title = data["title"]
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    output_dir = f"output_{timestamp}"
    os.makedirs(output_dir, exist_ok=True)

    # Combined output file
    combined_output_file = os.path.join(output_dir, "combined_output.md")
    combined_content = f"# {book_title}\n\n## Table of Contents\n\n"

    toc_entries = []
    for part in data["parts"]:
        part_title = part["title"]
        toc_entries.append(f"- **{part_title}**")
        for chapter in part["chapters"]:
            chapter_title = chapter["title"]
            toc_entries.append(f"  - [{chapter_title}](#{chapter_title.replace(' ', '-').lower()})")

    combined_content += "\n".join(toc_entries) + "\n\n\\newpage\n\n"

    # Process parts and chapters
    for part in data["parts"]:
        part_title = part["title"]
        combined_content += f"# {part_title}\n\n"

        for chapter in part["chapters"]:
            chapter_title = chapter["title"]
            chapter_content = f"# {chapter_title}\n\n"
            for section in chapter["sections"]:
                chapter_content += traverse_and_generate(section, book_summary=summary)

            combined_content += chapter_content + "\\newpage\n\n"

    # Save combined Markdown file
    with open(combined_output_file, 'w') as combined_file:
        combined_file.write(combined_content)
    print(f"Combined markdown file '{combined_output_file}' generated.")

# Run the program
if __name__ == "__main__":
    outline_file = "outline.md"
    if len(sys.argv) < 2:
        print("Usage: python script.py <json_file>")
        sys.exit(1)

    json_file = sys.argv[1]
    outline_text = open(outline_file, "r").read()
    generate_markdown_book(json_file, outline_text)


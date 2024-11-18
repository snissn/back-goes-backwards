import os
import json
from datetime import datetime
from openai import OpenAI

# Initialize the OpenAI client
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# Function to generate Markdown text for each chapter
def generate_markdown_text(chapter, book_summary):
    title = chapter["title"]
    outline_content = chapter["outline"]
    chapter_type = chapter["type"]
    extended_outline = chapter["extended_outline"]

    # Select prompt based on chapter type
    chapter_intro_prompts = {
        "historical": (
            f"Write a historical analysis for the chapter '{title}', exploring the origins, evolution, and development of {title} within the traditions of Ashtanga yoga, "
            f"Traditional Chinese Medicine (TCM), and biomechanics. Highlight influential figures, such as Krishnamacharya and others relevant to advanced Ashtanga, "
            f"and discuss the cultural and spiritual significance that has shaped these practices. Provide historical insights that reveal how these traditions "
            f"have informed advanced concepts in spinal alignment, energy flow, and holistic health."
        ),
        "theoretical": (
            f"Provide a deep theoretical discussion for '{title}', examining intricate concepts that integrate advanced Ashtanga yoga principles, biomechanics, and TCM. "
            f"Analyze the Eastern perspectives on energetic and structural alignment and compare them with Western biomechanics, emphasizing advanced understandings of "
            f"alignment, spinal health, and meridian flow. Craft the discussion to be both accessible and rich with detail, appealing to readers seeking a profound, non-mainstream exploration of these topics."
        ),
        "practical": (
            f"Create a practical guide for '{title}' with advanced, step-by-step applications rooted in the lineage of Ashtanga yoga and the principles of TCM. "
            f"Focus on the nuanced techniques of alignment, breath control, bandha engagement, and mindful movement that support spinal integrity, energetic flow, and "
            f"overall health. Avoid general exercise or fitness instructions, instead providing detailed guidance that applies the rigor and discipline of traditional Ashtanga practice."
        ),
        "narrative": (
            f"Compose a narrative for '{title}' that illustrates the transformative potential of advanced Ashtanga yoga and TCM in achieving alignment and holistic health. "
            f"Share stories, cultural contexts, and examples that highlight how these practices—rooted in discipline and tradition—contribute to long-term wellness, spinal health, and energy balance. "
            f"Avoid fitness-oriented or superficial perspectives, instead focusing on a deep, culturally informed journey of self-discovery and structural alignment."
        ),
        "general": (
            f"Write a comprehensive exploration of '{title}' in the broader context of the book, focusing on its role in supporting advanced practitioners in Ashtanga yoga "
            f"and those interested in TCM. Weave together cultural, theoretical, and practical insights to demonstrate how these practices support chronic health management, "
            f"spinal integrity, and energy flow. Present the information in a way that underscores the advanced, non-mainstream approach of the book, bridging Eastern and Western perspectives."
        )
    }

    # Default to general type if no match found
    prompt = chapter_intro_prompts.get(chapter_type, chapter_intro_prompts["general"])

    try:
        # System message to set the context for chapter generation
        system_prompt = (
            "You are a knowledgeable author skilled in crafting rich, narrative-driven book chapters. Each chapter should explore "
            "cultural, historical, theoretical, and practical insights, connecting to yoga, TCM, and biomechanics."
        )

        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": system_prompt},
                {"role": "user", "content": prompt}
            ],
            max_tokens=6000,  # Adjust for chapter length
            temperature=0.75  # Balanced creativity
        )

        return response.choices[0].message.content

    except Exception as e:
        print(f"Error generating chapter content for '{title}': {e}")
        return f"# {title}\n\nContent could not be generated."

# Main function to generate individual markdown files for each chapter and a combined markdown file
def generate_markdown_files_from_json(json_file="enriched_outline.json"):
    # Create a new folder with a timestamp
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    output_dir = f"output_{timestamp}"
    os.makedirs(output_dir, exist_ok=True)

    # Define the combined output file path within the new folder
    combined_output_file = os.path.join(output_dir, "combined_output.md")

    with open(json_file, 'r') as file:
        data = json.load(file)

    book_title = data["title"]
    book_summary = "Summary of the book content..."  # Could call a summarization function if needed

    # Combined content initialization
    combined_content = f"# {book_title}\n\n"
    combined_content += "## Table of Contents\n\n"

    # Generate each chapter's markdown and add it to the combined content
    for i, chapter in enumerate(data["chapters"], start=1):
        title = chapter["title"]
        filename = f"{title.replace(' ', '_')}.md"
        file_path = os.path.join(output_dir, filename)

        # Generate the chapter markdown content
        chapter_content = generate_markdown_text(chapter, book_summary)

        # Save to individual markdown file within the new output folder
        with open(file_path, 'w') as md_file:
            md_file.write(f"# {title}\n\n{chapter_content}")
        print(f"Markdown file '{file_path}' generated for chapter '{title}'.")

        # Add to combined content with a Table of Contents entry
        combined_content += f"- [{title}](#{title.replace(' ', '-').lower()})\n\n"
        combined_content += f"\\newpage\n\n# {title}\n\n{chapter_content}\n\n"

    # Write the combined content to a single markdown file in the output folder
    with open(combined_output_file, 'w') as combined_file:
        combined_file.write(combined_content)
    print(f"Combined markdown file '{combined_output_file}' generated for PDF conversion.")

# Run the function to generate markdown files from the JSON outline
generate_markdown_files_from_json()



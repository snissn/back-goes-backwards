import os
import re
import json
from datetime import datetime
from openai import OpenAI

# Initialize the OpenAI client
client = OpenAI(api_key=os.getenv("OPENAI_API_KEY"))

# Function to determine chapter type based on title or content keywords
def determine_chapter_type(title, outline_content):
    title = title.lower()
    outline_content = outline_content.lower()

    if any(keyword in title for keyword in ["history", "origins", "background"]):
        return "historical"
    elif any(keyword in title for keyword in ["principles", "theory", "mechanics"]):
        return "theoretical"
    elif any(keyword in title for keyword in ["guide", "practical", "how to"]):
        return "practical"
    elif any(keyword in title for keyword in ["integration", "connection", "overview"]):
        return "narrative"
    else:
        return "general"

# Function to call ChatGPT for enriching the chapter outline
def generate_enriched_outline(title, outline, chapter_type):
    print(title)
    print(outline)
    # Define a custom prompt for each chapter type to guide the model to be more specific
    type_specific_prompts = {
        "historical": (
            f"Expand the outline for the chapter titled '{title}' in a book that deeply explores advanced Ashtanga yoga, Traditional Chinese Medicine (TCM), "
            f"and biomechanics. Focus on the historical dimensions of these disciplines, highlighting influential figures and lineages (such as Krishnamacharya's influence on Ashtanga), "
            f"as well as the cultural and spiritual roots that ground advanced Ashtanga practice beyond mere physical exercise. Emphasize the evolution of foundational texts and the adaptation of biomechanical insights in advanced Ashtanga and TCM, "
            f"particularly as they pertain to spinal alignment, meridian energetics, and holistic wellness. Avoid mainstream, fitness-oriented narratives and focus on the lineage-based, traditional underpinnings."
        ),
        "theoretical": (
            f"Create an enriched outline for the chapter titled '{title}', providing a comprehensive theoretical discussion of advanced Ashtanga principles as "
            f"rooted in the Krishnamacharya lineage, biomechanics, and TCM. Delve into intricate concepts such as spinal alignment, bandhas (energetic locks), and the role of meridians and subtle energy channels, "
            f"particularly in how they contribute to advanced practice and understanding of the human body. Outline the theoretical intersections that connect advanced yoga practice with TCM's energetic and structural principles, "
            f"emphasizing how these ideas facilitate spinal health, immune function, and deeper states of practice. The outline should convey a sophisticated, esoteric perspective on these practices, avoiding any Westernized fitness approach."
        ),
        "practical": (
            f"Generate a detailed, advanced-level practical guide outline for the chapter titled '{title}', designed for practitioners with a foundational understanding of Ashtanga yoga, TCM, and biomechanics. "
            f"Outline specific sequences, techniques, and postural cues that apply the principles of spinal alignment, meridian engagement, and energetic channeling to support both physical and energetic integrity. "
            f"Include advanced Ashtanga practices, such as intricate bandha engagement, breath control (pranayama), and posture alignment techniques that target structural balance and chronic wellness. "
            f"Avoid simplified or fitness-oriented instructions, instead offering a stepwise approach to deepening practice through traditional, lineage-rooted Ashtanga methodologies."
        ),
        "narrative": (
            f"Write an enriched outline for the chapter titled '{title}', using a narrative approach to present stories and examples that convey the depth and transformative potential of advanced Ashtanga yoga "
            f"and TCM as tools for profound structural and energetic alignment. Illustrate how experienced practitioners have used these practices for healing and longevity, focusing on the cultural, philosophical, and biomechanical roots. "
            f"Capture the advanced ethos of Ashtanga and TCM practices, detailing how they promote long-term spinal health and energetic balance. Avoid fitness or lifestyle narratives, instead exploring how these practices become a path of self-discovery, discipline, and holistic wellness."
        ),
        "general": (
            f"Develop an in-depth outline for the chapter titled '{title}' that explores the advanced Ashtanga approach to managing chronic conditions and promoting long-term health through spinal alignment, "
            f"subtle body mechanics, and energy channel alignment. Introduce complex principles such as the interaction between structural alignment and the flow of qi (or prana) in the body, rooted in both TCM and advanced Ashtanga traditions. "
            f"Provide a comprehensive view of how these practices, grounded in lineage-based Ashtanga and TCM principles, promote wellness and prevent degeneration, steering clear of any mainstream fitness perspectives."
        )
    }

    # Choose the prompt based on the chapter type
    prompt = type_specific_prompts.get(chapter_type, type_specific_prompts["general"])

    # Include original outline if it has content, to add further depth
    prompt += f"\n\nOriginal Outline: {outline}\n\nExpanded Outline:"

    try:
        response = client.chat.completions.create(
            model="gpt-4o-mini",
            messages=[
                {"role": "system", "content": "You are an expert in enriching book outlines with in-depth structure and context."},
                {"role": "user", "content": prompt}
            ],
            max_tokens=2000,  # Adjust based on desired length of the enriched outline
            temperature=0.7  # Balanced for creativity and coherence
        )
        enriched_outline = response.choices[0].message.content.strip()
        return enriched_outline

    except Exception as e:
        print(f"Error enriching outline for '{title}': {e}")
        return outline  # Return original outline if enrichment fails

# Function to parse outline file and generate enriched JSON outline
def parse_outline_and_generate_json(filename):
    outline_data = []
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
                    outline_data.append(current_chapter)
                # Start a new chapter
                chapter_title = chapter_title_match.group(1).strip()
                current_chapter = {
                    "title": chapter_title,
                    "outline": "",
                    "type": "general"  # Default type if none specified
                }
            # Detect outline items (e.g., "- Topic or idea"), handling extra indentation
            outline_item_match = re.match(r"^\s*[-*]\s+(.*)", line)
            if outline_item_match and current_chapter:
                current_chapter["outline"] += outline_item_match.group(1).strip() + " "

        # Append the last chapter if it exists
        if current_chapter:
            outline_data.append(current_chapter)

    # Enrich each chapter with auto-determined types and additional depth
    enriched_outline_data = []
    for chapter in outline_data:
        chapter_type = determine_chapter_type(chapter["title"], chapter["outline"])
        chapter["type"] = chapter_type
        chapter["extended_outline"] = generate_enriched_outline(chapter["title"], chapter["outline"], chapter_type)
        enriched_outline_data.append(chapter)

    # Define a timestamped output file name
    timestamp = datetime.now().strftime("%Y%m%d_%H%M%S")
    output_json = f"enriched_outline_{timestamp}.json"

    # Save the enriched outline to a timestamped JSON file
    output_data = {
        "title": book_title,
        "chapters": enriched_outline_data
    }

    with open(output_json, 'w') as json_file:
        json.dump(output_data, json_file, indent=4)

    print(f"Enriched outline JSON file '{output_json}' generated.")

# Run the function to parse outline and generate JSON
parse_outline_and_generate_json("outline.md")



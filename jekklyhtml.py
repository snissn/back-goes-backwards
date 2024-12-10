import os
import sys
import json
from bs4 import BeautifulSoup

def process_html_to_json(html_content, output_dir):
    # Parse the HTML content
    soup = BeautifulSoup(html_content, 'html.parser')

    # Locate the main content
    main_content = soup # soup.find('main', {'id': 'content'})
    if not main_content:
        raise ValueError("Main content not found in the provided HTML.")

    # Helper function to clean text
    def clean_text(text):
        return text.strip().replace("\n", " ").replace("  ", " ")

    # Process each section
    for part_header in main_content.find_all('h2'):
        part_name = clean_text(part_header.get_text())
        if not part_name.lower().startswith('part'):
            continue

        # Create folder for the part
        part_folder = os.path.join(output_dir, part_name)
        os.makedirs(part_folder, exist_ok=True)

        # Process chapters and subsections
        for sibling in part_header.find_next_siblings():
            if sibling.name == 'h2':  # Stop processing when a new part is found
                break
            if sibling.name == 'h3':
                chapter_name = clean_text(sibling.get_text())
                chapter_data = {}

                # Process subsections under the chapter
                for sub_sibling in sibling.find_next_siblings():
                    if sub_sibling.name == 'h3':  # Stop at the next chapter
                        break
                    if sub_sibling.name == 'h4':
                        subsection_name = clean_text(sub_sibling.get_text())
                        subsection_data = []

                        # Extract bullet points or nested data
                        for ul in sub_sibling.find_next_siblings('ul'):
                            items = ul.find_all('li')
                            for item in items:
                                # Check if the <li> contains nested <li> elements
                                if item.find('li'):
                                    # If nested <li> exists, get text from <strong>, if present
                                    strong = item.find('strong')
                                    if strong:
                                        subsection_data.append(clean_text(strong.get_text()))
                                else:
                                    # Otherwise, get the text content of the <li>
                                    subsection_data.append(clean_text(item.get_text()))


                        # Add subsection data to the chapter
                        chapter_data[subsection_name] = subsection_data

                # Save chapter data as JSON
                chapter_file = os.path.join(part_folder, f"{chapter_name}.json")
                with open(chapter_file, 'w', encoding='utf-8') as f:
                    json.dump(chapter_data, f, indent=2)

if __name__ == "__main__":
    # Load the HTML content
    html_file = sys.argv[1]
    output_directory = "output_directory-pandoc-2"

    with open(html_file, 'r', encoding='utf-8') as file:
        html_content = file.read()

    # Process the HTML
    process_html_to_json(html_content, output_directory)

    print(f"Processing complete. Data saved to {output_directory}.")



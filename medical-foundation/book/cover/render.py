from PIL import Image, ImageDraw, ImageFont

# Reload clean base image again to fix the layout
base_image = Image.open("cover-image.png").convert("RGBA")

# Add a semi-transparent overlay for text readability
overlay = base_image.copy()
overlay_draw = ImageDraw.Draw(overlay)
overlay_draw.rectangle([0, 0, base_image.width, base_image.height], fill=(255, 255, 255, 180))
final_image = Image.alpha_composite(base_image, overlay)

# Redraw context
draw = ImageDraw.Draw(final_image)

# Load fonts with proper sizing
try:
    title_font = ImageFont.truetype("./SourceSansPro-Bold.otf", 72)
    subtitle_font = ImageFont.truetype("./SourceSansPro-Regular.otf", 44)
    author_font = ImageFont.truetype("./SourceSansPro-Regular.otf", 38)

except IOError:
    title_font = ImageFont.load_default()
    subtitle_font = ImageFont.load_default()
    author_font = ImageFont.load_default()

# Text content
title_text = "The Back Goes Backwards"
subtitle_text = "Integrating Biomechanics into\nModern Medicine"
author_text = "By Michael Seiler and Dr. Katherine E. Gallardo, MD"

# Calculate sizes using textbbox instead of deprecated textsize
def get_text_size(text, font):
    bbox = draw.textbbox((0, 0), text, font=font)
    width = bbox[2] - bbox[0]
    height = bbox[3] - bbox[1]
    return width, height

# Title
title_w, title_h = get_text_size(title_text, title_font)

# Subtitle (multiline)
subtitle_lines = subtitle_text.split("\n")
subtitle_sizes = [get_text_size(line, subtitle_font) for line in subtitle_lines]
subtitle_total_height = sum(h for _, h in subtitle_sizes) + (len(subtitle_lines)-1)*10

# Author
author_w, author_h = get_text_size(author_text, author_font)

# Total text block height
spacing = 25
total_block_height = title_h + spacing + subtitle_total_height + spacing + author_h

# Center block vertically
start_y = (final_image.height - total_block_height) // 2

# Draw title
draw.text(((final_image.width - title_w) // 2, start_y), title_text, font=title_font, fill="black")
current_y = start_y + title_h + spacing

# Draw subtitle lines
for i, line in enumerate(subtitle_lines):
    w, h = subtitle_sizes[i]
    draw.text(((final_image.width - w) // 2, current_y), line, font=subtitle_font, fill="black")
    current_y += h + 10

# Draw author
draw.text(((final_image.width - author_w) // 2, current_y + spacing), author_text, font=author_font, fill="black")

# Save output
output_path = "final_image.png"
final_image.save(output_path)

output_path


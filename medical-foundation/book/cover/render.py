from PIL import Image, ImageDraw, ImageFont

# --- CONFIGURATION ---
scale_factor = 4  # Supersampling for smooth anti-aliased text rendering

# Load base image and upscale
base_image = Image.open("cover-image.png").convert("RGBA")
base_image = base_image.resize(
    (base_image.width * scale_factor, base_image.height * scale_factor),
    resample=Image.LANCZOS
)

# Add soft semi-transparent white overlay for contrast
overlay = base_image.copy()
overlay_draw = ImageDraw.Draw(overlay)
overlay_draw.rectangle(
    [0, 0, base_image.width, base_image.height],
    fill=(255, 255, 255, 160)
)
final_image = Image.alpha_composite(base_image, overlay)

# Create draw context
draw = ImageDraw.Draw(final_image)

# Load Source Sans Pro fonts (adjusted size × scale factor)
try:
    title_font = ImageFont.truetype("./SourceSansPro-Bold.otf", 72 * scale_factor)
    subtitle_font = ImageFont.truetype("./SourceSansPro-Regular.otf", 42 * scale_factor)
    author_font = ImageFont.truetype("./SourceSansPro-Regular.otf", 36 * scale_factor)
except IOError:
    title_font = ImageFont.load_default()
    subtitle_font = ImageFont.load_default()
    author_font = ImageFont.load_default()

# Text content
title_text = "The Back Goes Backwards"
subtitle_text = "Integrating Biomechanics into\nModern Medicine"
author_text = "By Michael Seiler and Dr. Katherine E. Gallardo, MD"

# Measure bounding boxes
def get_text_size(text, font):
    bbox = draw.textbbox((0, 0), text, font=font)
    return bbox[2] - bbox[0], bbox[3] - bbox[1]

# Simulate letter spacing manually
def draw_spaced_text(draw, text, font, start_x, y, spacing, fill="#000"):
    x = start_x
    for char in text:
        char_width, _ = get_text_size(char, font)
        draw.text((x, y), char, font=font, fill=fill)
        x += char_width + spacing

# Measure layout blocks
title_w, title_h = get_text_size(title_text, title_font)
subtitle_lines = subtitle_text.split("\n")
subtitle_sizes = [get_text_size(line, subtitle_font) for line in subtitle_lines]
subtitle_total_height = sum(h for _, h in subtitle_sizes) + (len(subtitle_lines) - 1) * (16 * scale_factor)
author_w, author_h = get_text_size(author_text, author_font)

# Spacing
spacing = 40 * scale_factor
block_height = title_h + spacing + subtitle_total_height + spacing + author_h
start_y = (final_image.height - block_height) // 2 + spacing * 4

# Draw title
title_x = (final_image.width - title_w) // 2
draw_spaced_text(draw, title_text, title_font, title_x, start_y, spacing=2 * scale_factor)

# Draw subtitle
current_y = start_y + title_h + spacing
for i, line in enumerate(subtitle_lines):
    w, h = subtitle_sizes[i]
    x = (final_image.width - w) // 2
    draw.text((x, current_y), line, font=subtitle_font, fill="#000")
    current_y += h + (16 * scale_factor)

# Draw author
x = (final_image.width - author_w) // 2
draw.text((x, current_y + spacing * 3), author_text, font=author_font, fill="#000")

# Downscale back to original resolution for anti-aliased finish
final_image = final_image.resize(
    (final_image.width // scale_factor, final_image.height // scale_factor),
    resample=Image.LANCZOS
)

# Save result
output_path = "final_cover_typography_smooth.png"
final_image.save(output_path)
print("Saved:", output_path)



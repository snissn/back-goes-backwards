from PIL import Image, ImageDraw, ImageFont

# === SETTINGS ===
scale_factor = 3  # Upscale factor
image_width_px = 7*1000 * scale_factor
image_height_px = 7*300 * scale_factor
background_color = (255, 255, 255, 0)  # Fully transparent


# === CREATE UPSCALED IMAGE ===
image = Image.new("RGBA", (image_width_px, image_height_px), color=background_color)
draw = ImageDraw.Draw(image)

# === FONT SETTINGS (scaled) ===
title_text = "The Back Goes Backwards"
author_text = "Seiler & Gallardo"
title_font_size = 64 * scale_factor * 7
author_font_size = 48 * scale_factor * 7

try:
    title_font = ImageFont.truetype("./SourceSansPro-Bold.otf", title_font_size)
    author_font = ImageFont.truetype("./SourceSansPro-Bold.otf", author_font_size)
except:
    title_font = ImageFont.load_default()
    author_font = ImageFont.load_default()

# === MEASURE TEXT AND CENTER ===
title_bbox = draw.textbbox((0, 0), title_text, font=title_font)
title_width = title_bbox[2] - title_bbox[0]
title_height = title_bbox[3] - title_bbox[1]
title_x = (image_width_px - title_width) // 2
title_y = 120 * scale_factor

author_bbox = draw.textbbox((0, 0), author_text, font=author_font)
author_width = author_bbox[2] - author_bbox[0]
author_height = author_bbox[3] - author_bbox[1]
author_x = (image_width_px - author_width) // 2
author_y = title_y + title_height + (30 * scale_factor) * 7

# === DRAW TEXT ===
draw.text((title_x, title_y), title_text, font=title_font, fill="black")
draw.text((author_x, author_y), author_text, font=author_font, fill="black")

# === DOWNSCALE FOR SHARPNESS ===
final_image = image.resize((image_width_px // scale_factor, image_height_px // scale_factor), resample=Image.LANCZOS)

# === EXPORT IMAGE ===
output_path = "spine_text_horizontal_crisp.png"
final_image.save(output_path, dpi=(300, 300))



from PIL import Image

# Load the current front cover image (square)
original_front = Image.open("cover-image.png").convert("RGB")

# Target trim size for front cover: 6x9 inches at 300 DPI
target_width_px = 6 * 300  # 1800
target_height_px = 9 * 300  # 2700

# Resize proportionally without distortion (crop to fit)
# Calculate aspect ratios
original_aspect = original_front.width / original_front.height
target_aspect = target_width_px / target_height_px

if original_aspect > target_aspect:
    # Image is too wide — crop sides
    new_width = int(original_front.height * target_aspect)
    left = (original_front.width - new_width) // 2
    right = left + new_width
    cropped = original_front.crop((left, 0, right, original_front.height))
else:
    # Image is too tall — crop top/bottom
    new_height = int(original_front.width / target_aspect)
    top = (original_front.height - new_height) // 2
    bottom = top + new_height
    cropped = original_front.crop((0, top, original_front.width, bottom))

# Resize final front image to 6x9 at 300dpi
final_front_resized = cropped.resize((target_width_px, target_height_px), Image.LANCZOS)

# Save output
output_path = "front-cover-resized-6x9.png"
final_front_resized.save(output_path, dpi=(300, 300))

output_path


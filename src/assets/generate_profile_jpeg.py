from pathlib import Path
from PIL import Image, ImageDraw

out = Path(__file__).parent / 'profile.jpeg'
img = Image.new('RGB', (800, 800), (239, 246, 255))
d = ImageDraw.Draw(img)
d.ellipse((150, 120, 650, 620), fill=(255, 255, 255), outline=(37, 99, 235), width=12)
d.ellipse((320, 240, 480, 400), fill=(255, 255, 255), outline=(148, 163, 184), width=10)
d.rectangle((280, 460, 520, 620), fill=(255, 255, 255), outline=(148, 163, 184), width=10)
d.ellipse((330, 270, 360, 300), fill=(17, 24, 39))
d.ellipse((440, 270, 470, 300), fill=(17, 24, 39))
d.arc((340, 350, 460, 430), start=0, end=180, fill=(17, 24, 39), width=10)
img.save(out, 'JPEG', quality=90)
print('Created', out)

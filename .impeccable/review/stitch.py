"""Assemble les tranches de viewport en une capture pleine page.
Usage : python stitch.py <manifest.json> <out.png>
"""
import json, sys, os
from PIL import Image

manifest = json.load(open(sys.argv[1], encoding='utf-8'))
height = manifest['height']
shots = manifest['shots']
frames = [Image.open(s['file']).convert('RGB') for s in shots]
width = frames[0].width
total = shots[-1]['y'] + frames[-1].height
canvas = Image.new('RGB', (width, total), (11, 15, 25))
for s, img in zip(shots, frames):
    canvas.paste(img, (0, s['y']))
canvas.save(sys.argv[2], optimize=True)
for s in shots:
    os.remove(s['file'])
print(sys.argv[2], canvas.size)

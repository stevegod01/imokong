from pathlib import Path
from PIL import Image
import math

image = Image.open(Path(__file__).parent / 'assets/plain-steel-drum.png').convert('RGB')
w, h = image.size
pixels = image.load()
left, right = [], []
for y in range(h):
    inside = [x for x in range(w) if max(pixels[x, y]) < 235]
    if inside:
        left.append((inside[0], y))
        right.append((inside[-1], y))

def simplify(points, tolerance=1.7):
    if len(points) < 3:
        return points
    ax, ay = points[0]
    bx, by = points[-1]
    length = math.hypot(bx-ax, by-ay)
    distance, split = 0, 0
    for i, (x,y) in enumerate(points[1:-1],1):
        d = abs((bx-ax)*(ay-y)-(ax-x)*(by-ay))/length if length else math.hypot(x-ax,y-ay)
        if d > distance:
            distance, split = d, i
    if distance > tolerance:
        return simplify(points[:split+1],tolerance)[:-1]+simplify(points[split:],tolerance)
    return [points[0],points[-1]]

outline = simplify(left) + list(reversed(simplify(right)))
print(f'Image: {w}x{h}; bounds: {min(p[0] for p in left)},{left[0][1]} to {max(p[0] for p in right)},{left[-1][1]}; vertices: {len(outline)}')
print('polygon('+', '.join(f'{x/w*100:.2f}% {y/h*100:.2f}%' for x,y in outline)+')')

import os
import subprocess

photos_dir = os.path.abspath('public/photos')
music_file = os.path.abspath('public/music/tum-se-hi.mp3')
output_dir = os.path.abspath('public/video')
output_file = os.path.join(output_dir, 'tribute.mp4')

os.makedirs(output_dir, exist_ok=True)

# Find existing photos
photos = []
for i in range(1, 22):
    p = os.path.join(photos_dir, f'photo-{i}.jpg')
    if os.path.exists(p):
        photos.append(p)

print(f"Found {len(photos)} photos to include in video.")

# Create concat text file
list_file = os.path.join(output_dir, 'photos_list.txt')
with open(list_file, 'w', encoding='utf-8') as f:
    for p in photos:
        # ffmpeg requires forward slashes or escaped backslashes
        safe_p = p.replace('\\', '/')
        f.write(f"file '{safe_p}'\n")
        f.write("duration 3\n")
    # Duplicate last photo without duration for concat demuxer
    if photos:
        f.write(f"file '{photos[-1].replace('\\', '/')}'\n")

print("Generated photos_list.txt")

# Run ffmpeg to generate 1280x720 video with music
cmd = [
    'ffmpeg',
    '-f', 'concat',
    '-safe', '0',
    '-i', list_file,
    '-i', music_file,
    '-vf', 'scale=1280:720:force_original_aspect_ratio=decrease,pad=1280:720:(ow-iw)/2:(oh-ih)/2:black,format=yuv420p',
    '-c:v', 'libx264',
    '-preset', 'fast',
    '-crf', '23',
    '-c:a', 'aac',
    '-b:a', '192k',
    '-shortest',
    '-pix_fmt', 'yuv420p',
    '-y',
    output_file
]

print("Running ffmpeg...")
res = subprocess.run(cmd, capture_output=True, text=True)
if res.returncode == 0:
    print(f"SUCCESS! Video created at {output_file} (size: {os.path.getsize(output_file)} bytes)")
else:
    print("FFMPEG error:", res.stderr)

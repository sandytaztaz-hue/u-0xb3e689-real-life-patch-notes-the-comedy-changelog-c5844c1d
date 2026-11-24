import os

# Deterministic: writes the same single line on every run, no trailing newline.
LINE = "v1.9.3: fixed a bug where hiccups started 2 minutes into every job interview and stopped the second it ended."

os.makedirs("/output", exist_ok=True)
with open("/output/entry.txt", "w", encoding="utf-8") as f:
    f.write(LINE)

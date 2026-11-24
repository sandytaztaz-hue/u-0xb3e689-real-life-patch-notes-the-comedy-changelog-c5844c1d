from pathlib import Path

LINE = "v2.0.4: fixed a bug where the tongue kept re-clicking the bitten cheek for three days straight."

out = Path("/output/entry.txt")
out.parent.mkdir(parents=True, exist_ok=True)
text = LINE.strip()
assert 1 <= len(text) <= 160
out.write_text(text, encoding="utf-8")

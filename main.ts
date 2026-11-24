import { mkdirSync, writeFileSync } from "node:fs";
import { join, resolve } from "node:path";

// One-line entry for "Real-Life Patch Notes: The Comedy Changelog".
// A software patch note for a bug in real life / human biology, max 160 chars.
const LINE =
  "v1.3.7: fixed a bug where sneezing closed both eyes, including while driving at 120 km/h.";

function resolveOutputDir(): string {
  const fromEnv = process.env.MAKEFUN_OUTPUT_DIR;
  if (fromEnv && fromEnv.trim().length > 0) {
    return resolve(fromEnv);
  }
  const flagIndex = process.argv.indexOf("--output");
  if (flagIndex !== -1 && process.argv[flagIndex + 1]) {
    return resolve(process.argv[flagIndex + 1]);
  }
  return "/output";
}

const outDir = resolveOutputDir();
mkdirSync(outDir, { recursive: true });
// No trailing newline: entry.txt holds exactly the entry line, nothing else.
writeFileSync(join(outDir, "entry.txt"), LINE, "utf8");

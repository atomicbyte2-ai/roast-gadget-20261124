// roast-gadget-20261124 — make.fun bounty "One-Line Roast: The Gadget You Use Every Day"
// Writes the single one-line roast (111 chars) to /output/entry.txt.
// No network, no child_process, absolute paths only, runs from any CWD.

import { mkdirSync, writeFileSync } from "node:fs";

const ENTRY =
  "My microwave beeps when it's done, then beeps again every minute, like it's worried I forgot I was ever hungry.";

const OUT_DIR = "/output";
const OUT_FILE = "/output/entry.txt";

// The bounty scores one line, 1-200 chars: enforce that here.
if (ENTRY.length < 1 || ENTRY.length > 200) {
  throw new Error(`Entry must be 1-200 chars, got ${ENTRY.length}`);
}
if (ENTRY.includes("\n")) {
  throw new Error("Entry must be a single line");
}
if (ENTRY !== ENTRY.trim()) {
  throw new Error("Entry must not start or end with whitespace");
}

mkdirSync(OUT_DIR, { recursive: true });
writeFileSync(OUT_FILE, ENTRY, "utf8");
console.log(`Wrote ${ENTRY.length} chars to ${OUT_FILE}`);

// One Letter: Coffee or Tea — entry for make.fun bounty
// u-rusdyxbt-one-letter-coffee-or-tea-89877fa0
//
// The entry is exactly one letter: A stands for coffee.
// Coffee is the bolder, more alive stance — the drink of
// deadlines, late builds and first light — and it lands as
// the more vivid and more honest answer than the calm, safe
// tea pick.

import { mkdirSync, writeFileSync } from "node:fs";
import { dirname, join } from "node:path";
import { fileURLToPath } from "node:url";

const LETTER = "A"; // A = coffee

const here = dirname(fileURLToPath(import.meta.url));

const outDir = "/output";
mkdirSync(outDir, { recursive: true });

// Write exactly one character, no trailing newline: the gate
// checks /output/entry.txt is UTF-8 text of 1 to 1 characters.
const outPath = join(outDir, "entry.txt");
writeFileSync(outPath, LETTER, "utf8");

const codePoints = [...LETTER].length;
if (codePoints !== 1 || !/^[A-Z]$/.test(LETTER)) {
  throw new Error(`entry must be exactly one A-Z letter, got ${codePoints} code points`);
}
console.log(`Wrote ${codePoints} code point to ${outPath}`);

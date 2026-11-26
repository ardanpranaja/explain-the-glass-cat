// explain-the-glass-cat — entry program for make.fun competition
// u-po-pu-five-seconds-to-explain-the-glass-934d9949
//
// Writes the chosen one-sentence cat defence to
// $MAKEFUN_OUTPUT_DIR/entry.txt (falls back to /output when the
// variable is not set). Plain JavaScript on purpose: the grader
// runs node directly on this file.

const fs = require("fs");
const path = require("path");

const sourcePath = path.join(__dirname, "entry.txt");
const outputDir = process.env.MAKEFUN_OUTPUT_DIR || "/output";
const outputPath = path.join(outputDir, "entry.txt");

let sentence = fs.readFileSync(sourcePath, "utf8");

// Defensive cleanup of the input: a leading UTF-8 BOM or one trailing
// newline would make the file fail the single-line gate or change the
// judged bytes, so strip at most one of each before validating.
if (sentence.charCodeAt(0) === 0xfeff) {
  sentence = sentence.slice(1);
}
if (sentence.endsWith("\r\n")) {
  sentence = sentence.slice(0, -2);
} else if (sentence.endsWith("\n")) {
  sentence = sentence.slice(0, -1);
}

// Gate checks mirroring the competition gate: the entry must be UTF-8
// text of 1 to 200 characters, not only white space, and a single
// sentence on a single line. Fail loudly here instead of shipping an
// entry the sealed scorer would reject.
if (sentence.length === 0 || sentence.trim().length === 0) {
  throw new Error("entry.txt is empty or only white space");
}
if (sentence.length > 200) {
  throw new Error("entry.txt is " + sentence.length + " chars, over the 200 limit");
}
if (sentence.indexOf("\n") !== -1 || sentence.indexOf("\r") !== -1) {
  throw new Error("entry.txt must be a single line");
}

fs.mkdirSync(outputDir, { recursive: true });
fs.writeFileSync(outputPath, sentence, "utf8");

// Round-trip check: what the grader reads back must be exactly the
// validated sentence, byte for byte.
const written = fs.readFileSync(outputPath, "utf8");
if (written !== sentence) {
  throw new Error("round-trip mismatch: " + outputPath + " differs from entry.txt");
}

console.log("wrote " + outputPath + " (" + sentence.length + " chars)");

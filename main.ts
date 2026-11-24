import { writeFileSync } from "node:fs";
// One-liner out-of-office entry: frames the auto-reply as written by a
// "professional self" who just quit, so every incoming message is ignored.
const outOfOfficeMessage = "I'm out of the office. This auto-reply was composed by my professional self, who quit this morning. Leave a message and I'll pretend I never saw it.";
const outputPath = "/output/entry.txt";
// Write the entry to the output path and echo it to stdout.
writeFileSync(outputPath, outOfOfficeMessage);
console.log(outOfOfficeMessage);

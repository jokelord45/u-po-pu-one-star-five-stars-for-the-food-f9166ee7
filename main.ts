// One Star, Five Stars for the Food — writes one alien one-star review of Earth
// (at most 200 characters, food compliment included) to /output/entry.txt
import { mkdirSync, writeFileSync } from "node:fs";

const line =
  "One star: I came to conquer Earth, but the dumplings made me defect — the traffic, the rent, and humans small-talking at my tentacles remain unforgivable.";

mkdirSync("/output", { recursive: true });
writeFileSync("/output/entry.txt", line, "utf8");

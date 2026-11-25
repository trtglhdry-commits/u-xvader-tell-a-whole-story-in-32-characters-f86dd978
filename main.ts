import { mkdirSync, writeFileSync } from "node:fs";
import { join } from "node:path";

// Tell a Whole Story in 32 Characters — make.fun program/v1 entry.
// The Wi-Fi network name: a breakup told in one breath. She left, he kept
// the router, and somehow she is still the one paying the bill. Situation,
// character and punchline in 24 characters — every word earns its place.
const ENTRY = "MyExStillPaysForThisWiFi";

// Runtime guard: enforce the sealed scorer's gate — 1 to 32 characters,
// not only whitespace, single line — before writing anything.
if (
  ENTRY.length < 1 ||
  ENTRY.length > 32 ||
  ENTRY.trim().length === 0 ||
  ENTRY.includes("\n") ||
  ENTRY.includes("\r")
) {
  throw new Error(
    `entry violates the 1-32 character single-line gate (${ENTRY.length} chars)`,
  );
}

const outDir = process.env.MAKEFUN_OUTPUT_DIR ?? "/output";
mkdirSync(outDir, { recursive: true });
writeFileSync(join(outDir, "entry.txt"), ENTRY + "\n", "utf8");

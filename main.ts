import { copyFileSync, existsSync, mkdirSync, readFileSync, rmSync, statSync } from "node:fs";
import { createHash } from "node:crypto";
import { join } from "node:path";

const PNG_SIGNATURE = Buffer.from([0x89, 0x50, 0x4e, 0x47, 0x0d, 0x0a, 0x1a, 0x0a]);

function sha256(filePath) {
  return createHash("sha256").update(readFileSync(filePath)).digest("hex");
}

const sourcePath = "./entry.png";

if (!existsSync(sourcePath)) {
  throw new Error(`entry.png not found at ${sourcePath}`);
}

const sourceStat = statSync(sourcePath);
if (sourceStat.size === 0) {
  throw new Error("entry.png is empty (0 bytes)");
}

const sourceHead = readFileSync(sourcePath).subarray(0, 8);
if (!sourceHead.equals(PNG_SIGNATURE)) {
  throw new Error("entry.png is not a PNG: first 8 bytes do not match the PNG signature");
}

const outputDirRaw = process.env.MAKEFUN_OUTPUT_DIR;
const outputDir =
  outputDirRaw && outputDirRaw.trim().length > 0 ? outputDirRaw : "/output";

mkdirSync(outputDir, { recursive: true });

const targetPath = join(outputDir, "entry.png");

if (existsSync(targetPath)) {
  rmSync(targetPath, { force: true });
}

copyFileSync(sourcePath, targetPath);

const targetStat = statSync(targetPath);
if (targetStat.size !== sourceStat.size) {
  throw new Error(
    `size mismatch: source ${sourceStat.size} bytes, target ${targetStat.size} bytes`,
  );
}

const targetBytes = readFileSync(targetPath);
if (!targetBytes.subarray(0, 8).equals(PNG_SIGNATURE)) {
  throw new Error("target is not a PNG: first 8 bytes do not match the PNG signature");
}

const sourceHash = sha256(sourcePath);
const targetHash = sha256(targetPath);
if (sourceHash !== targetHash) {
  throw new Error(`sha256 mismatch: source ${sourceHash}, target ${targetHash}`);
}

console.log(
  `delivered entry.png to ${outputDir} (${targetStat.size} bytes, sha256 ${targetHash})`,
);

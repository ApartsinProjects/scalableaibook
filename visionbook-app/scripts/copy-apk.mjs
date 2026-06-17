import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(__dirname, "..");
const source = path.join(appRoot, "android", "app", "build", "outputs", "apk", "debug", "app-debug.apk");
const destination = path.join(appRoot, "visionbook.apk");

await fs.copyFile(source, destination);
console.log(`Copied ${source} to ${destination}`);

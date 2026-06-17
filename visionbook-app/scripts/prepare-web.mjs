import fs from "node:fs/promises";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(__dirname, "..");
const bookRoot = path.resolve(appRoot, "..");
const outRoot = path.join(appRoot, "www");

const includeEntries = [
  "index.html",
  "toc.html",
  ".nojekyll",
  "CNAME",
  "styles",
  "vendor",
  "scripts",
  "images",
  "appendices",
  "front-matter",
  "part-1-foundations",
  "part-2-distributed-data",
  "part-3-distributed-ml",
  "part-4-parallel-deep-learning",
  "part-5-distributed-inference",
  "part-6-multi-agent-systems",
  "part-7-infrastructure",
  "part-8-case-studies"
];

const skipDirs = new Set([
  ".git",
  "node_modules",
  ".html2epub_cache",
  "_diagnostics",
  "_illustrations",
  "KDP",
  "archive",
  "templates",
  "capstone",
  "visionbook-app"
]);

async function pathExists(target) {
  try {
    await fs.access(target);
    return true;
  } catch {
    return false;
  }
}

async function copyRecursive(source, destination) {
  const stat = await fs.stat(source);
  if (stat.isDirectory()) {
    if (skipDirs.has(path.basename(source))) return;
    await fs.mkdir(destination, { recursive: true });
    const entries = await fs.readdir(source, { withFileTypes: true });
    for (const entry of entries) {
      await copyRecursive(path.join(source, entry.name), path.join(destination, entry.name));
    }
    return;
  }
  await fs.mkdir(path.dirname(destination), { recursive: true });
  await fs.copyFile(source, destination);
}

await fs.rm(outRoot, { recursive: true, force: true });
await fs.mkdir(outRoot, { recursive: true });

for (const entry of includeEntries) {
  const source = path.join(bookRoot, entry);
  if (await pathExists(source)) {
    await copyRecursive(source, path.join(outRoot, entry));
  }
}

const indexPath = path.join(outRoot, "index.html");
if (!(await pathExists(indexPath))) {
  throw new Error("Bundled app is missing index.html");
}

console.log(`Bundled book into ${outRoot}`);

import { spawnSync } from "node:child_process";
import path from "node:path";
import { fileURLToPath } from "node:url";

const __dirname = path.dirname(fileURLToPath(import.meta.url));
const appRoot = path.resolve(__dirname, "..");
const androidRoot = path.join(appRoot, "android");
const command = process.platform === "win32" ? "cmd.exe" : "./gradlew";
const args = process.platform === "win32"
  ? ["/d", "/s", "/c", "gradlew.bat", "assembleDebug"]
  : ["assembleDebug"];

const result = spawnSync(command, args, {
  cwd: androidRoot,
  stdio: "inherit"
});

if (result.status !== 0) {
  process.exit(result.status ?? 1);
}

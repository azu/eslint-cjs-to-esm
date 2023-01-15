#!/usr/bin/env node
import { execa } from "execa";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const eslintBin = require.resolve(".bin/eslint");
import url from "node:url";
import path from "node:path";
const __filename__ = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename__);

const builtinConfig = path.join(__dirname, ".eslintrc.cjs");
try {
    console.log({
        eslintBin,
        builtinConfig,
        args: process.argv.slice(2)
    })
    const { stdout, stderr } = await execa("node", [
        eslintBin,
        "--config",
        builtinConfig,
        ...process.argv.slice(2)]);
    if (stdout) {
        console.log(stdout);
        process.exitCode = 0;
    } else {
        console.error(stderr);
        process.exitCode = 1;
    }
} catch (e) {
    if (e.stdout) {
        console.log(e.stdout);
    } else if (e.stderr) {
        console.error(e.stderr);
    }
    process.exit(1);
}

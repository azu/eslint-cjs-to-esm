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
    const args = process.argv.slice(2).map(arg => {
        // if arg is path like string, convert it absolute path
        if (arg.startsWith(".")) {
            return path.resolve(arg);
        } else {
            return arg;
        }
    });
    if (process.env.DEBUG === "eslint-cjs-to-esm") {
        console.debug({ args, eslintBin, builtinConfig });
    }
    const { stdout, stderr } = await execa("node", [
        eslintBin,
        "--config",
        builtinConfig,
        ...args], {
        env: {
            FORCE_COLOR: "true"
        },
        localDir: __dirname,
        cwd: __dirname
    });
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
    process.exit(2);
}

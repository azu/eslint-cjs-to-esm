#!/usr/bin/env node
import { execa } from "execa";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const isWindows = /^win/.test(process.platform);
const eslintBinBasePath = ".bin/eslint";
const eslintBin = require.resolve(isWindows ? `${eslintBinBasePath}.cmd` : eslintBinBasePath);
import url from "node:url";
import path from "node:path";

const __filename__ = url.fileURLToPath(import.meta.url);
const __dirname = path.dirname(__filename__);

const builtinConfig = path.join(__dirname, "eslint.config.mjs");
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
    const command = isWindows ? eslintBin : "node";
    const platformArguments = isWindows ? [] : [eslintBin];
    const { stdout, stderr } = await execa(command, [
        ...platformArguments,
        "--config",
        builtinConfig,
        "--no-config-lookup",
        "--no-inline-config",
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
    process.exit(1);
}

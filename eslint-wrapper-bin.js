import { execa } from "execa";
import { createRequire } from "node:module";

const require = createRequire(import.meta.url);
const eslintBin = require.resolve(".bin/eslint");
try {
    const { stdout, stderr } = await execa(eslintBin, process.argv.slice(2));
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

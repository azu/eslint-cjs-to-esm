import node from "eslint-plugin-n";
import _import from "eslint-plugin-import";
import unicorn from "eslint-plugin-unicorn";
import fileExtensionInImportTs from "eslint-plugin-file-extension-in-import-ts";
import { fixupPluginRules } from "@eslint/compat";
import globals from "globals";
import tsParser from "@typescript-eslint/parser";

export default [{
    files: ["**/*.ts", "**/*.tsx", "**/*.js", "**/*.jsx"],
    plugins: {
        node,
        import: fixupPluginRules(_import),
        unicorn,
        "file-extension-in-import-ts": fileExtensionInImportTs
    },
    
    languageOptions: {
        globals: {
            ...globals.browser
        },
        parser: tsParser,
        ecmaVersion: "latest",
        sourceType: "module"
    },
    
    settings: {
        "import/resolver": {
            typescript: true,
            node: true
        },
        
        node: {
            resolvePaths: ["node_modules/@types"]
        }
    },
    
    rules: {
        "file-extension-in-import-ts/file-extension-in-import-ts": ["error", "always", {
            extMapping: {
                ".ts": ".js"
            }
        }],
        
        "node/no-extraneous-import": "error",
        "node/no-sync": "warn",
        "node/file-extension-in-import": "error",
        "import/extensions": "error",
        
        "import/no-unresolved": ["error", {
            ignore: ["\\.js$"]
        }],
        
        "import/no-useless-path-segments": "error",
        "import/no-extraneous-dependencies": "error",
        "import/no-commonjs": "error",
        "unicorn/prefer-module": "error",
        "unicorn/prefer-node-protocol": "error",
        "unicorn/prefer-top-level-await": "error"
    }
}];

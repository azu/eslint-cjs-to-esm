module.exports = {
    "env": {
        "browser": true,
        "es2021": true
    },
    "overrides": [],
    "parser": "@typescript-eslint/parser",
    "parserOptions": {
        "ecmaVersion": "latest",
        "sourceType": "module"
    },
    "settings": {
        "import/resolver": {
            typescript: true,
            node: true
        },
        "node": {
            "resolvePaths": ["node_modules/@types"],
            "tryExtensions": [".js", ".json", ".node", ".ts", ".d.ts"]
        }
    },
    
    "plugins": [
        "node",
        "import",
        "unicorn"
    ],
    "rules": {
        // https://github.com/mysticatea/eslint-plugin-node
        "node/no-missing-import": "error",
        "node/no-extraneous-import": "error",
        "node/no-sync": "error",
        "node/file-extension-in-import": "error",
        // https://github.com/import-js/eslint-plugin-import
        "import/extensions": "error",
        "import/no-unresolved": "error",
        "import/no-useless-path-segments": "error",
        "import/no-extraneous-dependencies": "error",
        "import/no-commonjs": "error",
        // https://github.com/sindresorhus/eslint-plugin-unicorn
        "unicorn/prefer-module": "error",
        "unicorn/prefer-node-protocol": "error",
        "unicorn/prefer-top-level-await": "error"
    }
};

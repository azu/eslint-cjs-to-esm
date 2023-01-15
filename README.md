# eslint-cjs-to-esm

ESLint wrapper for migration from CJS to ESM.

## Install

Install with [npm](https://www.npmjs.com/package/eslint-cjs-to-esm):

    npm install eslint-cjs-to-esm

## Usage

Command Line Arguments is same to ESLint.

    npx eslint-cjs-to-esm [ESLint Arguments!]

- [Command Line Interface - ESLint - Pluggable JavaScript Linter](https://eslint.org/docs/latest/use/command-line-interface)

Run Lint

    npx eslint-cjs-to-esm "./src/**/*.{js,ts}"

Fix Errors

    npx eslint-cjs-to-esm "./src/**/*.{js,ts}" --fix

> **Note:** You need to start with `.` for relative path. It is wrapper limitation.  
> NG: `npx eslint-cjs-to-esm "src/**/*.ts"  
> OK: `npx eslint-cjs-to-esm "./src/**/*.ts"  

## Rules

### eslint-plugin-node

| ESLint Plugin                                            | Rule                                                                                                                            | Source                                                                                                       | Description                                                       | Fixable |
|----------------------------------------------------------|---------------------------------------------------------------------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------|-------------------------------------------------------------------|---------|
| [node](https://github.com/mysticatea/eslint-plugin-node) | [no-missing-import](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-missing-import.md)               | [:link:](https://github.com/mysticatea/eslint-plugin-node/blob/master/lib/rules/no-missing-import.js)        | disallow import declarations which `import` non-existence modules | -       |
| [node](https://github.com/mysticatea/eslint-plugin-node) | [no-extraneous-import](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-extraneous-import.md)         | [:link:](https://github.com/mysticatea/eslint-plugin-node/blob/master/lib/rules/no-extraneous-import.js)     | disallow import declarations which import extraneous modules      | -       |
| [node](https://github.com/mysticatea/eslint-plugin-node) | [no-sync](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/no-sync.md)                                   | [:link:](https://github.com/mysticatea/eslint-plugin-node/blob/master/lib/rules/no-sync.js)                  | disallow synchronous methods                                      | -       |
| [node](https://github.com/mysticatea/eslint-plugin-node) | [file-extension-in-import](https://github.com/mysticatea/eslint-plugin-node/blob/master/docs/rules/file-extension-in-import.md) | [:link:](https://github.com/mysticatea/eslint-plugin-node/blob/master/lib/rules/file-extension-in-import.js) | enforce the style of file extensions in `import` declarations     | Yes     |

### eslint-plugin-import

| ESLint Plugin                                               | Rule                                                                                                                               | Source                                                                                                        | Description                                                          | Fixable |
|-------------------------------------------------------------|------------------------------------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------------------------------------------|----------------------------------------------------------------------|---------|
| [import](https://github.com/import-js/eslint-plugin-import) | [extensions](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/extensions.md)                                 | [:link:](https://github.com/import-js/eslint-plugin-import/blob/main/src/rules/extensions.js)                 | Ensure consistent use of file extension within the import path.      | -       |
| [import](https://github.com/import-js/eslint-plugin-import) | [no-unresolved](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-unresolved.md)                           | [:link:](https://github.com/import-js/eslint-plugin-import/blob/main/src/rules/no-unresolved.js)              | Ensure imports point to a file/module that can be resolved.          | -       |
| [import](https://github.com/import-js/eslint-plugin-import) | [no-useless-path-segments](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-useless-path-segments.md)     | [:link:](https://github.com/import-js/eslint-plugin-import/blob/main/src/rules/no-useless-path-segments.js)   | Prevent unnecessary path segments in import and require statements.  | Yes     |
| [import](https://github.com/import-js/eslint-plugin-import) | [no-extraneous-dependencies](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-extraneous-dependencies.md) | [:link:](https://github.com/import-js/eslint-plugin-import/blob/main/src/rules/no-extraneous-dependencies.js) | Forbid the use of extraneous packages.                               | -       |
| [import](https://github.com/import-js/eslint-plugin-import) | [no-commonjs](https://github.com/import-js/eslint-plugin-import/blob/main/docs/rules/no-commonjs.md)                               | [:link:](https://github.com/import-js/eslint-plugin-import/blob/main/src/rules/no-commonjs.js)                | Report CommonJS `require` calls and `module.exports` or `exports.*`. | -       |

### eslint-plugin-unicorn

| ESLint Plugin                                                    | Rule                                                                                                                           | Source                                                                                                    | Description                                                               | Fixable |
|------------------------------------------------------------------|--------------------------------------------------------------------------------------------------------------------------------|-----------------------------------------------------------------------------------------------------------|---------------------------------------------------------------------------|---------|
| [unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) | [prefer-module](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-module.md)                   | [:link:](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/rules/prefer-module.js)          | Prefer JavaScript modules (ESM) over CommonJS.                            | Yes     |
| [unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) | [prefer-node-protocol](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-node-protocol.md)     | [:link:](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/rules/prefer-node-protocol.js)   | Prefer using the `node:` protocol when importing Node.js builtin modules. | Yes     |
| [unicorn](https://github.com/sindresorhus/eslint-plugin-unicorn) | [prefer-top-level-await](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/docs/rules/prefer-top-level-await.md) | [:link:](https://github.com/sindresorhus/eslint-plugin-unicorn/blob/main/rules/prefer-top-level-await.js) | Prefer top-level await over top-level promises and async function calls.  | Suggest |

- [ESLint rules for migrating projects from CommonJS to ESM](https://gist.github.com/Jaid/164668c0151ae09d2bc81be78a203dd5)

## Changelog

See [Releases page](https://github.com/azu/eslint-cjs-to-esm/releases).

## Running tests

Install devDependencies and Run `npm test`:

    npm test

## Contributing

Pull requests and stars are always welcome.

For bugs and feature requests, [please create an issue](https://github.com/azu/eslint-cjs-to-esm/issues).

1. Fork it!
2. Create your feature branch: `git checkout -b my-new-feature`
3. Commit your changes: `git commit -am 'Add some feature'`
4. Push to the branch: `git push origin my-new-feature`
5. Submit a pull request :D

## Author

- azu: [GitHub](https://github.com/azu), [Twitter](https://twitter.com/azu_re)

## License

MIT © azu

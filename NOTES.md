# Notes

- https://github.com/joaopalmeiro/create-vite-tsconfigs
- First commit used: https://github.com/solidjs/templates/tree/d785e3d1e5187df34cb2be9bb0eb2679f4b4f1b5
- https://mariusschulz.com/blog/the-showconfig-compiler-option-in-typescript
- https://docs.npmjs.com/cli/v10/commands/npm-install
- https://eslint.org/blog/2023/10/deprecating-formatting-rules/#what-you-should-do-instead
- https://dprint.dev/install/
- https://dprint.dev/plugins/json/config/
- https://marketplace.visualstudio.com/items?itemName=dprint.dprint
- https://dprint.dev/plugins/typescript/config/
- https://github.com/dprint/dprint/issues/4
- https://github.com/dprint/dprint/issues/413
- https://dprint.dev/plugins/toml/: `npx dprint config add toml`
- https://github.com/dprint/js-formatter
- https://github.com/dprint/dprint/issues/736
- https://github.com/joaopalmeiro/create-vue-tsconfigs
- https://gitlab.com/joaommpalmeiro/resetss
- https://dprint.dev/cli/#outputting-file-paths
- https://github.com/microsoft/TypeScript/issues/20110
- https://stackoverflow.com/questions/71349179/will-the-extends-in-tsconfig-json-merge-array-values
- https://miyoon.medium.com/array-parameters-in-tsconfig-json-are-always-overwritten-11c80bb514e1
- https://vitejs.dev/guide/features#client-types: `{ "compilerOptions": { "types": ["vite/client"] } }`
- https://www.typescriptlang.org/tsconfig#extends + https://www.typescriptlang.org/docs/handbook/release-notes/typescript-2-1.html#configuration-inheritance:
  - "The configuration from the base file are loaded first, then overridden by those in the inheriting config file. All relative paths found in the configuration file will be resolved relative to the configuration file they originated in."
  - "It's worth noting that `files`, `include`, and `exclude` from the inheriting config file _overwrite_ those from the base config file, and that circularity between configuration files is not allowed."
  - "Currently, the only top-level property that is excluded from inheritance is `references`."
- https://github.com/dprint/dprint/releases
- https://github.com/dprint/dprint-plugin-markdown/releases
- https://github.com/dprint/dprint-plugin-json/releases
- https://github.com/dprint/dprint/blob/0.45.0/dprint.json
- https://github.com/solidjs/solid-start/releases

## Commands

```bash
npm install -D jiti fs-extra @types/fs-extra dprint
```

```bash
npm install -D "@types/node@$(cat .nvmrc | cut -d . -f 1-2)"
```

```bash
npm install -D dprint npm-run-all2 sort-package-json
```

```bash
npm install -D github:solidjs/templates#d785e3d1e5187df34cb2be9bb0eb2679f4b4f1b5
```

```bash
npx dprint help
```

```bash
npx dprint init
```

```bash
npx dprint output-file-paths
```

```bash
npx dprint output-resolved-config
```

## Snippets

### `.github/workflows/publish-npm.yml` file

```yml
# https://github.com/joaopalmeiro/create-vite-tsconfigs/blob/main/.github/workflows/publish-npm.yml
# https://github.com/actions/setup-node#usage

name: Publish package to npm

on:
  push:
    tags:
      - "v*"

jobs:
  publish:
    runs-on: ubuntu-latest
    steps:
      - uses: actions/checkout@v4
      - uses: actions/setup-node@v4
        with:
          node-version-file: ".nvmrc"
          registry-url: "https://registry.npmjs.org/"
      - run: npm install
      - run: npm run build
      - run: npm publish
        env:
          NODE_AUTH_TOKEN: ${{secrets.NPM_TOKEN}}
```

### `build-tsconfigs.ts` file

```ts
import type { JsonOutputOptions } from "fs-extra";
import { outputJsonSync, readJsonSync } from "fs-extra";
import { resolve } from "node:path";

interface Config {
  filename: string;
  source: string;
  output: string;
}

const CONFIGS: Config[] = [
  {
    filename: "tsconfig.json",
    source: resolve(
      __dirname,
      "node_modules/solid-templates/ts-minimal/tsconfig.json",
    ),
    output: resolve(__dirname, "ts-minimal"),
  },
];

const OUTPUT_OPTIONS: JsonOutputOptions = {
  EOL: "\n",
  finalEOL: true,
  spaces: 0,
};

function main(): void {
  for (const { filename, source, output } of CONFIGS) {
    const configContent = readJsonSync(source);
    // console.log(configContent);

    const outputConfig = resolve(output, filename);

    // https://github.com/jprichardson/node-fs-extra/blob/v2.1.2/docs/readJson-sync.md
    // https://github.com/jprichardson/node-fs-extra/blob/v2.1.2/docs/outputJson-sync.md
    // https://github.com/jprichardson/node-fs-extra/blob/v2.1.2/docs/writeJson-sync.md
    // https://github.com/jprichardson/node-jsonfile#writefilesyncfilename-obj-options
    // https://github.com/jprichardson/node-jsonfile/blob/master/utils.js
    outputJsonSync(outputConfig, configContent, OUTPUT_OPTIONS);
    console.log(`${outputConfig} ✓`);
  }
}

main();
```

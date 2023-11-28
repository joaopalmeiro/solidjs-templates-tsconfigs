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

const OUTPUT_OPTIONS: JsonOutputOptions = { EOL: "\n", finalEOL: true, spaces: 0 };

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

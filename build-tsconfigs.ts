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

console.log(CONFIGS);

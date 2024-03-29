# solidjs-templates-tsconfigs

TSConfig files for projects created from the [solidjs/templates](https://github.com/solidjs/templates) and [solidjs/solid-start](https://github.com/solidjs/solid-start) repos.

- [Source code](https://github.com/joaopalmeiro/solidjs-templates-tsconfigs)
- [npm package](https://www.npmjs.com/package/solidjs-templates-tsconfigs)
- [Licenses](https://licenses.dev/npm/solidjs-templates-tsconfigs/0.1.0)
- [Package Phobia](https://packagephobia.com/result?p=solidjs-templates-tsconfigs@0.1.0)
- [npm trends](https://npmtrends.com/solidjs-templates-tsconfigs)

## Available TSConfig files

### [solidjs/templates](https://github.com/solidjs/templates/tree/924ee8359dc908c3ca3bd622c0c32dd2d666c78e)

| Template                                                                                                    | TSConfig file                                                                                                                |
| ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [ts-minimal](https://github.com/solidjs/templates/tree/924ee8359dc908c3ca3bd622c0c32dd2d666c78e/ts-minimal) | [tsconfig.json](https://github.com/solidjs/templates/blob/924ee8359dc908c3ca3bd622c0c32dd2d666c78e/ts-minimal/tsconfig.json) |

### [solidjs/solid-start](https://github.com/solidjs/solid-start/tree/v1.0.0-rc.0)

| Template                                                                      | TSConfig file                                                                                        |
| ----------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------- |
| [bare](https://github.com/solidjs/solid-start/tree/v1.0.0-rc.0/examples/bare) | [tsconfig.json](https://github.com/solidjs/solid-start/blob/v1.0.0-rc.0/examples/bare/tsconfig.json) |

## Development

Install [fnm](https://github.com/Schniz/fnm) (if necessary).

```bash
fnm install && fnm use && node --version && npm --version
```

```bash
npm install
```

Delete the following [top-level options](https://www.typescriptlang.org/tsconfig#extends) (if necessary):

- `"files"`
- `"include"`
- `"exclude"`
- `"references"`

Remove the following [`compilerOptions` options](https://www.typescriptlang.org/tsconfig) (if necessary):

- [`"paths"`](https://www.typescriptlang.org/tsconfig#paths)

```bash
npm run lint
```

```bash
npm run format
```

## Deployment

```bash
npm pack --dry-run
```

```bash
npm version patch
```

```bash
npm version minor
```

```bash
npm version major
```

- Update the version in the `Licenses` and `Package Phobia` links at the top.

```bash
echo "v$(npm pkg get version | tr -d \")" | pbcopy
```

- Commit and push changes.
- Create a tag on [GitHub Desktop](https://github.blog/2020-05-12-create-and-push-tags-in-the-latest-github-desktop-2-5-release/).
- Check [GitHub](https://github.com/joaopalmeiro/solidjs-templates-tsconfigs/tags)

```bash
npm login
```

```bash
npm publish
```

- Check [npm](https://www.npmjs.com/package/solidjs-templates-tsconfigs).

# solidjs-templates-tsconfigs

TSConfig files for projects created from the [solidjs/templates](https://github.com/solidjs/templates) and [solidjs/solid-start](https://github.com/solidjs/solid-start) repos.

- [Source code](https://github.com/joaopalmeiro/solidjs-templates-tsconfigs)
- [npm package](https://www.npmjs.com/package/solidjs-templates-tsconfigs)

## Available TSConfig files

### [solidjs/templates#d785e3d1e5187df34cb2be9bb0eb2679f4b4f1b5](https://github.com/solidjs/templates/tree/d785e3d1e5187df34cb2be9bb0eb2679f4b4f1b5)

| Template                                                                                                    | TSConfig file                                                                                                                |
| ----------------------------------------------------------------------------------------------------------- | ---------------------------------------------------------------------------------------------------------------------------- |
| [ts-minimal](https://github.com/solidjs/templates/tree/d785e3d1e5187df34cb2be9bb0eb2679f4b4f1b5/ts-minimal) | [tsconfig.json](https://github.com/solidjs/templates/blob/d785e3d1e5187df34cb2be9bb0eb2679f4b4f1b5/ts-minimal/tsconfig.json) |

## Development

```bash
fnm install && fnm use && node --version
```

```bash
npm install
```

```bash
npm run format:check
```

```bash
npm run format && npm run build
```

```bash
npm pack --dry-run
```

## Deployment

```bash
npm version --no-git-tag-version patch
```

```bash
npm version --no-git-tag-version minor
```

```bash
npm version --no-git-tag-version major
```

```bash
npm run format
```

- Commit and push changes.
- Create a tag on [GitHub Desktop](https://github.blog/2020-05-12-create-and-push-tags-in-the-latest-github-desktop-2-5-release/).
- Check [GitHub](https://github.com/joaopalmeiro/solidjs-templates-tsconfigs/actions) and [npm](https://www.npmjs.com/package/solidjs-templates-tsconfigs).

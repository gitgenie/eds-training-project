# EDS training project

A learning project built with Adobe Edge Delivery Services and document-based
authoring.

## Environments
- Preview: https://main--eds-training-project--gitgenie.aem.page/
- Live: https://main--eds-training-project--gitgenie.aem.live/

## Completed work

- [Cards block with date, image, and description styling](https://github.com/gitgenie/eds-training-project/commit/985f3af)
- [Contact form with native validation](https://github.com/gitgenie/eds-training-project/commit/4cafdd9)
- [Responsive side-menu block with linked content panels](https://github.com/gitgenie/eds-training-project/commit/6f9aa6c)
- [Text/image/button importer transformation](https://github.com/gitgenie/eds-training-project/commit/14822c0)
- [Adaptive Form setup notes](https://github.com/gitgenie/eds-training-project/commit/356779e)
- [Commerce integration notes](https://github.com/gitgenie/eds-training-project/commit/73fd595)

## Documentation

Before using the aem-boilerplate, we recommand you to go through the documentation on https://www.aem.live/docs/ and more specifically:
1. [Developer Tutorial](https://www.aem.live/developer/tutorial)
2. [The Anatomy of a Project](https://www.aem.live/developer/anatomy-of-a-project)
3. [Web Performance](https://www.aem.live/developer/keeping-it-100)
4. [Markup, Sections, Blocks, and Auto Blocking](https://www.aem.live/developer/markup-sections-blocks)

## Installation

```sh
npm i
```

## Linting

```sh
npm run lint
```

## Local development

1. Create a new repository based on the `aem-boilerplate` template
1. Add the [AEM Code Sync GitHub App](https://github.com/apps/aem-code-sync) to the repository
1. Install the [AEM CLI](https://github.com/adobe/helix-cli): `npm install -g @adobe/aem-cli`
1. Start AEM Proxy: `aem up` (opens your browser at `http://localhost:3000`)
1. Open the `{repo}` directory in your favorite IDE and start coding :)

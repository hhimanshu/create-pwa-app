> The app is available on [Play Store](https://play.google.com/store/apps/details?id=app.vercel.react_pwa_starter.twa)
### Pre-requisites
- Requires npm version `>= 7.20.0`. Install the latest npm using command `npm install -g npm@latest`.
- Requires `yarn`.

### What it contains
- ReactJS support with TypeScript
- Testing support using Jest and React Testing Library
- Formatting support using Prettier
- ESLint support
- Ability to collect code coverage via Jest
- Support for Storybook

### Commands
- `yarn install` to install dependencies.
- `yarn start` to develop locally.
- `yarn test` to test and see the code coverage.
- `yarn build` to create a production build.
- `yarn build-for-pwa` to create a production build and generate `assetlinks.json` for PWA.
- `yarn start:prod` to serve production build on port `5000`.
- `yarn create:start:prod` to create and start a production build.
- `yarn storybook` to start storybook in development mode.
- `yarn build-storybook` to create production build for storybook.
- `npx -y serve storybook-static -l 5858` to serve production build for storybook on port `5858`.

### A note about routing
Since this is a React Single Page Application (SPA), you may find that if you refresh the page for a URL other than `/` in production build
that you get `404` message. This is because when you refresh the page at a deeper URL, your client-side router (`react-router`) in this project
has not got chance to load and handle routing. Therefore, since your do not have a server (in this project), you
get `404` back.

A nice explanation is available on [this stackoverflow answer](https://stackoverflow.com/a/36623117/379235)

There are 2 places we need to resolve this problem - at production build hosted locally, and production build hosted on
provider.

#### Production build hosted locally

This project uses [`serve`](https://www.npmjs.com/package/serve) which has a flag
called `-s` ([Github](https://github.com/vercel/serve/blob/main/bin/serve.js#L84)). This flag re-writes all non-found
requests to `index.html`. This loads javascript code at `/`, which kicks off the client-side router, hence making URL
refreshes work.

#### Production build hosted on Vercel (provider)

This project is hosted on Vercel, so we needed to write a configuration called `vercel.json`, which is
available [here](/vercel.json).

If you are using Firebase Hosting, refer
to [their documentation](https://firebase.google.com/docs/hosting/full-config#rewrites) on how to configure re-writes.

For other provides, I encourage folks to update this documentation by opening up a PR. If you do, please provide the
reference to the official documentation.

---
[![Powered by Vercel](./src/icons/powered-by-vercel.svg)](https://vercel.com/?utm_source=bonsaiilabs&utm_campaign=oss)

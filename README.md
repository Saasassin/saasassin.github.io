# NitroIq.io (saasassin.github.io)

## Configuration - Local

https://docusaurus.io/docs/installation

## Local Development

`yarn run start`

http://localhost:3000/

If you want to run on a different port:

`yarn run start -- --port 3001`

## Build Static Files for Deployment

`yarn build`

Once it finishes, the static files will be generated within the build directory.

`npm run serve` to test locally

Push changes and the Github Action will run to deploy the site to the `gh-pages` directory, where the site is served from.

## Troubleshooting

If you blow away your node_modules directory, you may need to reset things, so try this:

```
yarn

yarn build
```

# NitroIq.io (saasassin.github.io)
   
## Configuration - Local

```
sudo apt remove cmdtest
sudo apt remove yarn
sudo npm install -g yarn
```

**Do remember to re-open the terminal for changes to take effect.**
 
## Local Development

`npx docusaurus start`

http://localhost:3000/

If you want to run on a different port: 

`npm run start -- --port 3001`

## Build Static Files for Deployment

`yarn build`

Once it finishes, the static files will be generated within the build directory.

`npm run serve` to test locally

Push changes and the Github Action will run to deploy the site to the `gh-pages` directory, where the site is served from.
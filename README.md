# AHS 502 - Apps

## Production

### Prepare package:

    $ npm install

### Start the server:

    $ npm start

You can use `STORAGE_PATH` or `RELATIVE_STORAGE_PATH` (with respect to the package root folder) to override the default storage path, which is the `data` directory under the package root folder.
And, `PORT` to override the default port, which is `3000`.

## Development

### Prepare packages for development (main and app projects):

    $ npm run install:all

### Start the server and any app for development:

The server will start on `4000` and the _app_ will start on `4001`. The server storage path will be the `data-dev` directory under the package root folder.

    $ npm run develop             # Only server
    $ npm run develop:app-name    # Server and some app

### Build apps:

    $ npm run build

### Check for package updates:

    $ npm run updates:check

### Install all package updates:

    $ npm run updates:install

### Add a new app:

1. Create the app source code under `apps` folder:

   ```bash
   $ cd apps
   apps$ create-react-app --template=typescript new-app
   ```

1. Install `cross-env` dependency for it:

   ```bash
   apps$ cd new-app
   apps/new-app$ npm install --save cross-env
   ```

1. Modify its `package.json` file:

   1. Update `name` and `version` fields
   1. Add `description`, `auther`, `proxy` and `homepage` fields
   1. Replace `scripts` field
   1. Update `start` script

   ```json
   {
     "name": "new-app",
     "version": "0.0.0",
     "private": true,
     "description": "AHS 502 - New App",
     "author": "Hessamoddin A Shokravi <ahs502@gmail.com>",
     "scripts": {
       "start": "cross-env PORT=4001 BROWSER=none react-scripts start",
       ...
     },
     "proxy": "http://localhost:4000",
     "homepage": "./",
     "dependencies": {
       ...
       "cross-env": "^7.0.2",
       ...
     },
     ...
   }
   ```

1. In the `README.md` file, note the new development and proxy ports:

   ```markdown
   ...

   ### `npm start`

   Runs the app in the development mode.<br />
   Open [http://localhost:4001](http://localhost:4001) to view it in the browser.
   The API is set to be served on [http://localhost:4001](http://localhost:4000).

   ...
   ```

1. Get back to the root `package.json` file:

   1. To script `install:all`, add `&& npm install --prefix apps/new-app`
   1. Add a new script `develop:new-app` like the others
   1. To script `build`, add `&& npm run build:new-app`
   1. Add a new script `build:new-app` like the others

1. Add `/new-app` static server to file `src/server.ts` like the others

1. Done! Just, run `$ npm run build` and commit your changes.

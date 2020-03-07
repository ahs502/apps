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

    $ npm run develop               # Only server
    $ npm run develop:website       # Server and website
    $ npm run develop:todo-list     # Server and todo-list

### Build apps:

    $ npm run build

### Check for package updates:

    $ npm run updates:check

### Install all package updates:

    $ npm run updates:install

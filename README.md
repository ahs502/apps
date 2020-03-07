# AHS 502 - Apps

### Prepare package:

    $ npm install

### Start the server:

    $ npm start

You can use `STORAGE_PATH` to override the default storage path, which is the `data` directory under the package root folder.
And, `PORT` to override the default port, which is `25200`.

### Prepare packages for development (main and app projects):

    $ npm run install:all

### Start the server and any app for development:

The server will start on `25200` and the _app_ will start on `25201`. The server storage path will be the `data` directory under the package root folder.

    $ npm run develop:server        # Only server
    $ npm run develop:website       # Server and website
    $ npm run develop:todo-list     # Server and todo-list

### Check for package updates:

    $ npm run updates:check

### Install all package updates:

    $ npm run updates:install

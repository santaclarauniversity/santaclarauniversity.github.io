# Santa Clara University Digital Assets

A toolkit with the power to construct pages as they would appear on `scu.edu` in order to rapidly prototype new ideas for the website.


### Installation

#### macOS / OS X

First, install [Homebrew](http://brew.sh/).  This is a package manager for Macs, so we can download what we need through the terminal.

Next, install Git and [Node.js](http://nodejs.org/).  Git is what we use to maintain control of versions of this software, and Node.js is what we use to run the software itself.
```sh
$ brew install git nodejs
```

Next, using Nodejs' internal package manager, *NPM*, you'll need [Gulp](http://gulpjs.com/) and [Bower](http://bower.io/) installed "globally" (`-g`):

```sh
$ npm install -g gulp bower
```

Download the project itself:
```sh
$ git clone https://github.com/santaclarauniversity/scu-web-assets scu-web-assets
$ cd scu-web-assets
```

Get the project's dependencies:

```sh
$ npm install && bower install
```


Finally, to run the application:
```sh
$ gulp --dev
```

Successful launch will open a browser window to `http://localhost:3000` or `http://0.0.0.0:3000`.


#### Windows

First, [download Git](https://git-scm.com/download/win).

Then, [download Node.js](http://blog.teamtreehouse.com/install-node-js-npm-windows).

There may be some steps like changing Windows environment variables so that commands are available in PATH, etc.  This is difficult to document since it seems to occur on a case-by-case basis.

Once you are able to run, e.g., `npm -v` from the command line, you can begin at step 3 (first time using `npm`) in the Mac guide.

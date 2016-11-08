# Santa Clara University Digital Assets

This is our ~~first~~ second attempt at completing an **automated build**.  This tool lets us rapidly prototype new ideas and full pages for the scu.edu website.

### Installation

#### macOS / OS X

First, install [Homebrew](http://brew.sh/).  This is a package manager for Macs which lets you download lots of common developer utilities directly from the terminal.

Next, install Git and [Node.js](http://nodejs.org/).  Git is what we use to maintain control of versions of this software, and Node.js is what we use to run the software itself.
```sh
$ brew install git nodejs
```

Next, using Nodejs' internal package manager, *NPM*, you'll need [Gulp](http://gulpjs.com/) and [Bower](http://bower.io/) installed "globally" (`-g`):

```sh
$ npm install -g gulp bower
```

Now, acquire the project itself, and enter the directory it is in:
```sh
$ git clone https://github.com/santaclarauniversity/scu-web-assets scu-web-assets
$ cd scu-web-assets
```

Almost done; now we just need to get this project's dependencies:

```sh
$ npm install && bower install
```

Note: a common error with `npm install` commands is that red text will come up complaining about permissions.  Technically, this *should not* happen and if it does you shouldn't do this, but the workaround is to type the same command with `sudo` and a space before the command.  Ex:

```sh
$ sudo npm install -g gulp bower
```

This will prompt you for your Mac's user password, which you use to log into your Mac.

Finally, to run the application:
```sh
$ gulp --dev
```

You'll know it works if a browser window opens and you see the toolkit's homepage (should go to http://0.0.0.0:3000 or some similar variation).  Congratulations!

#### Windows

First, acquire Git: https://git-scm.com/download/win

Next, Node.js: http://blog.teamtreehouse.com/install-node-js-npm-windows

There may be some complicated steps like changing environment variables so that commands are available in PATH, etc.  This is difficult to document since it seems to occur on a case-by-case basis.

If you can manage to defeat the odds and complete the above two steps, then you can start from the Mac guide above at the first `npm` command and proceed through the remaining steps.


### Code Style

The current format is two spaces for indents.  Language-dependent rules can be found in `.csslintrc` (CSS) and `.eslintrc` (JavaScript, ES6 standard).

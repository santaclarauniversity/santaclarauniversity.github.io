# Santa Clara University Digital Assets

This is our ~~first~~ second attempt at completing an **automated build**.

### Installation

First, install [Node.js](http://nodejs.org/).

You'll need [Gulp](http://gulpjs.com/) and [Bower](http://bower.io/) installed globally:

```sh
$ npm install -g gulp bower
```

Get the project dependencies:

```sh
$ npm install && bower install
```

And build the documentation with:

```sh
$ gulp --dev
```

That's it!

Alternatively, to shortcut past the npm rebuilding stage, you can just run one of the many Gulp tasks either individually:

```sh
$ gulp <individual command here>
```

Or the whole sequence in order:

```sh
$ gulp
```

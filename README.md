# Santa Clara University Digital Assets

This is our ~~first~~ second attempt at completing an **automated build**.

### Installation

First, install [Node.js](http://nodejs.org/).

You need [Gulp](http://gulpjs.com/) installed globally:

```sh
$ npm install -g gulp
```

Get the dependencies for Gulp:

```sh
$ npm install
```

Finally, the site uses [Bower](http://bower.io/) to keep track of static dependencies like Bootstrap, Modernizr, etc.
In order to grab the latest, just install Bower (technically should already be installed because of the above command, but just in case):

```sh
$ npm install -g bower
$ bower install
```

The *bower install* command will grab all of the latest versions of the required sources listed in *bower.json*.

Documentation is constructed with [Fabricator](https://github.com/fbrctr/fabricator).  It's quite simple:

```sh
$ npm start
```

Alternatively, to shortcut past the npm rebuilding stage, you can just run one of the many Gulp tasks either individually:

```sh
$ gulp <individual command here>
```

Or the whole sequence in order:

```sh
$ gulp
```


Only the following will require a full restart (i.e. re-run of *gulp*, *gulp --dev*, or *npm start*):

* Anything being added to ./assets/ (including images and fonts, currently) (TODO)
* Anything involving alteration of gulp file (including, for example, removing/adding Bower components)

Everything else *should* be automatically reloaded by Fabricator - namely, anything inside of ./src/.


### TODO

#### Code

* Modernizr should be used programatically instead of just linking to the current SCU website's JS; or should it?
* Enable content in ./assets/**/* to be reloaded automatically


#### Content Types

* Person Spotlight looks very messed up unless the size of the browser is small
* Image Gallery next/prev button glyphicons don't show up until browser resized or area of buttons is clicked


#### Demos

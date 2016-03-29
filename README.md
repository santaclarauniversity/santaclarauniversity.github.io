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

Fabricator is designed to "restart" itself silently whenever a change is made to virtually anything (JavaScript, CSS, images).  Adding, updating or otherwise altering Bower components will require a manual restart (just close and re-run the above command).  Fonts can just be updated manually and a browser refresh should update.


### TODO

#### Content Types

* Person Spotlight looks very messed up unless the size of the browser is small
* Image Gallery next/prev button glyphicons don't show up until browser resized or area of buttons is clicked

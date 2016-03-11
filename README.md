# Santa Clara University Digital Assets

This is our ~~first~~ second attempt at completing an **automated build**.

### Installation

First, install [Node.js](http://nodejs.org/).

You need [Gulp](http://gulpjs.com/) installed globally:

```sh
$ npm i -g gulp
$ gulp
```

Get the dependencies for Gulp:

```sh
$ npm install
```

Finally, the site uses [Bower](http://bower.io/) to keep track of static dependencies like Bootstrap, Modernizr, etc.
In order to grab the latest, just install Bower:

```sh
$ npm install -g bower
$ bower install
```

The *bower install* command will grab all of the latest versions of the required sources listed in *bower.json*.

Documentation is constructed with [Fabricator](https://github.com/fbrctr/fabricator).  It's quite simple:

```sh
$ npm start
```

Fabricator is designed to "restart" itself silently whenever a change is made to virtually anything (JavaScript, CSS, images).  Adding, updating or otherwise altering Bower components will require a manual restart (just close and re-run the above command).  Fonts can just be updated manually and a browser refresh should update.

# Santa Clara University Digital Assets

A toolkit with the power to construct pages as they would appear on `scu.edu` in order to rapidly prototype new ideas for the website.

### Installation

#### Prerequisites

To begin, you will need to have [Node.js](https://nodejs.org/en/download/) and [Git](https://git-scm.com/downloads) installed. Downloads are available for both Windows and Mac OS.

#### Installing Dependencies

Next, using Nodejs' internal package manager, *NPM*, you'll need [Gulp](http://gulpjs.com/) and [Bower](http://bower.io/) installed "globally" (`-g`):

```sh
$ npm install -g gulp bower
```

Download the project itself:
```sh
$ git clone https://github.com/santaclarauniversity/scu-web-assets scu-web-assets
$ cd scu-web-assets
```

#### Running the Toolkit

To build the toolkit:
```sh
$ npm build
```

Successful launch will open a browser window to `http://localhost:3000` or `http://0.0.0.0:3000`.

### Prototyping

1. Create a new HTML document with `src/views/demos`. 
2. Any open browsers will refresh with the page you've created available.
3. Making changes to your file will trigger a rebuild of the assets and a refresh of the page.

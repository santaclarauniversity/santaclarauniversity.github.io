# Santa Clara University Digital Assets

This is our first attempt at completing an **automated build**.

### Installation

First, install [Node.js][node.js].

You need Gulp installed globally:

```sh
$ npm i -g gulp
$ gulp
```
Get the dependencies for Gulp:
```sh
$ npm install
```

Documentation is made with `jekyll` - build the docs:

```sh
$ gem install jekyll
$ cd docs
$ jekyll serve
```

### Building CSS and JavaScript with Gulp

To build all CSS and JavaScript code:

```sh
$ gulp deploy
```

Alternatively, you can choose to do either CSS or JavaScript:

```sh
$ gulp [css/js]
```

Note: Your code will be checked by a 'linter' and style checker which will err if your code is either broken, inefficient, or not compliant with the style format.  Make sure your code passes both the test for JS and CSS before you push any changes.

### To-do:
* Template demonstrations should become the style guide.

[node.js]: <http://nodejs.org>

# dummymenu

Utility to quickly create a dummy navigation menu for e.g. prototyping.
Heavily inspired by dummytext.


## Basic Usage

Include the utility:

```html
<script src="dummymenu.js"></script>
```

Insert an element with the `data-dummymenu` attribute in your HTML:

```html
<nav data-dummymenu="x20-l2-d4"></nav>
```


## Configuration

You can use the `data-dummymenu` attribute to configure the outcome of the transformation.

Parameters start with a character followed by a number and are separated by a dash ('-').

- repeat: `x` (default: 10)
  Define how many items should be created.

- depth: `d` (default: 1)
  Specifies the depth of the menu.

- link: `l`
  Set link style.


## Build

Run the Grunt default task to test and build the project.


## License

[Licensed under the MIT license.](http://opensource.org/licenses/MIT)

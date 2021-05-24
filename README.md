<p align="center">
  <img src="/src/images/icon128.png" alt="logo">
  <br>
  <h1 align="center">twitter-mod.js</h1>
</p>

**Table of contents**

* <a href='#introduction'>Introduction</a>
* <a href='#screenshots'>Screenshots</a>
* <a href='#install'>Install</a>
* <a href='#dependencies'>Dependencies</a>
* <a href='#development'>Development</a>
* <a href='#license'>License</a>

## <a id='introduction'>Introduction</a>

twitter-mod.js is an extension for Chromium-derived (eg Chrome) browsers.
The extension can modify the Twitter website to show or hide certain features
from its user interface.

For example, you can hide suggested users, topics, and trends in the sidebar
and on your timeline which removes interrupting content. It's also possible to
hide the follower and following count from profile pages, or create a read-only 
version of the Twitter website. The experience you create depends on the settings 
you choose.

The default settings create a read-only version of the Twitter website. The settings
can be easily changed from the extensions popover. Setting changes are immediate
and do not require a page refresh.

## <a id='screenshots'>Screenshots</a>

The following is a screenshot of the extensions' popover. Items that
are checked blue are hidden.

<p align="center">
  <img src="/assets/preview-twittermod.png">
</p>

## <a id='install'> Install </a>

**Webstore**

This extension isn't on any webstores (yet).

**Source**

A copy of [node.js](https://nodejs.org) and [yarn](https://yarnpkg.com/) 
are required to build.

* Clone a copy of the extension:

      git clone https://github.com/rg-3/twitter-mod.js

* Enter the cloned directory:

      cd twitter-mod.js

* Run `yarn` to grab the dependencies:

      yarn

* Run `webpack` to build the extension:

      yarn run webpack

* Open `chrome://extensions` in your browser.

* Enable the `Developer mode` checkbox if you haven't already.

* Click the `Load unpacked extension` button and point it at
  the `build/` directory in the cloned repository.

* Done.

## <a id='dependencies'> Dependencies </a>

**Runtime dependencies**

Dependencies used while the extension is running:

* [Spectre.css](https://picturepan2.github.io/spectre/)
  A Lightweight, Responsive and Modern CSS Framework.

## <a id='development'>Development</a>

*Build*

Every time you make a change you should run `yarn run webpack` to rebuild
your changes in the `build/` directory. You might also need to reload the 
extension in Chrome after this step.

*Linter*

[node.js](https://nodejs.org/) and [yarn](https://yarnpkg.com/) are used to 
run the [semistandard](https://github.com/standard/semistandard) linter across the 
javascript source files. In order to run the linter, you can do as follows:

* First step, install the dependencies:

      yarn

* Then run the linter:

      yarn run linter

## Thanks

Credit and thanks to the font authors:

  * [Pangolin license](/src/fonts/LICENSE.pangolin.txt)
  * [Kanit license](/src/fonts/LICENSE.kanit.txt)

Credit and thanks to the icon authors:

* Thanks to [Icon King1](https://freeicons.io/profile/3) for the extension icon.

## <a id='source'>License</a>

The MIT License, see [./src/LICENSE.txt](./src/LICENSE.txt) for details.


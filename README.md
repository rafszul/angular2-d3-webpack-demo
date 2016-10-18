# angular2-d3-webpack-demo

[![Join the chat at https://gitter.im/angular2-d3-webpack-demo/Lobby](https://badges.gitter.im/angular2-d3-webpack-demo/Lobby.svg)](https://gitter.im/angular2-d3-webpack-demo/Lobby?utm_source=badge&utm_medium=badge&utm_campaign=pr-badge&utm_content=badge)

if you want to see the results go to http://frame-maker-chipmunk-48642.netlify.com/

just remember the work is happening kind of now and tomorrow afternoon so it might not feel exactly like a football game.

so far it's just a seed repo of [angular 2](https://angular.io) and typescript using [webpack](http://webpack.github.io/) for building our files and assisting with boilerplate. we're also using protractor for our end-to-end story and karma for our unit tests.
* best practices in file and application organization for [angular 2](https://angular.io/).
* ready to go build system using [webpack](https://webpack.github.io/docs/) for working with [typescript](http://www.typescriptlang.org/).
* testing angular 2 code with [jasmine](http://jasmine.github.io/) and [karma](http://karma-runner.github.io/).
* coverage with [istanbul](https://github.com/gotwarlost/istanbul)
* end-to-end angular 2 code using [protractor](https://angular.github.io/protractor/).
* stylesheets with [sass](http://sass-lang.com/) (not required, it supports regular css too).
* error reported with [tslint](http://palantir.github.io/tslint/) and [codelyzer](https://github.com/mgechev/codelyzer).
* documentation with [typedoc](http://typedoc.org/).

single page app, with angular2 d3 charts and an "upload .csv" button.

once an user uploads the data a table and two charts are displayed allowing for some edits that are mirrored in the charts or in the table

// maybe some additional views.

// and at first schema for the data

// maybe use  for larger data sets

// or just clone raw instead (

if you want to see the code ... you just found it and you probably know what to do next.

it's mainly an exercise with webpack and it's configuration. 

the process sets the standard for architecture and structure of the code.

the preprocessors ensure modular css

angular2 rules regarding modular architecture are followed

the repo is ready for tests with mocha and jasmine 'webpack test'

>warning: make sure you're using the latest version of node.js and npm

[is angular 2 ready yet?](http://splintercode.github.io/is-angular-2-ready/)

**note: this guide is following the angular's [style guide](http://angular.io/styleguide) so i will be changing conventions here and there eventually. you are free to use your own conventions with this starter.**
**note 2: there is no conventions yet for rc5 on the style guide so there will be a future update here for that.**

### quick start

> clone/download the repo then edit `app.ts` inside [`/src/app/app.component.ts`](/src/app/app.component.ts)

```bash
# clone our repo
$ git clone https://github.com/rafszul/angular2-d3-webpack-demo.git my-app

# change directory to your app
$ cd my-app

# install the dependencies with npm
$ npm install

# start the server
$ npm start
```
go to [http://localhost:8080](http://localhost:8080) in your browser.

# table of contents

* [getting started](#getting-started)
    * [dependencies](#dependencies)
    * [installing](#installing)
    * [developing](#developing)
    * [testing](#testing)
    * [production](#production)
    * [documentation](#documentation)
* [frequently asked questions](#faq)
* [typescript](#typescript)
* [license](#license)

# getting started

## dependencies

what you need to run this app:
* `node` and `npm` (use [nvm](https://github.com/creationix/nvm))
* ensure you're running node (`v5.x.x`+) and npm (`3.x.x`+)

## installing

* `fork` this repo
* `clone` your fork
* `npm install` to install all dependencies

## developing

after you have installed all dependencies you can now start developing with:

* `npm start`

it will start a local server using `webpack-dev-server` which will watch, build (in-memory), and reload for you. the application can be checked at `http://localhost:8080`.

as an alternative, you can work using hot module replacement (hmr):

* `npm run start:hmr`

and you are all set! you can now modify your components on the fly without having to reload the entire page.

## testing

#### 1. unit tests

* single run: `npm test`
* live mode (tdd style): `npm run test-watch`

#### 2. end-to-end tests (aka. e2e, integration)

* single run:
  * in a tab, *if not already running!*: `npm start`
  * in a new tab: `npm run webdriver-start`
  * in another new tab: `npm run e2e`
* interactive mode:
  * instead of the last command above, you can run: `npm run e2e-live`
  * when debugging or first writing test suites, you may find it helpful to try out protractor commands without starting up the entire test suite. you can do this with the element explorer.
  * you can learn more about [protractor interactive mode here](https://github.com/angular/protractor/blob/master/docs/debugging.md#testing-out-protractor-interactively)

## production

to build your application, run:

* `npm run build`

you can now go to `/dist` and deploy that to your server!

## documentation

you can generate api docs (using [typedoc](http://typedoc.org/)) for your code with the following:

* `npm run docs`

# faq

#### do i need to add script / link tags into index.html ?

no, webpack will add all the needed javascript bundles as script tags and all the css files as link tags. the advantage is that you don't need to modify the index.html every time you build your solution to update the hashes.

#### how to include external angular 2 libraries ?

it's simple, just install the lib via npm and import it in your code when you need it. don't forget that you need to configure some external libs in the [bootstrap](https://github.com/rafszul/angular2-d3-webpack-demo/blob/master/src/main.ts) of your application.

#### how to include external css files such as bootstrap.css ?

just install the lib and import the css files in [vendor.ts](https://github.com/rafszul/angular2-d3-webpack-demo/blob/master/src/vendor.ts). for example this is how to do it with bootstrap:

```sh
npm install bootstrap@next --save
```

and in [vendor.ts](https://github.com/rafszul/angular2-d3-webpack-demo/blob/master/src/vendor.ts) add the following:

```ts
import 'bootstrap/dist/css/bootstrap.css';
```

# typescript

> to take full advantage of typescript with autocomplete you would have to use an editor with the correct typescript plugins.

## use a typescript-aware editor

we have good experience using these editors:

* [visual studio code](https://code.visualstudio.com/)
* [webstorm 11+](https://www.jetbrains.com/webstorm/download/)
* [atom](https://atom.io/) with [typescript plugin](https://atom.io/packages/atom-typescript)
* [sublime text](http://www.sublimetext.com/3) with [typescript-sublime-plugin](https://github.com/microsoft/typescript-sublime-plugin#installation)

# license

[mit](/license)

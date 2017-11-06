# Dashboard

[![Build Status][travis-image]][travis-url]
[![Dependency Status][dependency-image]][dependency-url]
[![devDependency Status][devdependency-image]][devdependency-url]
[![Code Style][style-image]][style-url]

[travis-image]: https://img.shields.io/travis/zce/dashboard/vue.svg
[travis-url]: https://travis-ci.org/zce/dashboard
[dependency-image]: https://img.shields.io/david/zce/dashboard.svg
[dependency-url]: https://david-dm.org/zce/dashboard
[devdependency-image]: https://img.shields.io/david/dev/zce/dashboard.svg
[devdependency-url]: https://david-dm.org/zce/dashboard?type=dev
[style-image]: https://img.shields.io/badge/code%20style-standard-brightgreen.svg
[style-url]: http://standardjs.com/

> A dashboard scaffolding based on vue.js inspired by [vuejs-templates/webpack](https://github.com/vuejs-templates/webpack).


## Preview

![WEDN.NET Dashboard](static/preview.png)


## Online demo

[http://dashboard.micua.com](http://dashboard.micua.com)

> - username: zce
> - password: wanglei

### API Server

[http://jsonplaceholder.micua.com](http://jsonplaceholder.micua.com)

Source: [zce/api-server](https://github.com/zce/api-server)


## Clone Repo

```bash
# clone
$ git clone https://github.com/zce/dashboard.git

# api server
$ git clone https://github.com/zce/api-server.git

# submodule
$ git submodule init && git submodule update
```


## Build Setup

``` bash
# install dependencies
$ npm install

# serve with hot reload at http://localhost:2017
$ npm run dev

# build for production with minification
$ npm run build

# build for production and view the bundle analyzer report
$ npm run build --report

# build for production and deploy to gh-pages
$ npm run deploy
```

or yarn

``` bash
# install dependencies
$ yarn

# serve with hot reload at http://localhost:2017
$ yarn dev

# build for production with minification
$ yarn build

# build for production and view the bundle analyzer report
$ npm_config_report=true yarn build
# Windows
$ set npm_config_report=true yarn build

# build for production and deploy to gh-pages
$ yarn deploy
```


## Environment

- [Node](https://nodejs.org/) >= 6.0.0
- [Yarn](https://yarnpkg.com/) >= 0.20.0
- [NPM](https://www.npmjs.com/) >= 3.0.0


## Stacks

- [Vue](http://vuejs.org/)
- [Vuex](https://github.com/vuejs/vuex)
- [Vue Router](https://github.com/vuejs/vue-router)
- [Vue I18n](https://github.com/kazupon/vue-i18n)
- ~~[Vue Resource](https://github.com/pagekit/vue-resource)~~
- [Axios](https://github.com/mzabriskie/axios)
- [Element UI](https://github.com/ElemeFE/element)
- [NProgress](https://github.com/rstacruz/nprogress)
- [Webpack](https://webpack.js.org/)
- [Vue Loader](http://vuejs.github.io/vue-loader)
- [Babel](https://babeljs.io/)
- [Sass](http://sass-lang.com/)
- [JSON Server](https://github.com/typicode/json-server)
- [Mock](http://mockjs.com/)
- [ESLint](http://eslint.org/)
- [EditorConfig](http://editorconfig.org/)
- [Travis CI](https://travis-ci.org/)


## Todos

- [x] Restructure config file
- [x] Remove unused packages
- [x] Custom Element UI theme
- [x] All pages structure
- [x] JSON Server
- [x] Global state
- [x] Table demo
- [x] Login module
- [x] Restructure libs code
- [x] vue-resource -> Axios
- [ ] Options module
- [ ] Users module
- [ ] Media module
- [ ] Posts module
- [ ] Terms module
- [ ] Comments module
- [ ] Other module
- [ ] Config package
- [ ] Deploy to GitHub Pages by Travis CI


## Link

- [Compare vs: f78054](https://github.com/vuejs-templates/webpack/compare/f78054e9d3d40fcf5ebf3224b6117c4a46d8c097...master)


<!--
## Packages

```bash
yarn add axios element-ui nprogress store vue vue-i18n vue-router vuex vuex-router-sync -S
```

```bash
yarn add autoprefixer babel-core babel-eslint babel-loader babel-plugin-transform-runtime babel-preset-env babel-preset-stage-2 chalk compression-webpack-plugin connect-history-api-fallback copy-webpack-plugin css-loader eslint eslint-config-standard eslint-friendly-formatter eslint-loader eslint-plugin-html eslint-plugin-import eslint-plugin-node eslint-plugin-promise eslint-plugin-standard eventsource-polyfill express extract-text-webpack-plugin file-loader friendly-errors-webpack-plugin html-webpack-plugin http-proxy-middleware node-sass opn optimize-css-assets-webpack-plugin ora rimraf sass-loader semver url-loader vue-loader vue-style-loader vue-template-compiler webpack webpack-bundle-analyzer webpack-dev-middleware webpack-hot-middleware -D
```
-->


## License

[MIT](LICENSE) &copy; [汪磊](http://github.com/zce) & [WEDN.NET](http://wedn.net)

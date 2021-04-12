<h1 align="center">CoCart - JavaScript Library <a href="https://github.com/co-cart/cocart-js-lib/releases/latest/"><img src="https://img.shields.io/static/v1?goVersion=&message=v1.0.1&label=&color=9a6fc4&style=flat-square"></a></h1>

<p align="center"><img src="https://raw.githubusercontent.com/co-cart/co-cart/master/.github/Logo-1024x534.png.webp" alt="CoCart" /></p>

> 🍴 Forked from WooCommerce JavaScript Library and modified to support CoCart REST API instead. Authentication is optional.

JavaScript library for CoCart, supports CommonJS (CJS) and ECMAScript Modules (ESM).

Requests are made with [Axios library](https://github.com/axios/axios) with [support to promises](https://github.com/axios/axios#promises).

[![build status](https://travis-ci.org/co-cart/cocart-js-lib.svg?branch=master)](https://travis-ci.org/github/co-cart/cocart-js-lib)
[![npm version](https://img.shields.io/npm/v/@cocart/cocart-rest-api.svg)](https://www.npmjs.com/package/@cocart/cocart-rest-api)

> ⚠️This library will **NOT** support the **LEGACY API** of CoCart.

## Installation

```
npm install --save @cocart/cocart-rest-api
```

## Getting started

Check out the CoCart API endpoints and data that can be manipulated in <https://docs.cocart.xyz/>.

## Setup

### ESM example

```js
import CoCartAPI from "@cocart/cocart-rest-api";

const CoCart = new CoCartAPI({
  url: "https://example.com",
});
```

### CJS example

```js
const CoCartAPI = require("@cocart/cocart-rest-api").default;

const CoCart = new CoCartAPI({
  url: "https://example.com",
});
```

### Options

| Option            | Type      | Required | Description                                                                                                                                                                         |
|-------------------|-----------|----------|-------------------------------------------------------------------------------------------------------------------------------------------------------------------------------------|
| `url`             | `String`  | yes      | Your Store URL, example: https://example.com/                                                                                                                                       |
| `consumerKey`     | `String`  | no       | Your API consumer key or username.                                                                                                                                                  |
| `consumerSecret`  | `String`  | no       | Your API consumer secret or password.                                                                                                                                               |
| `wpAPIPrefix`     | `String`  | no       | Custom WP REST API URL prefix, used to support custom prefixes created with the [rest_url_prefix](https://developer.wordpress.org/reference/functions/rest_get_url_prefix/) filter. |
| `version`         | `String`  | no       | API version, default is `v1`                                                                                                                                                        |
| `encoding`        | `String`  | no       | Encoding, default is 'utf-8'                                                                                                                                                        |
| `queryStringAuth` | `Bool`    | no       | When `true` and using under HTTPS force Basic Authentication as query string, default is `false`                                                                                    |
| `port`            | `string`  | no       | Provide support for URLs with ports, eg: `8080`                                                                                                                                     |
| `timeout`         | `Integer` | no       | Define the request timeout                                                                                                                                                          |
| `axiosConfig`     | `Object`  | no       | Define the custom [Axios config](https://github.com/axios/axios#request-config), also override this library options.                                                                |

## Methods

### GET

- `.get(endpoint)`
- `.get(endpoint, params)`

| Params     | Type     | Description                                               |
|------------|----------|-----------------------------------------------------------|
| `endpoint` | `String` | CoCart API endpoint, example: `get-cart` or `products/32` |
| `params`   | `Object` | Query strings params, example: `{ per_page: 20 }`         |

### POST

- `.post(endpoint, data)`
- `.post(endpoint, data, params)`

| Params     | Type     | Description                                                 |
|------------|----------|-------------------------------------------------------------|
| `endpoint` | `String` | CoCart API endpoint, example: `add-item` or `item`          |
| `data`     | `Object` | JS object to be converted into JSON and sent in the request |
| `params`   | `Object` | Query strings params                                        |

### DELETE

- `.delete(endpoint)`
- `.delete(endpoint, params)`

| Params     | Type     | Description                                      |
|------------|----------|--------------------------------------------------|
| `endpoint` | `String` | CoCart API endpoint, example: `item` or `coupon` |
| `params`   | `Object` | Query strings params, example: `{ force: true }` |

## Bug Reporting

If you think you have found a bug in the library, please [open a new issue](https://github.com/co-cart/cocart-js-lib/issues/new/choose) and I will do my best to help you out.

## CoCart Channels

We have different channels at your disposal where you can find information about the CoCart project, discuss it and get involved:

[![Twitter: cart_co](https://img.shields.io/twitter/follow/cart_co?style=social)](https://twitter.com/cart_co) [![CoCart JS Lib Github Stars](https://img.shields.io/github/stars/co-cart/cocart-js-lib?style=social)](https://github.com/co-cart/cocart-js-lib)

<ul>
  <li>📖 <strong>Docs</strong>: this is the place to learn how to build amazing sites with CoCart. <a href="https://docs.cocart.xyz/#getting-started">Get started!</a></li>
  <li>👪 <strong>Community</strong>: use our Slack chat room to share any doubts, feedback and meet great people. This is your place too to share <a href="https://cocart.xyz/community/">how are you planning to use CoCart!</a></li>
  <li>🐞 <strong>GitHub</strong>: we use GitHub for bugs and pull requests, doubts are solved with the community.</li>
  <li>🐦 <strong>Social media</strong>: a more informal place to interact with CoCart users, reach out to us on <a href="https://twitter.com/cart_co">Twitter.</a></li>
  <li>💌 <strong>Newsletter</strong>: do you want to receive the latest plugin updates and news? Subscribe <a href="https://twitter.com/cart_co">here.</a></li>
</ul>

## I'm not seeing `X-COCART-API` header returning

If you want this header to return then you need to enable CORS. Simply [install CoCart CORS plugin](https://wordpress.org/plugins/cocart-cors/) for quick activation.

## Changelog

[See changelog for details](https://github.com/co-cart/cocart-js-lib/blob/master/CHANGELOG.md)

## Credits

CoCart is developed and maintained by [Sébastien Dumont](https://github.com/seb86).

---

[sebastiendumont.com](https://sebastiendumont.com) &nbsp;&middot;&nbsp;
GitHub [@seb86](https://github.com/seb86) &nbsp;&middot;&nbsp;
Twitter [@sebd86](https://twitter.com/sebd86)

<p align="center">
    <img src="https://raw.githubusercontent.com/seb86/my-open-source-readme-template/master/a-sebastien-dumont-production.png" width="353">
</p>

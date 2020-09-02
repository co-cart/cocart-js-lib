# CoCart - JavaScript Library

<p align="center"><img src="https://raw.githubusercontent.com/co-cart/co-cart/master/.github/Logo-1024x534.png.webp" alt="CoCart" /></p>

> 🍴 Forked from WooCommerce JavaScript Library and modified to support CoCart REST API instead. Authentication is optional.

JavaScript library for CoCart, supports CommonJS (CJS) and Embedded System Module (ESM).

Requests are made with [Axios library](https://github.com/axios/axios) with [support to promises](https://github.com/axios/axios#promises).

[![build status](https://secure.travis-ci.org/cocart/cocart-js-lib.svg)](http://travis-ci.org/cocart/cocart-js-lib)
[![dependency status](https://david-dm.org/cocart/cocart-js-lib.svg)](https://david-dm.org/cocart/cocart-js-lib)
[![npm version](https://img.shields.io/npm/v/@cocart/cocart-rest-api.svg)](https://www.npmjs.com/package/@cocart/cocart-rest-api)

> ⚠️This is a **WORK IN PROGRESS** and not finished. It will **NOT** support the **LEGACY API**.

## Installation

```
npm install
```

Will be the following once the npm package is published.
```
npm install --save @cocart/cocart-rest-api
```

## Getting started

Check out the CoCart API endpoints and data that can be manipulated in <https://docs.cocart.xyz/>.

## Setup

### ESM example:

```js
import CoCart from "@cocart/cocart-rest-api";

const api = new CoCart({
  url: "https://example.com",
});
```

### CJS example:

```js
const CoCart = require("@cocart/cocart-rest-api").default;

const api = new CoCart({
  url: "https://example.com",
});
```

### Options

| Option            | Type      | Required | Description                                                                                                          |
|-------------------|-----------|----------|----------------------------------------------------------------------------------------------------------------------|
| `url`             | `String`  | yes      | Your Store URL, example: https://example.com/                                                                        |
| `consumerKey`     | `String`  | no       | Your API consumer key or username.                                                                                   |
| `consumerSecret`  | `String`  | no       | Your API consumer secret or password.                                                                                |
| `wpAPIPrefix`     | `String`  | no       | Custom WP REST API URL prefix, used to support custom prefixes created with the `rest_url_prefix` filter.            |
| `version`         | `String`  | no       | API version, default is `v1`                                                                                         |
| `encoding`        | `String`  | no       | Encoding, default is 'utf-8'                                                                                         |
| `queryStringAuth` | `Bool`    | no       | When `true` and using under HTTPS force Basic Authentication as query string, default is `false`                     |
| `port`            | `string`  | no       | Provide support for URLs with ports, eg: `8080`                                                                      |
| `timeout`         | `Integer` | no       | Define the request timeout                                                                                           |
| `axiosConfig`     | `Object`  | no       | Define the custom [Axios config](https://github.com/axios/axios#request-config), also override this library options. |

## Methods

### GET

- `.get(endpoint)`
- `.get(endpoint, params)`

| Params     | Type     | Description                                                   |
|------------|----------|---------------------------------------------------------------|
| `endpoint` | `String` | CoCart API endpoint, example: `get-cart` or `products/32`     |
| `params`   | `Object` | Query strings params, example: `{ per_page: 20 }`             |

### POST

- `.post(endpoint, data)`
- `.post(endpoint, data, params)`

| Params     | Type     | Description                                                 |
|------------|----------|-------------------------------------------------------------|
| `endpoint` | `String` | CoCart API endpoint, example: `customers` or `orders`       |
| `data`     | `Object` | JS object to be converted into JSON and sent in the request |
| `params`   | `Object` | Query strings params                                        |

### PUT

- `.put(endpoint, data)`
- `.put(endpoint, data, params)`

| Params     | Type     | Description                                                       |
|------------|----------|-------------------------------------------------------------------|
| `endpoint` | `String` | CoCart API endpoint, example: `customers/1` or `orders/1234`      |
| `data`     | `Object` | JS object to be converted into JSON and sent in the request       |
| `params`   | `Object` | Query strings params                                              |

### DELETE

- `.delete(endpoint)`
- `.delete(endpoint, params)`

| Params     | Type     | Description                                                     |
|------------|----------|-----------------------------------------------------------------|
| `endpoint` | `String` | CoCart API endpoint, example: `item` or `orders/12`             |
| `params`   | `Object` | Query strings params, example: `{ force: true }`                |

## Changelog

[See changelog for details](https://github.com/co-cart/cocart-js-lib/blob/master/CHANGELOG.md)

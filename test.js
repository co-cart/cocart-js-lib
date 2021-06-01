"use strict";

import CoCart from "./index";
import nock from "nock";

describe("#options", () => {
  test("wpAPIPrefix should set WP REST API custom path", () => {
    const api = new CoCart({
      url: "https://test.dev",
      wpAPIPrefix: "wp-rest",
      version: "cocart/v2"
    });

    const endpoint = "products";
    const expected = "https://test.dev/wp-rest/cocart/v2/" + endpoint;
    const url = api._getUrl(endpoint);

    expect(url).toBe(expected);
  });
});

describe("#methods", () => {
  const api = new CoCart({
    url: "https://test.dev",
    version: "cocart/v2"
  });

  test("_getUrl should return full endpoint URL", () => {
    const endpoint = "products";
    const expected = "https://test.dev/wp-json/cocart/v2/" + endpoint;
    const url = api._getUrl(endpoint);

    expect(url).toBe(expected);
  });

  test("_normalizeQueryString should return query string sorted by name", () => {
    const url =
      "https://test.dev/wp-json/cocart/v2/products?filter[q]=Woo+Album&fields=id&filter[limit]=1";
    const expected =
      "https://test.dev/wp-json/cocart/v2/products?fields=id&filter[limit]=1&filter[q]=Woo%20Album";
    const normalized = api._normalizeQueryString(url);

    expect(normalized).toBe(expected);
  });
});

describe("#requests", () => {
  beforeEach(() => {
    nock.cleanAll();
  });

  const api = new CoCart({
    url: "https://test.dev",
    consumerKey: "ck_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    consumerSecret: "cs_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
    version: "cocart/v2"
  });

  test("should return content for basic auth", () => {
    expect.assertions(1);

    nock("https://test.dev/wp-json/cocart/v2")
      .post("/cart/add-item", {})
      .reply(201, {
        ok: true
      });

    return api.post("cart/add-item", {}).then(response => {
      expect(response.status).toBe(201);
    });
  });

  test("should return content for get requests", () => {
    expect.assertions(1);

    nock("https://test.dev/wp-json/cocart/v2")
      .get("/cart")
      .reply(200, {
        ok: true
      });

    return api.get("cart", {}).then(response => {
      expect(response.status).toBe(200);
    });
  });

  test("should return content for put requests", () => {
    expect.assertions(1);

    nock("https://test.dev/wp-json/cocart/v2")
      .put("/orders")
      .reply(200, {
        ok: true
      });

    return api.put("orders", {}).then(response => {
      expect(response.status).toBe(200);
    });
  });

  test("should return content for delete requests", () => {
    expect.assertions(1);

    nock("https://test.dev/wp-json/cocart/v2")
      .delete("/cart/item/f28cd9f0560070670a861d86462b8f14")
      .reply(200, {
        ok: true
      });

    return api.delete("cart/item/f28cd9f0560070670a861d86462b8f14", {}).then(response => {
      expect(response.status).toBe(200);
    });
  });

  test("should return content for OAuth", () => {
    expect.assertions(1);

    const oAuth = new CoCart({
      url: "https://test.dev",
      consumerKey: "ck_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      consumerSecret: "cs_XXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXXX",
      version: "cocart/v2",
      oauth: true,
    });

    nock("https://test.dev/wp-json/cocart/v2")
      .filteringPath(/\?.*/, "?params")
      .get("/my-orders?params")
      .reply(200, {
        ok: true
      });

    return oAuth.get("my-orders", {}).then(response => {
      expect(response.status).toBe(200);
    });
  });
});

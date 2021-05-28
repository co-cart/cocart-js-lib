import * as OAuth from 'oauth-1.0a'

export declare type CoCartVersion =
  | 'cocart/v2'
  | 'cocart/v1'
export declare type CoCartEncoding = 'utf-8' | 'ascii'
export declare type CoCartMethod =
  | 'get'
  | 'post'
  | 'put'
  | 'delete'
  | 'options'

export interface CoCartOptions {
  /* Your Store URL, example: https://example.com/ */
  url: string
  /* Your API consumer key or username */
  consumerKey: string
  /* 	Your API consumer secret or password */
  consumerSecret: string
  /* Custom WP REST API URL prefix, used to support custom prefixes created with the `rest_url_prefix filter` */
  wpAPIPrefix?: string
  /* API version, default is `cocart/v2` */
  version?: CoCartVersion
  /* Encoding, default is 'utf-8' */
  encoding?: CoCartEncoding
  /* When `true` and using under HTTPS force Basic Authentication as query string, default is `false` */
  queryStringAuth?: boolean
  /* Provide support for URLs with ports, eg: `8080` */
  port?: number
  /* Authenticate with Oauth 1.0a */
  oauth?: boolean,
  /* Define the request timeout */
  timeout?: number
  /* Define the custom Axios config, also override this library options */
  axiosConfig?: any
}

export interface CoCartQuery {
  [key: string]: string
}

/**
 * CoCart REST API wrapper
 *
 * @param {Object} opt
 */
export default class CoCart {
  protected classVersion: string
  protected url: string
  protected consumerKey: string
  protected consumerSecret: string
  protected wpAPIPrefix: string
  protected version: CoCartVersion
  protected encoding: CoCartEncoding
  protected queryStringAuth: boolean
  protected port: number
  protected oauth: boolean
  protected timeout: number
  protected axiosConfig: any

  /**
   * Class constructor.
   *
   * @param {Object} opt
   */
  constructor(opt: CoCartOptions | CoCart)

  /**
   * Set default options
   *
   * @param {Object} opt
   */
  private _setDefaultsOptions(opt: CoCartOptions): void

  /**
   * Parse params object.
   *
   * @param {Object} params
   * @param {Object} query
   */
  private _parseParamsObject(params: any, query: any): CoCartQuery

  /**
   * Normalize query string for oAuth
   *
   * @param  {String} url
   * @param  {Object} params
   *
   * @return {String}
   */
  private _normalizeQueryString(url: string, params: any): string

  /**
   * Get URL
   *
   * @param  {String} endpoint
   * @param  {Object} params
   *
   * @return {String}
   */
  private _getUrl(endpoint: string, params: any): string

  /**
   * Get OAuth
   *
   * @return {Object}
   */
  private _getOAuth(): OAuth

  /**
   * Do requests
   *
   * @param  {String} method
   * @param  {String} endpoint
   * @param  {Object} data
   * @param  {Object} params
   *
   * @return {Object}
   */
  private _request(
    method: CoCartMethod,
    endpoint: string,
    data: any,
    params: any
  ): Promise<any>

  /**
   * GET requests
   *
   * @param  {String} endpoint
   * @param  {Object} params
   *
   * @return {Object}
   */
  public get(endpoint: string): Promise<any>
  public get(endpoint: string, params: any): Promise<any>

  /**
   * POST requests
   *
   * @param  {String} endpoint
   * @param  {Object} data
   * @param  {Object} params
   *
   * @return {Object}
   */
  public post(endpoint: string, data: any): Promise<any>
  public post(endpoint: string, data: any, params: any): Promise<any>

  /**
   * PUT requests
   *
   * @param  {String} endpoint
   * @param  {Object} data
   * @param  {Object} params
   *
   * @return {Object}
   */
  public put(endpoint: string, data: any): Promise<any>
  public put(endpoint: string, data: any, params: any): Promise<any>

  /**
   * DELETE requests
   *
   * @param  {String} endpoint
   * @param  {Object} params
   * @param  {Object} params
   *
   * @return {Object}
   */
  public delete(endpoint: string): Promise<any>
  public delete(endpoint: string, params: any): Promise<any>

  /**
   * OPTIONS requests
   *
   * @param  {String} endpoint
   * @param  {Object} params
   *
   * @return {Object}
   */
  public options(endpoint: string): Promise<any>
  public options(endpoint: string, params: any): Promise<any>
}

/**
 * Options Exception.
 */
export class OptionsException {
  public name: 'Options Error'
  public message: string

  /**
   * Constructor.
   *
   * @param {String} message
   */
  constructor(message: string)
}

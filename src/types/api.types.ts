export interface QueryParams {
  [key: string]: string | number | boolean;
}

export interface Options {
  method: string;
  headers?: Headers;
  body?: string;
}

export interface FetchArguments {
  url: string;
  params?: QueryParams;
  options?: Options;
}
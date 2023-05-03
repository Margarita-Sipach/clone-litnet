export enum PageConfig {
  LIMIT = 10,
}

export const getOffset = (page: number, limit: number) => page * limit;
export const getPageCount = (count: number, limit: number) =>
  Math.ceil(count / limit);

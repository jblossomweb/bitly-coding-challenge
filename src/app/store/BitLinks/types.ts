import Immutable from 'immutable';

export interface Link {
  shortUrl: string,
  longUrl: string,
  title?: string,
  clicks?: number,
};

export interface Links {
  [shortUrl: string]: Link,
};

export type LinkUrls = Link['shortUrl'][];

export type ImmutableLinks = Immutable.Map<string, Link>;

export interface FormattedError {
  code?: number,
  message: string,
};

export type ImmutableFormattedError = Immutable.Map<string, number | string>;

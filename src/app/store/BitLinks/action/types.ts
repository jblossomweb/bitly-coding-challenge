import { ResponseInterface } from 'app/services/bitly.service';

export const REQUEST_BITLINK_SHORTEN = 'REQUEST_BITLINK_SHORTEN';
export const REQUEST_BITLINK_SHORTEN_SUCCESS = 'REQUEST_BITLINK_SHORTEN_SUCCESS';
export const REQUEST_BITLINK_SHORTEN_ERROR = 'REQUEST_BITLINK_SHORTEN_ERROR';
export const REQUEST_BITLINK_INFO = 'REQUEST_BITLINK_INFO';
export const REQUEST_BITLINK_INFO_SUCCESS = 'REQUEST_BITLINK_INFO_SUCCESS';
export const REQUEST_BITLINK_INFO_ERROR = 'REQUEST_BITLINK_INFO_ERROR';
export const DESTROY_BITLINK_ERROR = 'DESTROY_BITLINK_ERROR';
export const REQUEST_BITLINKS_CLICKS = 'REQUEST_BITLINKS_CLICKS';
export const REQUEST_BITLINKS_CLICKS_SUCCESS = 'REQUEST_BITLINKS_CLICKS_SUCCESS';
export const REQUEST_BITLINKS_CLICKS_ERROR = 'REQUEST_BITLINKS_CLICKS_ERROR';
export const DESTROY_BITLINKS_CLICKS_ERROR = 'DESTROY_BITLINKS_CLICKS_ERROR';

export interface Interface {
  [REQUEST_BITLINK_SHORTEN]: {
    type: 'REQUEST_BITLINK_SHORTEN',
    payload: {
      longUrl: string,
    },
  },
  [REQUEST_BITLINK_SHORTEN_SUCCESS]: {
    type: 'REQUEST_BITLINK_SHORTEN_SUCCESS',
    payload: {
      response: ResponseInterface['shorten'],
    },
  },
  [REQUEST_BITLINK_SHORTEN_ERROR]: {
    type: 'REQUEST_BITLINK_SHORTEN_ERROR',
    payload: {
      error: ResponseInterface['error'],
    },
  },
  [REQUEST_BITLINK_INFO]: {
    type: 'REQUEST_BITLINK_INFO',
    payload: {
      shortUrl: string,
    },
  },
  [REQUEST_BITLINK_INFO_SUCCESS]: {
    type: 'REQUEST_BITLINK_INFO_SUCCESS',
    payload: {
      response: ResponseInterface['info'],
    },
  },
  [REQUEST_BITLINK_INFO_ERROR]: {
    type: 'REQUEST_BITLINK_INFO_ERROR',
    payload: {
      error: ResponseInterface['error'],
    },
  },
  [DESTROY_BITLINK_ERROR]: {
    type: 'DESTROY_BITLINK_ERROR',
  },
  [REQUEST_BITLINKS_CLICKS]: {
    type: 'REQUEST_BITLINKS_CLICKS',
    payload: {
      shortUrls: string[],
    },
  },
  [REQUEST_BITLINKS_CLICKS_SUCCESS]: {
    type: 'REQUEST_BITLINKS_CLICKS_SUCCESS',
    payload: {
      response: ResponseInterface['clicks'],
    },
  },
  [REQUEST_BITLINKS_CLICKS_ERROR]: {
    type: 'REQUEST_BITLINKS_CLICKS_ERROR',
    payload: {
      error: ResponseInterface['error'],
    },
  },
  [DESTROY_BITLINKS_CLICKS_ERROR]: {
    type: 'DESTROY_BITLINKS_CLICKS_ERROR',
  },
};

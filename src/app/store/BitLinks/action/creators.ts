import { Dispatch, AnyAction } from 'redux';
import { ServiceInterface, ResponseInterface } from 'app/services/bitly.service';
import { requestShortenThunk, requestInfoThunk, requestClicksThunk } from 'app/store/BitLinks/action/thunks';
import * as types from './types';

/*
 * REQUEST_BITLINK_SHORTEN
 */
export const requestShorten: (
  longUrl: string,
  service: ServiceInterface,
) => (
  dispatch: Dispatch<AnyAction>,
) => types.Interface['REQUEST_BITLINK_SHORTEN'] = (
  longUrl,
  service,
) => (
  dispatch,
) => {
  requestShortenThunk(longUrl, service)(dispatch);
  return {
    type: types.REQUEST_BITLINK_SHORTEN,
    payload: {
      longUrl,
    },
  };
};

/*
 * REQUEST_BITLINK_SHORTEN_SUCCESS
 */
export const requestShortenSuccess: (
  response: ResponseInterface['shorten'],
) => types.Interface['REQUEST_BITLINK_SHORTEN_SUCCESS'] = response => ({
  type: types.REQUEST_BITLINK_SHORTEN_SUCCESS,
  payload: {
    response,
  },
});

/*
 * REQUEST_BITLINK_SHORTEN_ERROR
 */
export const requestShortenError: (
  error: ResponseInterface['error'],
) => types.Interface['REQUEST_BITLINK_SHORTEN_ERROR'] = error => ({
  type: types.REQUEST_BITLINK_SHORTEN_ERROR,
  payload: {
    error,
  },
});

/*
 * REQUEST_BITLINK_INFO
 */
export const requestInfo: (
  shortUrl: string,
  service: ServiceInterface,
) => (
  dispatch: Dispatch<AnyAction>,
) => types.Interface['REQUEST_BITLINK_INFO'] = (
  shortUrl,
  service,
) => (
  dispatch,
) => {
  requestInfoThunk(shortUrl, service)(dispatch);
  return {
    type: types.REQUEST_BITLINK_INFO,
    payload: {
      shortUrl,
    },
  };
};

/*
 * REQUEST_BITLINK_INFO_SUCCESS
 */
export const requestInfoSuccess: (
  response: ResponseInterface['info'],
) => types.Interface['REQUEST_BITLINK_INFO_SUCCESS'] = response => ({
  type: types.REQUEST_BITLINK_INFO_SUCCESS,
  payload: {
    response,
  },
});

/*
 * REQUEST_BITLINK_INFO_ERROR
 */
export const requestInfoError: (
  error: ResponseInterface['error'],
) => types.Interface['REQUEST_BITLINK_INFO_ERROR'] = error => ({
  type: types.REQUEST_BITLINK_INFO_ERROR,
  payload: {
    error,
  },
});

/*
 * DESTROY_BITLINK_ERROR
 */
export const destroyBitlinkError: () => types.Interface['DESTROY_BITLINK_ERROR'] = () => ({
  type: types.DESTROY_BITLINK_ERROR,
});

/*
 * REQUEST_BITLINKS_CLICKS
 */
export const requestClicks: (
  shortUrls: string[],
  service: ServiceInterface,
) => (
  dispatch: Dispatch<AnyAction>,
) => types.Interface['REQUEST_BITLINKS_CLICKS'] = (
  shortUrls,
  service,
) => (
  dispatch,
) => {
  requestClicksThunk(shortUrls, service)(dispatch);
  return {
    type: types.REQUEST_BITLINKS_CLICKS,
    payload: {
      shortUrls,
    },
  };
};

/*
 * REQUEST_BITLINKS_CLICKS_SUCCESS
 */
export const requestClicksSuccess: (
  response: ResponseInterface['clicks'],
) => types.Interface['REQUEST_BITLINKS_CLICKS_SUCCESS'] = response => ({
  type: types.REQUEST_BITLINKS_CLICKS_SUCCESS,
  payload: {
    response,
  },
});

/*
 * REQUEST_BITLINKS_CLICKS_ERROR
 */
export const requestClicksError: (
  error: ResponseInterface['error'],
) => types.Interface['REQUEST_BITLINKS_CLICKS_ERROR'] = error => ({
  type: types.REQUEST_BITLINKS_CLICKS_ERROR,
  payload: {
    error,
  },
});

/*
 * DESTROY_BITLINKS_CLICKS_ERROR
 */
export const destroyBitlinksClicksError: () => types.Interface['DESTROY_BITLINKS_CLICKS_ERROR'] = () => ({
  type: types.DESTROY_BITLINKS_CLICKS_ERROR,
});

import { fromJS } from 'immutable';
import { AppState } from 'core/store';
import paths from '../paths';
import { formatError } from '../utils';
import * as types from './types';

/*
 * REQUEST_BITLINK_SHORTEN
 */
export const requestShortenReducer = (
  state: AppState,
  _action: types.Interface['REQUEST_BITLINK_SHORTEN'],
) => state
  .setIn(paths.fetching(), true);

/*
 * REQUEST_BITLINK_SHORTEN_SUCCESS
 */
export const requestShortenSuccessReducer = (
  state: AppState,
  action: types.Interface['REQUEST_BITLINK_SHORTEN_SUCCESS'],
) => {
  const { response } = action.payload;
  const shortUrl = response['url'];
  const longUrl = response['long_url'];

  return state
    .setIn(paths.fetching(), false)
    .setIn(paths.error(), null)
    .setIn(paths.link(shortUrl), fromJS({
      shortUrl,
      longUrl,
    }));
};

/*
 * REQUEST_BITLINK_SHORTEN_ERROR
 */
export const requestShortenErrorReducer = (
  state: AppState,
  action: types.Interface['REQUEST_BITLINK_SHORTEN_ERROR'],
) => {
  const { error } = action.payload;
  const formattedError = formatError(error);

  return state
    .setIn(paths.fetching(), false)
    .setIn(paths.error(), fromJS(formattedError));
};

/*
 * REQUEST_BITLINK_INFO
 */
export const requestInfoReducer = (
  state: AppState,
  _action: types.Interface['REQUEST_BITLINK_INFO'],
) => state
  .setIn(paths.fetching(), true);

/*
 * REQUEST_BITLINK_INFO_SUCCESS
 */
export const requestInfoSuccessReducer = (
  state: AppState,
  action: types.Interface['REQUEST_BITLINK_INFO_SUCCESS'],
) => {
  const { response } = action.payload;
  const shortUrl = response['short_url'];
  const title = response['title'];

  return state
    .setIn(paths.fetching(), false)
    .setIn(paths.error(), null)
    .setIn(paths.linkTitle(shortUrl), title);
};

/*
 * REQUEST_BITLINK_INFO_ERROR
 */
export const requestInfoErrorReducer = (
  state: AppState,
  action: types.Interface['REQUEST_BITLINK_INFO_ERROR'],
) => {
  const { error } = action.payload;
  const formattedError = formatError(error);

  return state
    .setIn(paths.fetching(), false)
    .setIn(paths.error(), fromJS(formattedError));
};

/*
 * DESTROY_BITLINK_ERROR
 */
export const destroyBitlinkErrorReducer = (
  state: AppState,
  _action: types.Interface['DESTROY_BITLINK_ERROR'],
) => state
    .setIn(paths.error(), null);

/*
 * REQUEST_BITLINKS_CLICKS
 */
export const requestClicksReducer = (
  state: AppState,
  _action: types.Interface['REQUEST_BITLINKS_CLICKS'],
) => state
  .setIn(paths.fetchingClicks(), true);

/*
 * REQUEST_BITLINKS_CLICKS_SUCCESS
 */
export const requestClicksSuccessReducer = (
  state: AppState,
  action: types.Interface['REQUEST_BITLINKS_CLICKS_SUCCESS'],
) => {
  const { response } = action.payload;

  let newState = state;

  response.forEach(link => {
    newState = newState
      .setIn(paths.linkClicks(link['short_url']), link['global_clicks']);
  });

  return newState
    .setIn(paths.fetchingClicks(), false)
    .setIn(paths.clicksError(), null);
};

/*
 * REQUEST_BITLINKS_CLICKS_ERROR
 */
export const requestClicksErrorReducer = (
  state: AppState,
  action: types.Interface['REQUEST_BITLINKS_CLICKS_ERROR'],
) => {
  const { error } = action.payload;
  const formattedError = formatError(error);

  return state
    .setIn(paths.fetchingClicks(), false)
    .setIn(paths.clicksError(), fromJS(formattedError));
};

/*
 * DESTROY_BITLINKS_CLICKS_ERROR
 */
export const destroyBitlinksClicksErrorReducer = (
  state: AppState,
  _action: types.Interface['DESTROY_BITLINKS_CLICKS_ERROR'],
) => state
    .setIn(paths.clicksError(), null);

/*
 * default export
 */
export default {
  [types.REQUEST_BITLINK_SHORTEN as string]: requestShortenReducer,
  [types.REQUEST_BITLINK_SHORTEN_SUCCESS as string]: requestShortenSuccessReducer,
  [types.REQUEST_BITLINK_SHORTEN_ERROR as string]: requestShortenErrorReducer,
  [types.REQUEST_BITLINK_INFO as string]: requestInfoReducer,
  [types.REQUEST_BITLINK_INFO_SUCCESS as string]: requestInfoSuccessReducer,
  [types.REQUEST_BITLINK_INFO_ERROR as string]: requestInfoErrorReducer,
  [types.DESTROY_BITLINK_ERROR as string]: destroyBitlinkErrorReducer,
  [types.REQUEST_BITLINKS_CLICKS as string]: requestClicksReducer,
  [types.REQUEST_BITLINKS_CLICKS_SUCCESS as string]: requestClicksSuccessReducer,
  [types.REQUEST_BITLINKS_CLICKS_ERROR as string]: requestClicksErrorReducer,
  [types.DESTROY_BITLINKS_CLICKS_ERROR as string]: destroyBitlinksClicksErrorReducer,
};

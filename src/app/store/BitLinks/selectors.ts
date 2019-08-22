import Immutable from 'immutable';
import { createSelector } from 'reselect';
import { AppState } from 'core/store';
import { ImmutableLinks } from 'app/store/BitLinks/types';
import paths from './paths';

/*
 * getFetching
 */

const getFetchingSelector = (
  state: AppState,
): boolean => state.get('app').getIn(
  paths.fetching(),
  false,
);

export const getFetching = createSelector([
  getFetchingSelector,
], (fetching: boolean) => fetching);

/*
 * getLinks
 */

const getLinksSelector = (
  state: AppState,
): ImmutableLinks => state.get('app').getIn(
  paths.links(),
  Immutable.Map(),
);

export const getLinks = createSelector([
  getLinksSelector,
], links => links);

/*
 * getLinkShortUrls
 */

export const getLinkShortUrls = createSelector([
  getLinks,
], links => links.keySeq());

/*
 * getError
 */

const getErrorSelector = (
  state: AppState,
): Error | undefined => state.get('app').getIn(
  paths.error(),
  undefined,
);

export const getError = createSelector([
  getErrorSelector,
], error => error);

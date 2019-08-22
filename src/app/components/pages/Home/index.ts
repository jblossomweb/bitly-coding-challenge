import { Dispatch, AnyAction } from 'redux';
import { connect } from 'react-redux';
import asyncPoll from 'react-async-poll';
import withImmutablePropsToJS from 'with-immutable-props-to-js';
import { AppState } from 'core/store';

import config from 'app/config';
import BitlyService, { ServiceInterface } from 'app/services/bitly.service';
import { requestShorten, requestClicks, destroyBitlinkError } from 'app/store/BitLinks/action/creators';
import { getFetching, getLinks, getLinkShortUrls, getError } from 'app/store/BitLinks/selectors';
import HomePage, { Props } from './HomePage';

const bitlyService = new BitlyService(config.bitlySDK, config.accessToken);

export const mapStateToProps = (
  state: AppState,
) => ({
  fetching: getFetching(state),
  links: getLinks(state),
  linkUrls: getLinkShortUrls(state),
  error: getError(state),
});

export const mapDispatchToProps = (
  bitlyService: ServiceInterface,
) => (
  dispatch: Dispatch<AnyAction>,
) => ({
  shorten: (longUrl: string) => dispatch(
    requestShorten(longUrl, bitlyService)(dispatch)
  ),
  clicks: (shortUrls: string[]) => dispatch(
    requestClicks(shortUrls, bitlyService)(dispatch)
  ),
  hideError: () => dispatch(
    destroyBitlinkError()
  ),
});

export const onPollInterval = (
  { linkUrls, clicks }: Props,
  _dispatch: Dispatch<AnyAction>,
) => {
  linkUrls.length && clicks(linkUrls);
};

export const pollInterval: number = 5 * 1000;

export default connect(
  mapStateToProps,
  mapDispatchToProps(bitlyService),
)(withImmutablePropsToJS(
  asyncPoll(pollInterval, onPollInterval)(HomePage),
) as any); // any: with-immutable-props-to-js has a bug.

import { Dispatch, AnyAction } from 'redux';
import { ServiceInterface, ResponseInterface } from 'app/services/bitly.service';

import {
  requestShortenSuccess,
  requestShortenError,
  requestInfo,
  requestInfoSuccess,
  requestInfoError,
  requestClicks,
  requestClicksSuccess,
  requestClicksError,
} from './creators';

export const requestShortenThunk = (
  longUrl: string,
  service: ServiceInterface,
) => (dispatch: Dispatch<AnyAction>) => {
  service.shorten(longUrl).then(
    (response: ResponseInterface['shorten']) => {
      dispatch(requestShortenSuccess(response));
      dispatch(requestInfo(response['url'], service)(dispatch));
      dispatch(requestClicks([response['url']], service)(dispatch));
    },
    (error: ResponseInterface['error']) => dispatch(requestShortenError(error)),
  )
};

export const requestInfoThunk = (
  shortUrl: string,
  service: ServiceInterface,
) => (dispatch: Dispatch<AnyAction>) => {
  service.info(shortUrl).then(
    (response: ResponseInterface['info']) => dispatch(requestInfoSuccess(response)),
    (error: ResponseInterface['error']) => dispatch(requestInfoError(error)),
  )
};

export const requestClicksThunk = (
  shortUrls: string[],
  service: ServiceInterface,
) => (dispatch: Dispatch<AnyAction>) => {
  service.clicks(shortUrls).then(
    (response: ResponseInterface['clicks']) => dispatch(requestClicksSuccess(response)),
    (error: ResponseInterface['error']) => dispatch(requestClicksError(error)),
  )
};

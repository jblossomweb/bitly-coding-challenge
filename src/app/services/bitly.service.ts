import window from 'window-or-global';
import config from 'app/config';

export interface ResponseInterface {
  shorten: { long_url: string, url: string },
  expand: { long_url: string, short_url: string },
  info: { short_url: string, title: string },
  clicks: { short_url: string, global_clicks: number }[],
  error: Error,
};

export interface ServiceInterface {
  shorten: (longUrl: string) => Promise<ResponseInterface['shorten']>,
  expand: (shortUrl: string) => Promise<ResponseInterface['expand']>,
  info: (shortUrl: string) => Promise<ResponseInterface['info']>,
  clicks: (shortUrls: string[]) => Promise<ResponseInterface['clicks']>,
};

export interface Arguments {
  sdk: typeof window.BitlySDK | ServiceInterface,
  accessToken: string,
};

export default class BitlyService implements ServiceInterface {
  sdk: typeof window.BitlySDK | ServiceInterface;
  constructor(
    sdk: Arguments['sdk'] = config.bitlySDK,
    accessToken: Arguments['accessToken'] = config.accessToken as string,
  ) {
    this.sdk = new sdk({ accessToken });
  }

  shorten(longUrl: string) {
    try {
      return this.sdk.shorten(longUrl);
    } catch (error) {
      window.console.error(error);
      return Promise.reject(error);
    }
  }

  expand(shortUrl: string) {
    try {
      return this.sdk.expand(shortUrl);
    } catch (error) {
      window.console.error(error);
      return Promise.reject(error);
    }
  }

  info(shortUrl: string) {
    try {
      return this.sdk.info(shortUrl);
    } catch (error) {
      window.console.error(error);
      return Promise.reject(error);
    }
  }

  clicks(shortUrls: string[]) {
    try {
      return this.sdk.clicks(shortUrls);
    } catch (error) {
      window.console.error(error);
      return Promise.reject(error);
    }
  }
}

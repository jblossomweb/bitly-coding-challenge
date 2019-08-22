import window from 'window-or-global';
import coreConfig from 'core/config';

export default {
  ...coreConfig,
  title: process.env.REACT_APP_TITLE,
  description: process.env.REACT_APP_DESCRIPTION,
  accessToken: process.env.REACT_APP_ACCESS_TOKEN,
  bitlySDK: window.BitlySDK, // known to be in global scope.
};

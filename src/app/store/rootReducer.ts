import extend from 'lodash/extend';
import { AppReducers, combineAllReducers } from 'core/store';

// import your reducers here.
import bitLinksReducers from './BitLinks/action/reducers';

const appReducers: AppReducers = extend({},
  // register your reducers here.
  bitLinksReducers,
) as AppReducers;

export default combineAllReducers(appReducers);

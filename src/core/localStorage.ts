import Immutable from 'immutable';
import { AppState } from 'core/store';

export const loadState = () => {
  try {
    const serializedState = localStorage.getItem('state');
    if (serializedState === null) {
      return undefined;
    }
    return Immutable.fromJS(JSON.parse(serializedState));
  } catch (err) {
    return undefined;
  }
};

export const saveState = (state: AppState) => {
  try {
    const serializedState = JSON.stringify(state.toJS()); // slow!
    localStorage.setItem('state', serializedState);
  } catch {
    // ignore write errors
  }
};

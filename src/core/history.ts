import createBrowserHistory from 'history/createBrowserHistory';
import { History } from 'history';

let history: History | null = null;

const getHistory: () => History = () => history ? history : createBrowserHistory();

export default getHistory;

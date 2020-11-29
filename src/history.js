import { createBrowserHistory } from 'history';

const history = createBrowserHistory();

// DEV ONLY!!!
window.routerHistory = history;

export default history;

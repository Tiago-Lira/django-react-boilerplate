import thunk from 'redux-thunk';
import { compose, createStore, applyMiddleware } from 'redux';
import { routerMiddleware as createRouterMiddleware } from 'react-router-redux';
import createHistory from 'history/createBrowserHistory';

import reducer from './reducer';


const history = createHistory();
const routerMiddleware = createRouterMiddleware(history);
const store = createStore(
    reducer,
    compose(
        applyMiddleware(routerMiddleware),
        applyMiddleware(thunk),
        window.devToolsExtension ? window.devToolsExtension() : f => f,
    ),
);


export default {
    history,
    store,
};

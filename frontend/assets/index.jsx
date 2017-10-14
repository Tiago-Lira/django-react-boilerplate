import 'babel-polyfill';
import React from 'react';
import ReactDom from 'react-dom';
import { AppContainer } from 'react-hot-loader';
import { Provider } from 'react-redux';
import { ConnectedRouter } from 'react-router-redux';

import App from './components/App';
import config from './config';


const target = document.getElementById('app');

const reportError = ({ error }) => {
    throw error;
};

ReactDom.render(
    <AppContainer errorReporter={ reportError }>
        <Provider store={ config.store }>
            <ConnectedRouter history={ config.history }>
                <App />
            </ConnectedRouter>
        </Provider>
    </AppContainer>,
    target,
);


if (module.hot) {
    module.hot.accept();
}

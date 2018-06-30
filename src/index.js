import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import registerServiceWorker from './registerServiceWorker';
import { createStore, compose } from 'redux'
import reducer from './reducers'
import { Provider } from 'react-redux'

const composeEnhancer = window.__REDUX_DEVTOOLS_EXTENSION_COMPOSE__ || compose;

const store = createStore(
    reducer,
    composeEnhancer()
);


ReactDOM.render(
    <Provider store={store} >
        <App/>
    </Provider>,
    document.getElementById('root')
);
registerServiceWorker();

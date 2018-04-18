import React from 'react';
import ReactDOM from 'react-dom';
import App from './App';
import registerServiceWorker from './registerServiceWorker';

//react-redux
import store from './Helpers/Store.js'
import { Provider } from 'react-redux'


ReactDOM.render(<Provider store={store}>
                    <App />
                </Provider>,
    document.getElementById('root'));
registerServiceWorker();

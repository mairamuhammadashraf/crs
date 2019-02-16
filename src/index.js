import React from 'react';
import ReactDOM from 'react-dom';
// import App from './app';
import Root from './navigation'
import * as serviceWorker from './serviceWorker';
import store from './app/store';


ReactDOM.render(<Root />, document.getElementById('root'));

// If you want your app to work offline and load faster, you can change
// unregister() to register() below. Note this comes with some pitfalls.
// Learn more about service workers: http://bit.ly/CRA-PWA
serviceWorker.unregister();


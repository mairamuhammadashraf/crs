import React ,{Component} from 'react';
import {Switch,Router , Route, Link }  from 'react-router';
import {ConnectedRouter} from 'connected-react-router';
import {Provider} from 'react-redux';
import store from '../app/store'
import {Login} from '../app/auth'
import {createBrowserHistory} from 'history'
const history  = createBrowserHistory();
const a = () =>(<div>comp a</div>)
const b = () =>(<div>comp b</div>)
const Routing = () => (
    <Provider store={store}>
        <Router history={history}>
    {/* <ConnectedRouter history={history}> */}
        <div>
        <Switch>
        <Route exact component={Login} path="/"/>
        <Route component={b} path="/b"/>
        </Switch>
        </div>
    {/* </ConnectedRouter> */}
        </Router>
    </Provider>
)
export default Routing
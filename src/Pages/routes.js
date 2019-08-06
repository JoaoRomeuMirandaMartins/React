import React from 'react';
import {Switch, Route} from 'react-router-dom';
import Home from './Home';
import Login from './login';
import QZQ from './404';
//import {Provider} from 'redux';
const routes = () => {
    return(
        <Switch>
            <Route path="/login" component={Login} />
            <Route path="/" component={Home} exact />
            <Route path="*" component={QZQ} />
        </Switch>
    )
};
export default routes;
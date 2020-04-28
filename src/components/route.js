import React from 'react';
import { Switch, Route } from 'react-router-dom';
import Home from './home';
import Add from './add';
import Edit from './edit';
function Routes() {
    return (
        <Switch>
            <Route path="/" exact><Home /></Route>
            <Route path="/add"><Add /></Route>
            <Route path="/edit/:index"><Edit /></Route>

        </Switch>
    );
}

export default Routes;

import React from "react";
import ReactDOM from "react-dom";
import { Router, Route, browserHistory, IndexRoute } from "react-router";
import { createHistory } from "history";

import Layout from './components/Layout';
import Main from './pages/Main';

const history = createHistory();
const app = document.getElementById('app');

ReactDOM.render(
    <Router history={browserHistory}>
        <Route path="/" component={Layout}>
            <IndexRoute component={Main}/>
            {/* <Route path="checkin" component={CheckIn}/>
            <Route path="checkout" component={CheckOut}/>
            <Route path="viewshifts" component={ViewShifts}/> */}
        </Route>
    </Router>
    ,
app);

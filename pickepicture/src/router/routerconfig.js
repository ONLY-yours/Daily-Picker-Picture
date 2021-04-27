import {BrowserRouter as Router, Route, Switch,
} from "react-router-dom";

import React from 'react';
import Main from "../pages/main";
import App from "../App";

class RouterCom extends React.Component{
    render() {
        return (
            <Switch>
                <Route exact path="/" component={Main}>
                </Route>
                <Route path="/test" component={App}>
                </Route>
            </Switch>
        );
    }
}

export default RouterCom


import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../views/home'
import NotMatch from '../views/notMatch'
import Admin from '../views/admin';
import SecondPage from '../views/secondPage'

class Router extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path='/admin' render={() =>
                            <Admin>
                                <Switch>
                                    <Route path="/admin/home" component={Home}></Route>
                                    <Route path="/admin/secondPage" component={SecondPage}></Route>
                                    <Route component={NotMatch}></Route>
                                </Switch>
                            </Admin>
                        }>
                        </Route>
                        <Route component={NotMatch}></Route>
                    </Switch>
                </div>
            </BrowserRouter>
        );
    }
}


export default Router;
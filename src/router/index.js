import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from 'react-router-dom';
import Home from '../views/home'
import NotMatch from '../views/notMatch'
import Admin from '../views/admin';
import SecondPage from '../views/secondPage'
import  OrderDemo  from '../views/order_demo';
import  Detail  from '../views/order_demo/detail';
import PieDemo from '../views/echarts/pie'
import Bar from '../views/echarts/bar'

class Router extends Component {
    constructor(props) {
        super(props)
    }
    render() {
        return (
            <BrowserRouter>
                <div>
                    <Switch>
                        <Route path='/common/order_demo/detail/:detailid' component={Detail}></Route>
                        <Route path='/admin' render={() =>
                            <Admin>
                                <Switch>
                                    <Route path="/admin/home" component={Home}></Route>
                                    <Route path="/admin/secondPage" component={SecondPage}></Route>
                                    <Route path="/admin/order_demo" component={OrderDemo}></Route>
                                    <Route path="/admin/echarts/pie" component={PieDemo}></Route>
                                    <Route path="/admin/echarts/bar" component={Bar}></Route>
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
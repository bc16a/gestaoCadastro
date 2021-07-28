import React from 'react';
import { Switch, Route, BrowserRouter } from 'react-router-dom';
import Home from './components/Home/Home';
import Product from './components/Product/Product';
import Client from './components/Client/Client';

export default function Routes() {
    return (
        <BrowserRouter>
            <Switch>
                <Route path='/' exact component={Home}/>
                <Route path='/product' component={Product} />
                <Route path='/client' component={Client} />
            </Switch>
        </BrowserRouter> 
    )
}
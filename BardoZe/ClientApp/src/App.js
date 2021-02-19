import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchData } from './components/FetchData';
import { Counter } from './components/Counter';
import { FetchContas } from './components/FetchConta';
import { AddConta } from './components/AddConta';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/counter' component={Counter} />
                <Route path='/fetch-data' component={FetchData} />
                <Route path='/fetch-Contas' component={FetchContas} />
                <Route path='/AddConta' component={AddConta} />
                <Route path='/conta/edit/:id' component={AddConta} />

            </Layout>
        );
    }
}

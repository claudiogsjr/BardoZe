import React, { Component } from 'react';
import { Route } from 'react-router';
import { Layout } from './components/Layout';
import { Home } from './components/Home';
import { FetchContas } from './components/FetchConta';
import { AddConta } from './components/AddConta';

import './custom.css'

export default class App extends Component {
    static displayName = App.name;

    render() {
        return (
            <Layout>
                <Route exact path='/' component={Home} />
                <Route path='/fetch-Contas' component={FetchContas} />
                <Route path='/AddConta' component={AddConta} />
                <Route path='/conta/edit/:id' component={AddConta} />

            </Layout>
        );
    }
}

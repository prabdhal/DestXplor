import React, { Component } from 'react';
import { Route } from 'react-router';

import { Layout } from './components/Layout';
import Home from './components/Home/Home';
import About from './components/About/About';
import Destinations from './components/Destinations/Destinations';
import Contact from './components/Contact/Contact';
import AdminInbox from './components/Contact/AdminInbox';
import AuthorizeRoute from './api/AuthorizeRoute';
import ApiAuthorizationRoutes from './api/ApiAuthorizationRoutes';
import { ApplicationPaths } from './api/ApiAuthorizationConstants';

import './App.css'

export default class App extends Component {
  static displayName = App.name;

  render () {
    return (
      <Layout>
        <Route exact path='/' component={Home} />
        <Route path='/about' component={About} />
        <Route path='/destinations' component={Destinations} />
        <Route path='/contact' component={Contact} />
        <AuthorizeRoute path='/admin-inbox' component={AdminInbox} />
        <Route path={ApplicationPaths.ApiAuthorizationPrefix} component={ApiAuthorizationRoutes} />
      </Layout>
    );
  }
}

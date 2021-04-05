import React, { Component } from 'react';
import { Route } from 'react-router';

import { Layout } from './components/Layout';
import Home from './components/Home';
import About from './components/About';
import Destinations from './components/Destinations';
import Contact from './components/Contact';

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
      </Layout>
    );
  }
}

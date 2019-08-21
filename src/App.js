import React, { Component, Fragment } from 'react';
import Home from './Home'
import './Nav.css';
import Nav from './Nav'
import AboutUs from './AboutUs'
import Welcome from './Welcome'


import {
  BrowserRouter as Router,
  Route,
  Link,
  Switch
} from 'react-router-dom';






export default function App() {
    return (
   
      <Router>
      
      
  <Nav />
     
  
        <div>
            <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/Welcome" component={Welcome} />
          <Route path="/AboutUs" component={AboutUs} />
     
          <Route component={Welcome} />
          </Switch>
        </div>
      </Router>
   
    );
  }
  


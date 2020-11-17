import React, { Component } from 'react';
import './App.css';
import { BrowserRouter as Router, Switch, Route } from 'react-router-dom';
import ContactUs from "./Pages/ContactUs";
import Reports from "./Pages/Reports";
import Kyc from "./Pages/Home";

import  Sidebar  from './SideBar.js';


class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Sidebar />
          <Switch>
            <Route path='/kyc' component={Kyc} />
            <Route path='/reports'   component={Reports} />
            <Route path='/contactUs'  component={ContactUs} />
          </Switch>
        </Router>  
      </div>
    );
  }
}

export default App;

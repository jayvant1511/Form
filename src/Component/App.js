import React, { Component } from 'react';
import css from './App.css';
import LogIn from './SignIn';
import Home from './Home';
import DashBoard from './DashBorad';
import LogOut from './LogOut';
import { BrowserRouter, NavLink, Route, Switch } from 'react-router-dom';

class App extends Component {

  render() {
    
    return (
      <div className="App">
        <BrowserRouter>
          <div className="header">
            <NavLink className="headerCompenent" activeClassName="active" to="/logIn">LogIn</NavLink>
            <NavLink className="headerCompenent" activeClassName="active" to="/">Home</NavLink>
            <NavLink className="headerCompenent" activeClassName="active" to="/dashBoard">DashBoard</NavLink>
            <NavLink className="logoutHeader" activeClassName="active" to="/logout">logout</NavLink>
          </div>
          <div className="content">
            <Switch>
              <Route exact path="/" component={Home}></Route>
              <Route path="/logIn" component={LogIn}></Route>
              <Route path="/dashBoard" component={DashBoard}></Route>
              <Route path="/logout" component={LogOut}></Route>
            </Switch>
          </div>
        </BrowserRouter>
      </div>
      // <>
      // <SignIn></SignIn>
      // <Home></Home>
      // </>
    );
  }
}

export default App;

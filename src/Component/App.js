import React, { Component } from 'react';
import './App.css';
import Home from './pages/Home.js';
import Users from './pages/UsersDetails.js';
import img from './logo512.png';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link,
  useHistory
} from "react-router-dom";
class App extends Component {
  handleClick = () => {
    const history = useHistory();
    history.push("/addUser");
  }
  render() {
    return (
      <div className="main">
        <div className="header">
          {/* <Route path="/addUser"> <Home></Home></Route> */}
          {/* <button className="btn" onClick={this.handleClick}>ADD USER</button>
          <button className="btn">USER DETAILS</button> */}
        </div>
        <img className="img" src={img} alt="LOGO"></img>
        <Router>
          <div className="header">
            <Link to='/addUser' className="btn">addUser</Link>
            <Link to='/userDetails' className="btn"><span>userDetails</span></Link>
          </div>
          {/* <switch> */}
            <Route path='/addUser'>< Home></Home> </Route>
            <Route path='/userDetails'>< Users></Users> </Route>
          {/* </switch> */}
        </Router>
        {/* <Home></Home> */}
        {/* <Users></Users> */}
      </div>
    );
  }
}

export default App;

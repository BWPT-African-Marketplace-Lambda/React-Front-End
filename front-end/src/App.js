import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import NavBar from './Components/NavBar';
import ItemsData from "./Components/ItemsData";
import './App.css';
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import UserPageList from "./Components/userPage";

function App() {
  return (
    <div className="App">

      <Route path='/' component={NavBar}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route path="/" component={ItemsData}/>
      <Route path="/userPageList" component={UserPageList}/>
    </div>
  );
}

export default withRouter(App);

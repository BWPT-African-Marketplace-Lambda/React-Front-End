import React from 'react';
import { Route, withRouter } from 'react-router-dom';
import NavBar from './Components/NavBar';
import ItemsData from "./Components/ItemsData";
import './App.css';
import Login from "./Components/Login"
import Signup from "./Components/Signup"
import UserPageList from "./Components/userPage";
import AddListing from './Components/AddListing';
import ProtectedRoute from './Components/ProtectedRoute';

function App() {

  return (
    <div className="App">
      <Route path='/' component={NavBar}/>
      <ProtectedRoute path="/add-listing" component={AddListing} />
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route exact path="/" component={ItemsData}/>
      <ProtectedRoute path="/userPageList" component={UserPageList}/>
    </div>
  );
}

export default withRouter(App);

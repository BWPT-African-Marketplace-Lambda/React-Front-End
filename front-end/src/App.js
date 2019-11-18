import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import ItemsData from "./Components/ItemsData";
import './App.css';
import Login from "./Components/Login"
import Signup from "./Components/Signup"

function App() {
  return (
    <div className="App">

      <Route exact path='/' component={NavBar}/>
      <Route path="/login" component={Login}/>
      <Route path="/signup" component={Signup}/>
      <Route exact path="/" component={ItemsData}/>
    </div>
  );
}

export default App;

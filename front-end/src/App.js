import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import ItemsData from "./Components/ItemsData";
import Login from './Components/Login';
import SignUp from './Components/Signup';
import './App.css';


function App() {
  return (
    <div className="App">
      <SignUp />
      <Login />

      <Route path='/' component={NavBar}/>
       <ItemsData/>
      
       
    </div>
  );
}

export default App;

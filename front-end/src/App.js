import React from 'react';
import { Route } from 'react-router-dom';
import NavBar from './Components/NavBar';
import ItemsData from "./Components/ItemsData"
import './App.css';


function App() {
  return (
    <div className="App">


      <Route path='/' component={NavBar}/>
      <ItemsData />   
    </div>
  );
}

export default App;

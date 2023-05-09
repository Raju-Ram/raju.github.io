import React from 'react';
import{
  BrowserRouter as Router,
  Routes as Switch,
  Route
}from "react-router-dom";

import './App.css';
import Home from './components/Home';
import Contect from './components/Contect';
import {About} from './components/About';
import {Experiences} from './components/Experiences';
import {Projects} from './components/Projects';
import TopNav from './components/TopNav';


function App() {
  return (
    <div className="App">
   <TopNav/>
   <Router>
   <Switch>
   <Route path="/Contect" element={<Contect/>}></Route>
   <Route path="/Home" element={<Home/>}></Route>
   <Route path="/About" element={<About/>}></Route>
   <Route path="/Experiences" element={<Experiences/>}></Route>
   <Route path="/Projects" element={<Projects/>}></Route>
   </Switch>
   </Router>
    </div>
  );
}

export default App;


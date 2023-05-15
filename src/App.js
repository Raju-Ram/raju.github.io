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
import {Exprojects} from './components/Exprojects';
import {Gallary} from './components/Gallary';


function App() {
  return (
    <Router>
    <div className="App">
   <TopNav/>

   
   <Switch>
   <Route path="/Contect" element={<Contect/>}></Route>
   <Route path="" element={<Home/>}></Route>
   <Route path="/About" element={<About/>}></Route>
   <Route path="/Experiences" element={<Experiences/>}></Route>
   <Route path="/Projects" element={<Projects/>}></Route>
   <Route path="/Exprojects" element={<Exprojects/>}></Route>
   <Route path="/Gallary" element={<Gallary/>}></Route>
   </Switch>
  
    </div>
    </Router>
  );
}

export default App;


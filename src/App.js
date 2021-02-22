import Header from "./components/Header/Header"
import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route
} from "react-router-dom";

import "./App.css";
import About from "./components/About/About";
import Contact from "./components/Contact/Contact";
import Footer from "./components/Footer/Footer";
import Navbar from "./components/Navbar/Navbar";
import Portfolio from "./components/Portfolio/Portfolio"

function App() {
  return (
    <Router>
      <Header/>
      <Switch>
          <Route path="/contact">
              <Contact/>
          </Route>
          <Route path="/portfolio">
              <Portfolio/>
          </Route>
          <Route path="/">
              <About/>
          </Route>
      </Switch>
      <Footer/>
    </Router>
    
    
  );
}

export default App;

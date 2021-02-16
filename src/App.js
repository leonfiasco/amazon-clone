import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";
import Login from "./components/Login";

import './App.css';

function App() {
  return (
    <Router>
        <div className="app">
        
          <Switch>
              <Router path="/login">
                  <Login />
              </Router>
              <Router path="/checkout">
                  <Header />
                  <Checkout />
              </Router>
              <Router path="/">
                  <Header />
                  <Home />
              </Router>
          </Switch>
        </div>
    </Router>
  );
}

export default App;

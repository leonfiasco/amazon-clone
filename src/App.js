import React from "react";
import { BrowserRouter as Router, Switch, Route } from "react-router-dom"

import Header from "./components/Header";
import Home from "./components/Home";
import Checkout from "./components/Checkout";

import './App.css';

function App() {
  return (
    <Router>
        <div className="app">
        <Header />
          <Switch>
              <Router path="/checkout">
                  <Checkout />
              </Router>
              <Router path="/">
                  <Home />
              </Router>
          </Switch>
        </div>
    </Router>
  );
}

export default App;

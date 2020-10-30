import React from "react";
import Navbar from './Navbar';
import Home from './Home';
import "./App.css";

import { BrowserRouter as Router, Switch, Route } from "react-router-dom";



function App() {
  return (
    <Router>
    <Navbar/>
    <Switch>
    <Route path='/' exact component={Home} />
    </Switch>
    </Router>
  );
}

export default App;

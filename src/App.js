import React from "react";
import './App.css';
import {Switch, Route, Redirect} from "react-router-dom";
import Menu from "./components/Menu";
import About from "./components/About";
import Contact from "./components/Contact";
import Home from "./components/Home";
// import Error from "./components/Error";

function App() {
  return (
    <>
    <Menu />
    <Switch>
      <Route exact path="/about" component={About}/>
      <Route exact path="/contact" component={Contact}/>
      <Route exact path="/home" component={Home}/>
      {/* <Route component={Home} /> */}
      <Redirect to="/home" />
    </Switch>
    </>
  );
}

export default App;

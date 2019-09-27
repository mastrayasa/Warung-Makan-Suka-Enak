import React , { Component} from 'react';
import {Switch,Route} from 'react-router-dom'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import NavbarUtama from "./components/NavbarUtama"
import Footer from "./components/Footer"

import Home from "./pages/Home"
import About from "./pages/About"
import Default from "./pages/Default"
import Contact from "./pages/Contact"
import Login from "./pages/Login"
import Product from "./pages/Product"

class App extends Component{
  render(){
    return (
      <React.Fragment>
        <NavbarUtama />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route path="/login" component={Login} />
          <Route path="/product" component={Product} />
          <Route component={Default} />
        </Switch> 
        <Footer />
      </React.Fragment>
    );
  }
}

export default App;

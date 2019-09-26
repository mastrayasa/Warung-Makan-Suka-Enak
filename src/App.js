import React , { Component} from 'react';
import {Switch,Route} from 'react-router-dom'; 
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';

import Home from "./pages/Home"
import About from "./pages/About"
import Default from "./pages/Default"
import Contact from "./pages/Contact"
import NavbarUtama from "./components/NavbarUtama"

class App extends Component{
  render(){
    return (
      <React.Fragment>
        <NavbarUtama />
        <Switch>
          <Route exact path="/" component={Home} />
          <Route path="/about" component={About} />
          <Route path="/contact" component={Contact} />
          <Route component={Default} />
        </Switch> 
      </React.Fragment>
    );
  }
}

export default App;

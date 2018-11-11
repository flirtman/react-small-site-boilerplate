import React, { Component } from 'react';
import { BrowserRouter, Route, Switch } from "react-router-dom";

import 'primereact/resources/themes/nova-light/theme.css';
import 'primereact/resources/primereact.min.css';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';

import {Dialog} from 'primereact/dialog';
import {Accordion,AccordionTab} from 'primereact/accordion';




import Home from "./components/Home";
import About from "./components/About";
import Contact from "./components/Contact";
import Error from "./components/Error";

import Navigation from "./components/Navigation";
import FooterMobile from "./components/FooterMobile";



class App extends Component {
  render() {
    return (
      <BrowserRouter>
        <div className="wrapper">
          <Navigation />
          <Switch>
            <Route path="/" component={Home} exact />
            <Route path="/about" component={About} />
            <Route path="/contact" component={Contact} />
            <Route component={Error} />
          </Switch>
          <FooterMobile/>
        </div>
      </BrowserRouter>
    );
  }
}

export default App;

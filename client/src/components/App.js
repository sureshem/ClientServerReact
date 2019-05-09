import React, { Component } from 'react';
import '../css/App.css';
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Landing from "../components/landing/landing"
import { BrowserRouter as Router, Route } from "react-router-dom"
import ScrollTp from "../components/common/scrolltop"
import Page1 from './innerpages/page1'
import Page2 from './innerpages/page2'

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
          <Route exact path="/" component={Landing} />
          <Route path="/innerpages/page1" component={Page1} />
          <Route path="/innerpages/page2" component={Page2} />
        <Footer />
        <ScrollTp />
      </div>
      </Router>
    );
  }
}

export default App;

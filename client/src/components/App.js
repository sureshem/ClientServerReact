import React, { Component } from 'react';
import '../css/App.css';
import Header from "../components/header/header"
import Footer from "../components/footer/footer"
import Landing from "../components/landing/landing"
import { BrowserRouter as Router, Route } from "react-router-dom"

class App extends Component {
  render() {
    return (
      <Router>
      <div className="App">
        <Header />
          <Route exact path="/" component={Landing} />
        <Footer />
      </div>
      </Router>
    );
  }
}

export default App;

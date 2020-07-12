import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Section1 from './components/first_section';
import Section2 from './components/second_second';

class App extends Component {
  render(){
    return (
      <div className="container">
        <Section1 />
        <Section2 />
      </div>
    );
  }
  
}

export default App;

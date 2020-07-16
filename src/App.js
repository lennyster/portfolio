import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import 'bootstrap/dist/css/bootstrap.min.css';
import Section1 from './components/first_section';
import Section2 from './components/second_second';
import Section3 from './components/third_section';
import Section4 from './components/fourth_section';
import Section5 from './components/fifth_section';
import Section6 from './components/sixth_section';
import Section7 from './components/seventh_section';
import Section8 from './components/eighth_section';
import Section9 from './components/nineth_section';
 

class App extends Component {
  render(){
    return (
      <div className="container">
        <Section1 />
        <Section2 />
        <Section3 />
        <Section4 />
        <Section5 />
        <Section9 />
        <Section7 />
        <Section6 />
        <Section8 />
      </div>
    );
  }
  
}

export default App;

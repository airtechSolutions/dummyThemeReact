import React, { Component } from 'react'
import './style.css';
import './css/custom.css'
import Navbar from './Components/Navbar';
import Section1 from './Components/Section1';
import Section2 from './Components/Section2';
import Section3 from './Components/Section3';
import Section4 from './Components/Section4';
import Section5 from './Components/Section5';
import Section6 from './Components/Section6';
import Section7 from './Components/Section7';
import Section8 from './Components/Section8';
import Section9 from './Components/Section9';
import Section10 from './Components/Section10';
import Section11 from './Components/Section11';
import Footer from './Components/Footer';

export default class App extends Component {
  // scriptLoaded = () => {
  //   window.A.sort();
  // }
  componentWillMount() {
    const script = document.createElement("script");
    script.src = './js/jquery/jquery-2.2.4.min.js';
    // script.async = true;
    // script.onload = () => this.scriptLoaded();
    document.body.appendChild(script)
  }
  render() {
    return (
      <div>
        <Navbar/>
        <Section1/>
        <Section2/>
        <Section3/>
        <Section4/>
        <Section5/>
        <Section6/>
        <Section7/>
        <Section8/>
        <Section9/>
        <Section10/>
        <Section11/>
        <Footer/>
        <script src="../src/js/jquery/jquery-2.2.4.min.js"></script>
      </div>
    )
  }
}

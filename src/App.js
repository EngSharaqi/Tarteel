import React, { Component } from 'react';
import './App.css';

import Slider from './components/slider';

import Main from './components/main';
import { BrowserRouter, Route } from 'react-router-dom';
export default class App extends Component {
  state ={
    Num: "1",
    handlePickSurah: []
  }
  render(){
    return (
      <div className="App">
        <Slider Num={this.state.Num} />
        <BrowserRouter>
          <Route path="/:num" component={Main} Num={this.state.Num} />
          <Route exact path="/" component={Main}/>
        </BrowserRouter>
        <footer>
          <h6># Created with <i className="fa-solid fa-heart"></i> by <a href="https://www.linkedin.com/in/engsharaqi" >Mohamed Sharaqi</a> </h6>
        </footer>
      </div>
    );
  }
}
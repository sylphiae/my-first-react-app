import React, { Component, Fragment } from 'react';
import logo from './logo.svg';
import List from './List';
import './App.css';

class App extends Component {
    constructor(props) {
        super(props);
        console.log("My component has been instantiated");
        this.state = {
            visible: true,
            awesome: true,
            foods: ['pizza','tuna casserole','nachos']
        }
    }
  render() {
      const { foods } = this.state;
   return (
       <div className="App">
          <hgroup>
          <h1>Hello there</h1>
          <h3>General Kenobi</h3>
          </hgroup>
          <List name = "My List of Foods" food={foods}/>
      </div>
  );
  }
}

export default App;

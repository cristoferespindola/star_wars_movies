import React, { Component } from 'react';
import './App.css';
import './Movies/movies';
import Movies from './Movies/movies';
import 'semantic-ui-css/semantic.min.css'

class App extends Component {
  render() {
   
    return (
      <div>        
        <Movies />
      </div>
    );
  }
}

export default App;

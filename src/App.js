import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

// Importing Components
import Home from './Components/Home';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <Route exact path='/' component={Home}/>
        </Router>
      </div>
    );
  }
}

export default App;

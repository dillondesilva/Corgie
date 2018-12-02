import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

// Importing Components
import Home from './Components/Home';
import Main from './Components/Main';

class App extends Component {
  render() {
    return (
      <div>
        <Router>
          <div>
            <Route exact path='/' component={Home}/>
            <Route exact path='/dashboard' component={Main}/>
          </div>
        </Router>
      </div>
    );
  }
}

export default App;

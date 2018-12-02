import React, { Component } from 'react';
import { BrowserRouter as Router, Route} from 'react-router-dom'
import './App.css';

import firebase from 'firebase';

// Importing Components
import Home from './Components/Home';
import Main from './Components/Main';

class App extends Component {
  componentDidMount() {
    var config = {
      apiKey: "AIzaSyB1cL7czBZiXL9dvvubbIAqu3j_eJFrkus",
      authDomain: "corgie-10f43.firebaseapp.com",
      databaseURL: "https://corgie-10f43.firebaseio.com",
      projectId: "corgie-10f43",
      storageBucket: "corgie-10f43.appspot.com",
      messagingSenderId: "428097027985"
    };

    firebase.initializeApp(config);
  }

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

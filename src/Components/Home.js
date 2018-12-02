// This is the homepage component
import React from 'react';
import {Link} from 'react-router-dom';

class Home extends React.Component {
  render () {
    return (
      <div>
        <h1>Corgie</h1>
        <h2>No more heavy bags</h2>
        <Link to='/dashboard'>Dashboard</Link>
      </div>
    )
  }
}

export default Home;
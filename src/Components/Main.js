import React from 'react';

// Importing Sub Components which make up page
import NewBook from './SubComponents/NewBook';

class Main extends React.Component {
  render () {
    return (
      <div>
        <h1>Dashboard</h1>
        <NewBook/>
      </div>
    )
  }
}

export default Main;
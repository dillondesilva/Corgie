import React from 'react';

class Main extends React.Component {
  newBook () {
    // This is a stub. newBook() will 
    // allow the user to create a new set/group 
    // of notes. Eg: A new science book
  }

  render () {
    return (
      <div>
        <h1>Dashboard</h1>
        <button onClick={() => this.newBook()}>New Book +</button>
      </div>
    )
  }
}

export default Main;
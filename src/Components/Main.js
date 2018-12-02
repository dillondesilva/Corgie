import React from 'react';
import swal from 'sweetalert';

class Main extends React.Component {
  // newBook() allows the user to create a new workbook
  newBook () {
    swal("Book name", {
      content: "input",
    }).then((value) => {
      // Stub code. Push value to Database to create new book
    });
    

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
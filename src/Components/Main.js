import React from 'react';
import swal from 'sweetalert';
import firebase from 'firebase';

class Main extends React.Component {
  // newBook() allows the user to create a new workbook
  newBook () {
    let database = firebase.database();
    swal("Book name", {
      content: "input",
    }).then((value) => {
      database.ref('books/').set({
        bookName: value
      })
      swal('Book successfully created');
    });
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
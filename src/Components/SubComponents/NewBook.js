import React from 'react';
import swal from 'sweetalert';
import firebase from 'firebase';

class NewBook extends React.Component {
  // newBook() allows the user to create a new workbook
  newBook () {
    let database = firebase.database();
    swal("Book name", {
      content: "input",
    }).then((value) => {
      if (value === '') {
        swal('Dude! Give your book a name!');
      } else {
        database.ref('books/').set({
          bookName: value
        })
        swal('Book successfully created');
      }
    });
  } 

  render() {
    return (
      <button onClick={() => this.newBook()}>New Book +</button>
    )
  }
}

export default NewBook;
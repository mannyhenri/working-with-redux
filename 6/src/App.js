import React, { Component } from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import Form from './components/Form';

// styles in-component - pay attention to the syntax
const styles = {
  textAlign: 'center',
  margin: 0,
  padding: 0,
  fontFamily: 'sans-serif',
};


// statefull component
export default class App extends Component {
  constructor(props) {
    super(props);
    this.state = {
      notes: [],
      name: 'Manny',
      currentTitle: '',
      currentDetails: '',
    }
  }

  
  // handleChange(event) {
  //   const name = event.target.name;
  //   const value = event.target.value;

  //   this.setState({
  //     [name]: value
  //   });
  // }

  // handleSubmit(event) {
  //   event.preventDefault();
  //   const data = {
  //     title: this.state.currentTitle,
  //     details: this.state.currentDetails,
  //   };
  //   firebase.database().ref('/notes').push(data, response => response);
  //   // feel free to keep the alert or not
  //   // alert(`Your note ${this.state.currentTitle} has been added!!!`);

  //   this.setState({
  //     currentTitle: '',
  //     currentDetails: '',
  //   });
  // }

  // deleteNote(id) {
  //   firebase.database().ref(`/notes/${id}`)
  //     .remove();
  //   // feel free to keep the alert or not
  //   // alert('Successfully deleted!');
  // }
  
  render() {
    return (
      <div style={styles}>
        <Header name={this.state.name}/>
        <Form />
        <Grid />
      </div>
    );
  }
}

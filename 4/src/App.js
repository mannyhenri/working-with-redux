import React, { Component } from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import Form from './components/Form';
import firebase from 'firebase';
import _ from 'lodash';

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

  componentWillMount() {
    firebase.initializeApp({
      apiKey: "AIzaSyCzQ6ZcEVxa4n7xIilndto5Eext8Fd2R5o",
      authDomain: "notepad-26d99.firebaseapp.com",
      databaseURL: "https://notepad-26d99.firebaseio.com",
      projectId: "notepad-26d99",
      storageBucket: "",
      messagingSenderId: "32304140375"
    });

    firebase.database().ref('/notes')
      .on('value', snapshot => {
        const fbStore = snapshot.val();
        // converting firebase object to array
        const store = _.map(fbStore, (value, id) => {
          return { 
            id: id, 
            title: value.title,
            details: value.details,
          };
        });
        // updating the state
        this.setState({
          notes: store,
        })
      })
  }
  
  handleChange(event) {
    const name = event.target.name;
    const value = event.target.value;

    this.setState({
      [name]: value
    });
  }

  handleSubmit(event) {
    event.preventDefault();
    const data = {
      title: this.state.currentTitle,
      details: this.state.currentDetails,
    };
    firebase.database().ref('/notes').push(data, response => response);
    // feel free to keep the alert or not
    // alert(`Your note ${this.state.currentTitle} has been added!!!`);

    this.setState({
      currentTitle: '',
      currentDetails: '',
    });
  }

  deleteNote(id) {
    firebase.database().ref(`/notes/${id}`)
      .remove();
    // feel free to keep the alert or not
    // alert('Successfully deleted!');
  }
  
  render() {
    return (
      <div style={styles}>
        <Header name={this.state.name}/>
        <Form currentTitle={this.state.currentTitle} 
          currentDetails={this.state.currentDetails}
          handleChange={this.handleChange.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}/>
        <Grid notes={this.state.notes} deleteNote={this.deleteNote.bind(this)} />
      </div>
    );
  }
}

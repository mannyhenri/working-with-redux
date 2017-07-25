import React from 'react';
import Header from './components/Header';
import Grid from './components/Grid';
import Form from './components/Form';
import firebase from 'firebase';
import _ from 'lodash';

const styles = {
  textAlign: 'center',
  margin: 0,
  padding: 0,
  fontFamily: 'sans-serif', 
}

class App extends React.Component {
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
      apiKey: "AIzaSyAnpENBdeNHjUxKW0cO9fDys0MCKDy-l5w",
      authDomain: "notepad2-a380a.firebaseapp.com",
      databaseURL: "https://notepad2-a380a.firebaseio.com",
      projectId: "notepad2-a380a",
      storageBucket: "",
      messagingSenderId: "428390500249"
    });

    firebase.database().ref('/notes')
      .on('value', snapshot => {
        const fbstore = snapshot.val();

        const store = _.map(fbstore, (value, id) => {
          return {
            id: id,
            title: value.title,
            details: value.details,
          };
        });

        this.setState({
          notes: store,
        })
      });
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

    this.setState({
      currentTitle: '',
      currentDetails: '',
    });
  }

  deleteNote(id) {
    firebase.database().ref(`/notes/${id}`)
    .remove();
    alert('Successfully deleted');
  }

  render() {
    return (
      <div className={styles}>
        <Header name={this.state.name}/>
        <Form 
          currentTitle={this.state.currentTitle}
          currentDetails={this.state.currentDetails}
          handleChange={this.handleChange.bind(this)}
          handleSubmit={this.handleSubmit.bind(this)}
        />
        <Grid notes={this.state.notes} deleteNote={this.deleteNote.bind(this)}/>
      </div>
    );
  }
}

export default App;

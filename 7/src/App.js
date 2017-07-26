import React from 'react';
import { connect } from 'react-redux';
import Header from './components/Header';
import Grid from './components/Grid';
import Form from './components/Form';
import { getInitialNotes, addNewNote, removeNote } from './store/actions';

const styles = {
  textAlign: 'center',
  margin: 0,
  padding: 0,
  fontFamily: 'sans-serif', 
}

class App extends React.Component {
  render() {
    return (
      <div className={styles}>
        <Header name={this.props.name}/>
        <Form addNewNote={this.props.addNewNote}/>
        <Grid notes={this.props.notes} removeNote={this.props.removeNote}/>
      </div>
    );
  }
}
const mapDispatchToProps = (dispatch, ownProps) => {
  return {
    getInitialNotes: () => {
      dispatch(getInitialNotes())
    },
    addNewNote: (note) => {
      dispatch(addNewNote(note))
    },
    removeNote: (id) => {
      dispatch(removeNote(id))
    },
  }
}

const mapStateToProps = (state, ownProps) => {
  return {
    notes: state.notes,
    name: state.name,
  }
}


export default connect(mapStateToProps, mapDispatchToProps)(App);

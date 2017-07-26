import React, { Component } from 'react';

export default class Form extends Component {
  render() {
    return (
      <div>
        <form onSubmit={event => {
          event.preventDefault();
          const note = {
            id: require('crypto').randomBytes(5).toString('hex'),
            title: this.refs.title.value,
            details: this.refs.details.value,
          }
          // if you want to clear the form
          this.refs.title.value = '';
          this.refs.details.value = '';
          this.props.addNewNote(note);
        }} className="col s12">
          <div className="row">
            <div className="input-field col s3">
              <input 
                id="title"
                name="currentTitle"
                type="text" 
                ref="title"
                className="validate"/>
                <label htmlFor="title">Title</label>
            </div>
            <div className="input-field col s7">
              <input
                id="details"
                name="currentDetails"
                type="text"
                ref="details"
                className="validate" />
              <label htmlFor="details">Details</label>
            </div>
            <div className="input-field col s2">
                <button className="btn-large waves-effect waves-light" 
                  type="submit" name="action">Add note</button>
            </div>
          </div>
        </form>
      </div>
    );
  }
}

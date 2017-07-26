import React, { Component } from 'react';
import Single from './Single';

export default class Grid extends Component {
  deleteNote(id) {
    this.props.deleteNote(id);
  }
  renderItems(){
    return this.props.notes.map(item => 
      <Single
          key={item.id}
          note={item}
          deleteNote={this.deleteNote.bind(this)}
      />
      );
  }
  render() {
    return (
      <div className="row">
        <ul>
          {this.renderItems()}
        </ul>
      </div>
    );
  }
}

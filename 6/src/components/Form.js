import React, { Component } from 'react';


export default class Form extends Component {
  handleChange(event) {
    this.props.handleChange(event);
  }
  handleSubmit(event) {
    this.props.handleSubmit(event);
  }
  render() {
    return (
      <div>
        <form onSubmit={this.props.handleSubmit} className="col s12">
          <div className="row">
            <div className="input-field col s3">
              <input 
                id="title"
                name="currentTitle"
                type="text" 
                value={this.props.currentTitle} 
                onChange={this.props.handleChange} 
                className="validate"/>
                <label htmlFor="title">Title</label>
            </div>
            <div className="input-field col s7">
              <input
                id="details"
                name="currentDetails"
                type="text" 
                value={this.props.currentDetails} 
                onChange={this.props.handleChange}
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

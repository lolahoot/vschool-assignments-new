import React, {Component} from "react";
import {connect} from "react-redux";

import {addContact} from "../../redux/contacts"

class AddContactForm extends Component {
  constructor(){
    super();
    this.state = {
      name: "",
    };
    this.handleChange = this.handleChange.bind(this);
    this.handleSubmit = this.handleSubmit.bind(this);
  }

  handleChange(e){
    this.setState({
      [e.target.name]: e.target.value
    });
  }

  handleSubmit(e){
    e.preventDefault();
    this.props.addContact(this.state)
    this.setState({
      name: ""
    })
  }

  render(){
    const styles = {
      fontFamily: "monospace",
      fontSize: "25px"
    }
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          style={styles}
          name="name"
          placeholder="new contact name"
          value={this.state.name}
          type="text"
          onChange={this.handleChange}/>
        <button style={styles}>add contact</button>
      </form>
    )
  }
}


export default connect(null, {addContact})(AddContactForm)

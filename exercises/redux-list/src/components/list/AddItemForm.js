import React, {Component} from "react";
import {connect} from "react-redux";

import {addItem} from "../../redux/list";

class AddItemForm extends Component {
  constructor(){
    super();
    this.state = {
      item: ""
    }
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
  this.props.addItem(this.state)
  this.setState({
    item: ""
  })
}

  render(){
    const styles = {
      fontFamily: "monospace",
      fontSize: "25px",
      color: "grey",
      marginRight: "7px"
    }
    return(
      <form onSubmit={this.handleSubmit}>
        <input
          style={styles}
          value={this.state.item}
          type="text"
          name="item"
          placeholder="your list item"
          onChange={this.handleChange}
        />
        <button style={styles}>add item</button>
      </form>
    )
  }
}

export default connect(null, {addItem})(AddItemForm)

import React, {Component} from "react";

class Person extends Component {
  constructor(props){
    super(props);

  }
  render(){
    const styles = {
      fontFamily: "monospace",
      color: "red"
    }
    return(
      <div>
        <li style={styles}>{ this.props.names }</li>
        <button onClick={this.props.names}>delete</button>
      </div>
    )
  }
}

export default Person;

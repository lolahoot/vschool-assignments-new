import React, {Component} from "react";

class Person extends Component {
  constructor(){
    super();

  }
  render(props){
    const styles = {
      fontFamily: "monospace",
      color: "red"
    }
    return(
      <div>
        <li style={styles}>{ this.props.names }</li>
        <button onClick={ ()=> props.delete(index) }>delete</button>
      </div>
    )
  }
}

export default Person;

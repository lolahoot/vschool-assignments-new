import React, {Component} from "react";
import TodoContainer from "./TodoContainer";

class App extends Component{
  constructor(){
    super();
    this.state = {
      backgroundColor: "lightblue"
    }
  }
  render(){
    {this.state}
    return (
      <TodoContainer />
    )
  }
}

export default App;

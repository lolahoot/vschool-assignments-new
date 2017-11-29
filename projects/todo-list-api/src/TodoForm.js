import React, {Component} from "react";
import {Button} from "react-bootstrap";

class TodoForm extends Component {
  constructor(){
    super();
    this.state = {
      title: "",
      description: "",
      price: "",
      imgURL: "",
      completed: false
    }
    this.updateInputs = this.updateInputs.bind(this);
    this.submitForm = this.submitForm.bind(this);
  }
  updateInputs(e){
    if(e.target.type === "checkbox"){
      this.setState({completed: e.target.checked});
    }else{
      this.setState({[e.target.name]: e.target.value});
    }
  }
  submitForm(e){
    e.preventDefault();
    this.props.addTodo(this.state)
  }
  render(){
    const styles = {
      backgroundColor: "lightblue",
      fontFamily: "monospace",
      border: "1px solid black"
    }
    return(
      <div>
        <form onSubmit={this.submitForm}>
          <input type="text" placeholder="Todo" name="title" onChange={this.updateInputs}/>
          <input type="text" placeholder="description" name="description" onChange={this.updateInputs}/>
          <input type="number" placeholder="price" name="price" onChange={this.updateInputs}/>
          <input type="URL" placeholder="imgURL" name="imgURL" onChange={this.updateInputs}/>
          <label>
            Completed
            <input type="Checkbox" onChange={this.updateInputs}/>
          </label>
        </form>
        <Button style={styles} type="submit">Add Todo</Button>
      </div>
    )
  }
}

export default TodoForm;

import React, {Component} from "react";
import axios from "axios";
import {ListGroupItem} from "react-bootstrap";

class Todo extends Component {
  constructor(props){
    super(props);
    this.state = {
      completed: props.info.completed,
      styles:{
        height: "200px",
        width: "300px",
        backgroundColor: "lightgrey",
        fontFamily: "monospace"
      }
    }
    this.toggleCompleted = this.toggleCompleted.bind(this);
  }
  toggleCompleted(){
    axios.put("https://api.vschool.io/lanie/todo/" + this.props.info._id, {completed: !this.state.completed}).then(response => {
      this.setState(prevState => {
        return {completed: response.data.completed}
      })
    })
  }

  render(){
    const {title, description, imgURL, price, completed, _id} = this.props.info;
    const lineThrough = {
      textDecoration: "line-through",
      color: "rgba(162, 86, 105,0.)"
    }
    return(
      <div style={this.state.styles}>
        <h3 style={this.state.completed ? lineThrough : null} header={title}></h3><h5>{description}</h5>
          <input onChange={this.toggleCompleted} type="checkbox" checked={this.state.completed}/>Check if Completed
          <form>
            <br>
              
            </br>
          Click Delete if you want to Delete this from your Todo list<button id={_id} onClick={this.props.delete}>Delete</button>
          </form>
        <form>
          <br>

          </br>
          <input size={25} name={title} placeholder="or Edit your title here" value={this.state.title}/>
          <button>save</button>
        </form>
      </div>
      )}
    }

export default Todo;

import React, {Component} from "react";
import axois from "axios";
import TodoForm from "./TodoForm";
import TodoList from "./TodoList";

const axios = require("axios");

class TodoContainer extends Component {
  constructor(){
    super();
    this.state = {
      todos: []
    }
    this.deleteTodo = this.deleteTodo.bind(this);
    this.addTodo = this.addTodo.bind(this);
  }
  componentDidMount(){
    axios.get("https://api.vschool.io/lanie/todo/").then(response => {
      this.setState({todos: response.data.reverse()})
    })
  }
  deleteTodo(event){
    event.persist();
    axios.delete("https://api.vschool.io/lanie/todo/" + event.target.id).then(response =>{
      this.setState(prevState =>{
        const index = prevState.todos.findIndex(todo => todo._id === event.target.id);
        prevState.todos.splice(index, 1);
        return {todos: prevState.todos}
      })
    })
  }
  addTodo(info){
    axios.post("https://api.vschool.io/lanie/todo/", info).then(response =>{
      this.setState(prevState => {
        const newInfo = response.data;
        const todos = [newInfo, ... prevState.todos];
        return {todos: todos}
      })
    })
  }

  render(){
    return(
      <div>
        <TodoForm addTodo={this.addTodo} />
        <TodoList todos={this.state.todos} delete={this.deleteTodo} />
      </div>
    )
  }
}

export default TodoContainer;

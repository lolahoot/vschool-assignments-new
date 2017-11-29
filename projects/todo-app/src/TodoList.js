import React from "react";
import {ListGroup} from "react-bootstrap";
import Todo from "./Todo";

function TodoList(props){
  return(
    <ListGroup>
      {props.todos.map(todo => <Todo info={todo} delete={props.delete} key={todo._id}/>)}
    </ListGroup>
  )
}

export default TodoList;

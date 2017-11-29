import React, {Component} from "react";
import axios from "axios";

class Todo extends Component {
  constructor(props){
    super(props)
    this.state ={
      completed: props.info.Completed,
      title: props.info.title,
      description: props.info.description,
      price: props.info.price,
      imgURL: props.info.imgURL,
      isEdited: false
    }
    this.done = this.done.bind(this);
  }
  done(){
    axios.put("https://api.vschool.io/lanie/todo/" + this.props.info._id, {completed: !this.state.completed}).then(response =>{
      this.setState(prevState => {
        return {completed: response.data.completed}
      })
    })
  }
  update(e){
    e.preventDefault()
    axios.put("https://api.vschool.io/lanie/todo" + this.props.info._id, {title: this.state.title, description: this.state.description, price: this.state.price, imgURL: this.state.imgURL}).then(response => {
      this.setState({isEdited: false})
    })
  }
  updateInputs = (e)=> {
    this.setState({[e.target.name]: e.target.value})
  }
  edit(){
    this.setState(prevState =>{
      return {isEdited: !prevState.isEdited}
    })
  }
  render(){
    const {title, description, imgURL, price, completed, _id} = this.props.info;
    const lineThrough = {
      textDecoration: "line-through"
    }
    return(
      <div>
        <h3 style={this.state.completed ? lineThrough : null}> {this.state.title}</h3><h5>{this.state.description}</h5>
        <button id={_id} onClick={this.props.delete}>Remove Todo</button>
        <input onChange={this.done} type="checkbox" checked={this.state.completed}/>
        <form onSubmit={this.update}>
          <div><input name={title} onChange={this.done} placeholder="edit title" value={this.state.title}/></div>
          <div><input name={description} onChange={this.done} placeholder="edit description" value={this.state.description}/></div>
          <div><input name={price} onChange={this.done} placeholder="edit price" value={this.state.price}/></div>
          <div><input name={imgURL} onChange={this.done} placeholder="edit imgURL" value={this.state.imgURL}/></div>
        </form>
        <button onClick={this.edit}>Edit</button>
      </div>
    )
  }
}

export default Todo;

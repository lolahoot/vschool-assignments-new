import React, {Component} from "react";
import NewForm from "./NewForm";

const arrSubmission = [];
class FormSubmit extends Component {
  constructor(){
    super();

    this.state = {
        name: "",
        game: "",
        date: "",
        score: 0,
        length: 0,
        talk: false,
        trash:["lkdna;ldf;", "adhjfakgfalg", "tyrueigtkfjndbsnf"]
      }
    this.checkBox = this.checkBox.bind(this);
    this.submit = this.submit.bind(this);
  }
  checkBox(e){
    if(e.target.type === "checkbox"){
    this.setState({trashTalk: e.target.checked});
    } else {
    this.setState({[e.target.trash]: e.target.value})
    }
  }

  submit(e){
    this.setState({[this.state]: e.target.value})
    // e.preventDefault()
    // arrSubmission.push(({[this.setState]: e.target.value}));
  }

  render(){
    return(
      <div>
        <NewForm onSubmit={this.submit} checkBox={this.checkBox}/>
        <h1>{this.player}</h1>
      </div>
    )
  }
}

export default FormSubmit;

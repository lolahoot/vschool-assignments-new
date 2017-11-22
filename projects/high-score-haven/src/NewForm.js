import React, {Component} from "react";
import {FormGroup, ControlLabel, FormControl, Checkbox, Form, Button} from "react-bootstrap";

class NewForm extends Component {
  constructor(){
    super();
    this.state = {
      player: {
        name: "",
        game: "",
        date: "",
        score: 0,
        length: 0,
        talk: false,
        trash:["lkdna;ldf;", "adhjfakgfalg", "tyrueigtkfjndbsnf"]
      },
      styles: {
        backgroundColor: "white",
        border: "5px solid white",
        leftPadding: "5%",
        width: "40%",
        height: "400px"
      }
    }
    this.trashTalk = this.trashTalk.bind(this);
  }
  trashTalk(talk){
    if(talk === true) {
    return this[Math.floor(Math.random() * this.state.player.trash.length)];
    }
  }
  render(){
    return(
      <div>
        <container style={this.state.styles}>
          <Form style={this.state.styles}>
            <FormGroup required controlId="formValidationDefault" validationState="success">
              <ControlLabel>PLEASE ENTER YOUR NAME.</ControlLabel>
              <FormControl name="name" type="text" />
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup required controlId="formValidationSuccess2" validationState="success">
              <ControlLabel>WHAT GAME DID YOU PLAY?</ControlLabel>
              <FormControl name="game" type="text" />
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup controlId="formValidationSuccess2" validationState="success">
              <ControlLabel>WHEN DID YOU PLAY?</ControlLabel>
              <FormControl name="date" type="date" />
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup required controlId="formValidationSuccess2" validationState="success">
              <ControlLabel>YOUR HIGH SCORE?</ControlLabel>
              <FormControl name="score" type="number >= 0" />
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup required controlId="formValidationSuccess2" validationState="success">
              <ControlLabel>LENGTH OF TIME YOU PLAYED?</ControlLabel>
              <FormControl name="length" type="number >= 0" />
              <FormControl.Feedback />
            </FormGroup>
            <Checkbox onChange={this.props.checkBox} validationState="success">
              <b>TRASH TALK?</b>
            </Checkbox>
          </Form>
          <Button onSubmit={this.props.onSubmit} bsStyle="success" bsSize="large">Click to Submit Your High Score</Button>
        </container>
      </div>
    )
  }
}

export default NewForm;

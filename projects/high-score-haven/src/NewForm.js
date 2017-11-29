import React, {Component} from "react";
import {FormGroup, ControlLabel, FormControl, Checkbox, Form, Button} from "react-bootstrap";

class NewForm extends Component {
  constructor(){
    super();
    this.state = {
      styles: {
        backgroundColor: "white",
        border: "5px solid white",
        leftPadding: "5%",
        width: "40%",
        height: "400px"
      }
    }
  }
  render(){
    return(
      <div>
        <span style={this.state.styles}>
          <Form style={this.state.styles}>
            <FormGroup  required controlId="formValidationDefault" validationState="success">
              <ControlLabel>PLEASE ENTER YOUR NAME.</ControlLabel>
              <FormControl name="name" value={this.props.name} onChange={this.props.handleInput}/>
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup  controlId="formValidationSuccess2" validationState="success">
              <ControlLabel>WHAT GAME DID YOU PLAY?</ControlLabel>
              <FormControl name="game" value={this.props.game} onChange={this.props.handleInput}/>
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup controlId="formValidationSuccess2" validationState="success">
              <ControlLabel>WHEN DID YOU PLAY?</ControlLabel>
              <FormControl name="date" type="date" value={this.props.date} onChange={this.props.handleInput}/>
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup  controlId="formValidationSuccess2" validationState="success">
              <ControlLabel>YOUR HIGH SCORE?</ControlLabel>
              <FormControl name="score" type="number >= 0" value={this.props.score} onChange={this.props.handleInput}/>
              <FormControl.Feedback />
            </FormGroup>
            <FormGroup  controlId="formValidationSuccess2" validationState="success">
              <ControlLabel>LENGTH OF TIME YOU PLAYED?</ControlLabel>
              <FormControl name="time" type="number >= 0" value={this.props.time} onChange={this.props.handleInput}/>
              <FormControl.Feedback />
            </FormGroup>
            <Checkbox onChange={this.props.checkBox} validationState="success">
              <b>TRASH TALK?</b>
            </Checkbox>
          </Form>
          <Button onClick={this.props.onSubmit} bsStyle="success" bsSize="large">Click to Submit Your High Score</Button>
        </span>
      </div>
    )
  }
}

export default NewForm;

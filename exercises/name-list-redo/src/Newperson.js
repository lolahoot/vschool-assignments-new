import React, {Component} from "react";

class Newperson extends Component {
  constructor(props){
    super(props);
    this.state = {
      names: ["Tom", "JoAn"],
      input: ""
    }

    this.getNames = this.getNames.bind(this);
    this.input = this.input.bind(this);
  }
    getNames(event){
      this.setState({input: event.target.value})
      // this.setState(prevState => {prevState.names})
      // console.log(this.state);
      //this.state === prevState(when its inside of .setState())
      //prevState is a parameter which becomes the this.state object
    }
    input(event){
      // console.log(this);
      this.state.names.unshift(this.state.input)
      this.setState(prevState => {prevState.names})

      event.preventDefault();
    }


  render(){
    return(
      <div>
        <input type='text' name='johhnnnnny' value={this.state.input} onChange={this.getNames}/>
        <button onClick={this.input}>Submit</button>
        <h1>Names List</h1>
          {this.names.map((name, i) {
            return(
              {getNames}
              )
            }
          )}
        <ol>
          <li>{this.props.input}</li>
        </ol>
      </div>
    )
  }
}

export default Newperson;

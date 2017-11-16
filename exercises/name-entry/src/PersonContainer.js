import React, {Component} from "react";
import Person from "./Person";

class PersonContainer extends Component {
  constructor(){
    super();
    this.state = {
      names: ["George", "Heather"],
      currentName: " "
    }
    this.updateInput = this.updateInput.bind(this);
    this.postNewWord = this.postNewWord.bind(this);
  }
  updateInput(event){
    this.setState({currentName: event.target.value})
  }
  postNewWord(event){
    this.state.names.unshift(this.state.currentName)
    this.setState({names: this.state.names})
    event.preventDefault();
  }
  render (){

    return(
      <div>
        <form onSubmit={this.postNewWord}>
          <label>
            Input Name:
            <input onChange={this.updateInput} value={this.state.currentName} />
            <button onClick={this.postNewWord}>submit</button>

            <h1>Names</h1>
          </label>
        </form>
        <ol>
          {this.state.names.map((name, i) => {
            return(
            <Person
              key={ name + i}
              names={ name }
            />
          )
        })
        }
        </ol>

      </div>
    )}
}

export default PersonContainer;

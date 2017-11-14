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
    this.deleteName = this. deleteName.bind(this);
  }
  updateInput(event){
    this.setState({currentName: event.target.value})
  }
  postNewWord(event){
    this.state.names.push(this.state.currentName)
    this.setState({names: this.state.names})
    event.preventDefault();
  }
  deleteName(index){
    this.setState(prevState =>{
      const names = [...prevState.names];
      names.splice(index, 1)
      return{ names }
    })
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
              index={i}
              delete={this.deleteName}
            />
          )
        })
        }
        </ol>

      </div>
    )}
}

export default PersonContainer;

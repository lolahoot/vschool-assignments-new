import React, {Component} from "react";
import axios from "axios";
import Person from "./Person";
// use `https://swapi.co/api/people` to put an array of people in state


class App extends Component {
  constructor(){
    super();

    this.state = {
      people: []
    }
  }
  componentDidMount(){
    axios.get("https://swapi.co/api/people/").then((response)=>{
      this.setState({people: response.data.results});
  })
}

  render(){
    return this.state.people.map(person => {
        return <ol>{person.name}</ol>
    })
  }
}

export default App;

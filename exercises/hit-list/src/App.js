import React, {Component} from "react";
import axios from "axios";
import Person from "./Person";

class App extends Component{
  constructor(){
    super();
    this.state = {
      hitlist: []
    }
  }
  componentDidMount(){
    axios.get("http://api.vschool.io:6543/hitlist.json").then(response => {
      this.setState({hitlist: response.data})
    })
  }

  render(){
      const arrHitList = this.state.hitlist.map((info) => {
        return <Person info={ info }/>
      })
    return (
      <div>
        { arrHitList }
      </div>
    )
    }
  }

export default App;

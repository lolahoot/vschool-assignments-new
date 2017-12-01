import React, {Component} from "react";

class About extends Component{
  constructor(){
    super();
    this.state = {
      background: "",
      skills: "",
      interests: ["Hiking", "Playing Violin", "Reading", "Family and Friends"]
    }
  }
  render(){

    return(
      <div>
        <h3>{this.state.interests}</h3>
      </div>
    )
  }
}

export default About;

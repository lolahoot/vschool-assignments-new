import React, {Component} from "react";
import Name from "./Name";
import Demo from "./Demo";
import Location from "./Location";
import Diet from "./Diet";

class App extends Component {
  constructor(props){
    super(props);

    this.handleSubmit = this.handleSubmit.bind(this);
    this.handleNameChange = this.handleNameChange.bind(this);
    this.ageChange = this.ageChange.bind(this);
    this.genderChange = this.genderChange.bind(this);
    this.locationsChange = this.locationsChange.bind(this);
    this.dietsChange = this.dietsChange.bind(this);
}

handleSubmit(e, props) {
  alert(e, props.state.value)
  e.preventDefault()
}
handleNameChange(e){
  this.setState({[e.target.name]:e.target.value})
}
ageChange(e){
  this.setState({[e.target.name]:e.target.value})
}
genderChange(e){
  this.setState({[e.target.name]:e.target.value})
}
locationsChange(e){
  this.setState({[e.target.name]:e.target.value})
}
dietsChange(e) {
  this.setState({[e.target.name]: e.target.value})
}

  render () {

    return (
      <div>
        <Name handleNameChange={this.handleNameChange}/>
        <Demo />
        <Location />
        <Diet />
        <button onClick={() => {alert(`First Name: ${this.state.firstName} Last Name: ${this.state.lastName} Age: ${this.state.age} Gender: ${this.state.gender} Location: ${this.state.location} Diet Restrictions: ${this.state.diet}` )}}>Submit</button>
      </div>
    )
  }
}


export default App;

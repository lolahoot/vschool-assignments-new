import React, {Component} from "react"

class Name extends Component {
  constructor(props){
    super(props);
  }
    render(){
    return(
      <div>
        <form onSubmit={() => this.props.handleSubmit(this.state)}>
          <label>
            First Name:
            <input name="firstName" onChange={this.props.handleNameChange} />
          </label>
          <label>
            Last Name:
            <input name="lastName" onChange={this.props.handleNameChange} />
          </label>
        </form>
      </div>
    )
  }
}

export default Name;

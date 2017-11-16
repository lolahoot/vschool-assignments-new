import React, {Component} from "react";

class Demo extends Component{
  constructor(props){
    super(props);
  }

  render (){
    return(
      <div>
        <form onSubmit={() => this.props.handleSubmit(this.state)}>
          <div>
            <label>
                Age:
                <input name="age" type="number" onChange={this.props.ageChange} />
            </label>
          </div>
          <label>
            Gender: Female
            <input name="gender" type="radio" onChange={this.props.genderChange} />
          </label>
          <label>
            Male
            <input name="gender" type="radio" onChange={this.props.genderChange} />
        </label>
        </form>
      </div>
    )
  }
}

export default Demo;

import React, {Component} from "react";

class Diet extends Component{
  constructor(props){
    super(props);
  }
  render(){
    return(
      <div>
        <form name="diet" onSubmit={() => this.props.handleSubmit(this.state)}>
          <label>Diet Restrictions:  </label>
          <div>
            <label>
              <input name="vegan" type="checkbox" onChange={this.props.dietsChange}/>Vegan
            </label>
            <br></br>
            <label>
              <input name="vegetarian" type="checkbox" onChange={this.props.dietsChange}/>Vegetarian
            </label>
            <br></br>
            <label>
              <input name="kosher" type="checkbox" onChange={this.props.dietsChange}/>Kosher
            </label>
            <br></br>
            <label>
              <input name="weHaveTheMeats" type="checkbox" onChange={this.props.dietsChange}/>We Have The Meats
            </label>
            <br></br>
            <label>
              <input name="glutenFree" type="checkbox" onChange={this.props.dietsChange}/>Gluten Free
            </label>
            <br></br>
            <label>
              <input name="lactoseFree" type="checkbox" onChange={this.props.dietsChange}/>Lactose Free
            </label>
          </div>
        </form>
      </div>

    )
  }
}

export default Diet;

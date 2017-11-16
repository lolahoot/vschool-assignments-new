import React, {Component} from "react";

class Location extends Component{
  constructor(props){
    super(props);
  }

  render(){
    return(
      <div>
        <form onSubmit={() => this.props.handleSubmit(this.state)}>
            <select name="location" value={this.props.value} onChange={this.props.locationsChange}>
              <option type="selectBox" name="Please Select a Location">Please Select a Location</option>
              <option type="selectBox" name="Phoenix">Phoenix</option>
              <option type="selectBox" name="Denver">Denver</option>
              <option type="selectBox" name="LasVegas">LasVegas</option>
            </select>
       </form>
     </div>
     )
  }
 }

export default Location;

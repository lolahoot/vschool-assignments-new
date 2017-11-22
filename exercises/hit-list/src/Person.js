import React, {Component} from "react";

class Person extends Component{
  constructor(props){
    super(props);
    this.state = {
      styles: {
        backgroundPosition: "center center",
        backgroundSize: "cover",
        backgroundRepeat: "no-repeat",
        height: "300px",
        width: "30%",
        display: "inline-block",
        margin: "2px auto",
        position: "relative",
        backgroundImage: `url(${this.props.info.image})`
      }
    }
  }
  render() {

    return(
      <div style={ this.state.styles }>
        <div style={ this.state.styles2 }>
            {this.props.info.name}
        </div>
      </div>
    )}
}
export default Person;

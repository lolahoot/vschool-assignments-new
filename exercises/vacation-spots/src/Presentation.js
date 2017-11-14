import React, {Component} from "react";

class Presentation extends Component {
      constructor(props){
        super();
        this.styles = {
        backgroundColor: props.season,
        marginLeft: "25px",
        height: "250px",
        width: "30%",
        display: "inline-block",
        verticalAlign: "top",
        h2:{
          fontFamily: "cursive",
          fontSize: "36px",
          color: "#164ca4"
        },
        h3: {
          fontFamily: "serif",
          fontSize: "24px",
          fontWeight: "300",
          color: "#164ca4"
        },
        p: {
          fontSize: "24px",
          fontFamily: "monospace",
          color: "#0b513fd1"
        }
      }
    }
    render() {
      return(
        <div style={this.styles}>
          <h2 style={this.styles.h2}>{this.props.place}</h2>
          <h3 style={this.styles.h3}>{this.props.timeToGo}</h3>
          <p style={this.styles.p}>{this.props.price}</p>
        </div>
      )
  }
}

export default Presentation;

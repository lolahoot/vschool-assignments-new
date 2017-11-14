import React, {Component} from "react";

let bgColor;
class BackgroundChange extends Component {
  constructor(){
    super();
    this.handleColorChange = this.handleColorChange.bind(this);

    const cssNames = ["red", "pink", "lightblue", "LightGreen", "grey", "Blue", "rebeccapurple"];

    handleColorChange() {
      let color = cssNames[Math.floor(Math.random() * cssNames.length)]
      this.setState({bg.Color: color})
      }

    render(){
      const styles = {
        height: "100px",
        wdth: "100px",
        border: "solid lightgrey 1px",
        backgroundColor: this.state.bgColor,
        display: "iniline-block"
      }
      return(
        <div style={ styles } onClick={this.handleColorChange}></div>
      )
    }
  }


export default BackgroundChange;

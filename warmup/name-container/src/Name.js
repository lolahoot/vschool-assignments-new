import React, {Component} from "react";
import NameContainer from "./NameContainer";

class Name extends Component {
  render() {
    const styles = {
      fontFamily: "cursive",
      fontSize: "12px"
    }
    return <h1 style={styles}>{this.props.name}</h1>
  }
}
export default Name;

import React from "react";

function Box(props){
  const styles = {
    height: "300px",
    width: "300px",
    border: "solid black 1px",
    display: "inline-block",
    verticalAlign: "top",
    fontFamily: "monospace",
    fontSize: "2em",
    borderRadius: "20px",
    margin: "5px",
    marginLeft: "5%",
    marginBottom: "3%",
    backgroundColor: props.backgroundColor
  }
    const subtitles = {
      display: "block",
    }
    const h4 = {
      fontSize: "16px"
    }
  return (
    <div style={styles}>
      <h3>{props.title}</h3>
      {props.subtitle}
      <h4 style={h4}>{props.info}</h4>
    </div>
  )
}

export default Box;

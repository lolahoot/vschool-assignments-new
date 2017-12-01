import React from "react";

const styles = {
    paddingTop: ".5px",
    textAlign: "center",
    fontFamily: "monospace",
    fontStyle: "italic",
    fontSize: "25px",
    color: "white",
    height: "125px",
    marginBottom: "20px",
    background: "#2c3e50", /* fallback for old browsers */
    background: "-webkit-linear-gradient(to right, #2c3e50, #4ca1af)", /* Chrome 10-25, Safari 5.1-6 */
    background: "linear-gradient(to right, #2c3e50, #4ca1af)" /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
}

export default function Header(props){
  return(
    <header style={styles}>
      <h1>list</h1>
    </header>
  )
}

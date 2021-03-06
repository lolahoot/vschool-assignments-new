import React from "react";

const styles = {
  textAlign: "center",
  fontFamily: "monospace",
  background: "#F0F2F0",  /* fallback for old browsers */
  background: "-webkit-linear-gradient(to right, #000C40, #F0F2F0)",  /* Chrome 10-25, Safari 5.1-6 */
  background: "linear-gradient(to right, #000C40, #F0F2F0)", /* W3C, IE 10+/ Edge, Firefox 16+, Chrome 26+, Opera 12+, Safari 7+ */
  fontSize: "30px"
}

export default function Header(props){
  return (
    <header style={styles}>
      <h1>contacts</h1>
    </header>
  )
}

import React from "react";
import VacationContainer from "./VacationContainer";

function Destinations() {
  const styles = {
    container:{
      height: "500px",
      width: "700px",
      place: {
        fontFamily: "cursive",
        fontSize: "24px",
        color: "blue"
      },
      price: {
        fontFamily: "monospace",
        fontSize: "16px",
        color: "green"
      },
      timeToGo: {
        fontFamily: "monospace",
        fontSize: "16px",
        color: "blue",
      }
    }
  }
  return (
    <div style={styles}>
    <VacationContainer />
    </div>

  )
}


export default Destinations;

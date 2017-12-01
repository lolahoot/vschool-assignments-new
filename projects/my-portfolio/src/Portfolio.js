import React, {Component} from "react";
import Background from "./Background";
import PortfolioStyle from "./PortfolioStyle";
import About from "./About";


function Portfolio(){
    return(
      <div>
        <Background />
        <PortfolioStyle />
        <About />
      </div>
    )
  }

export default Portfolio;

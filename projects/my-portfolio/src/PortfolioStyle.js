import React, {Component} from "react";
import {Carousel} from "react-bootstrap";

class PortfolioStyle extends Component {
  constructor() {
    super();
    this.state = {
      style: {
        textAlign: "right",
        fontFamily: "monospace",
        color: "#093665bf",
        lineSpacing: ".5"
      }
    }
  }
  render() {
    return (
    <div>
      <h4 style={this.state.style}>elaine hardy</h4>
      <h5 style={this.state.style}>703.966.8175</h5>
      <h5 style={this.state.style}>laniehardy@gmail.com</h5>
      <Carousel width={500} height={200} center={true}>
        <Carousel.Item>
          <img center={true} width={300} height={200} alt="900x500" src={require("./images/centerPieces.png")}/>
          <Carousel.Caption>
            <h3>First slide label</h3>
            <p>First Portfolio Item</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img center={true} width={300} height={200} alt="900x500" src={require("./images/IMG_1690.jpg")}/>
          <Carousel.Caption>
            <h3>Second slide label</h3>
            <p>Second Portfolio Item</p>
          </Carousel.Caption>
        </Carousel.Item>
        <Carousel.Item>
          <img center={true} width={900} height={500} alt="900x500" src={require("./images/equirectangular.jpeg")}/>
          <Carousel.Caption>
            <h3>Third slide label</h3>
            <p>Third Portfolio Item</p>
          </Carousel.Caption>
        </Carousel.Item>
      </Carousel>
    </div>)
  }
}

export default PortfolioStyle;

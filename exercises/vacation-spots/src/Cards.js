import React, {Component} from "react";
import Presentation from "./Presentation";

class Cards extends Component{
  constructor(){
    super();
    this.vacationSpots = [
      {
        place: "Meridian, Idaho",
        price: "$40",
        timeToGo: "Spring"
      },{
        place: "Cancun",
        price: "$900",
        timeToGo: "Winter"
      },{
        place: "China",
        price: "$1200",
        timeToGo: "Fall"
      },{
        place: "Russia",
        price: "$1100",
        timeToGo: "Summer"
      },{
        place: "Lebanon",
        price: "$400",
        timeToGo: "Spring"
      }
    ]
  }

  render() {
      return (
        this.vacationSpots.map(spot => {
        let season;
      {switch (spot.timeToGo) {
        case "Spring":
        season = "lightgreen"
        break;
        case "Summer":
        season = "yellow"
        break;
        case "Fall":
        season = "orange"
        break;
        case "Winter":
        season = "silver"
        break;
      }
      return <Presentation
        backgroundColor={season}
        place={spot.place}
        timeToGo={spot.timeToGo}
        price={spot.price}
      />
    }
  }
)
)
  }
}

export default Cards;

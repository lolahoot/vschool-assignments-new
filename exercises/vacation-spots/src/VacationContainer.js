import React from "react";

function VacationsContainer() {
  let vacationSpots = [
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
  return (
    vacationSpots.map(VacationSpot => {
  return (
      <VacationContainer
        place={VacationSpot.place}
        price={VacationSpot.price}
        timeToGo={VacationSpot.timeToGo}
      />
      )
    }
  )
)}

export default VacationContainer;

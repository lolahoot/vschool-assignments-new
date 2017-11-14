// import React, {Component} from "react";
// import CounterDisplay from "./CounterDisplay";
//
// class Counter extends Component{
//   constructor(){
//     super();
//     this.state = {
//       clickCounter: 0
//     }
//     this.handleIncrement = this.handleIncrement.bind(this);
//     this.handleDecrement = this.handleDecrement.bind(this);
//   }
//
//   handleDecrement() {
//     this.setState(prevState => {
//     return {clickCounter: prevState.clickCounter - 1}
//   })
//
//   handleIncrement() {
//     this.setState(prevState => {
//     return {clickCounter: prevState.clickCounter + 1}
//   })
// }
//
//   render(){
//     return ()
//     <div>
//       <button onClick={this.handleDecrement}>-</button>
//       <button onClick={this.handleIncrement}>+</button>
//       <CounterDisplay counter={this.state.clickCounter}/>
//     </div>
//     )
//   }
// }
//
// export default Counter;

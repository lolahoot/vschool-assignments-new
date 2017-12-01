import React from "react";
import {connect} from "react-redux";

import {increment, decrement} from "../redux/counter";

function App(props){
  return(
    <div>
      <button onClick={props.decrement}>-</button>
      <span>{props.counter}</span>
      <button onClick={props.increment}>+</button>
    </div>
  )

}

function mapStateToProps(state){
  return state
  // usually return an object with the pieces of the store that we want counter: state.counter
}

// first value deals with store and second deals with action creators
// const AppContainer = connect(mapStateToProps, {})(App);
// export default AppContainer;
// how it is normally written line 25

export default connect(mapStateToProps, {increment, decrement})(App);

const redux = require("redux");

// example: of action - object that is a set of instructions
// {
//   type: "INCREMENT"
// }

function reducer(prevState = 0, action){
  switch(action.type) {
    case "INCREMENT":
      return prevState + 1;
    case "DECREMENT":
      return prevState - 1;
    case "INCREASE_BY":
      return prevState + action.amount;
      case "DECREASE_BY":
        return prevState - action.amount;
    default:
      return prevState;
  }
}

const store = redux.createStore(reducer);

store.subscribe(function(){
  const currState = store.getState();
  console.log(currState);
});

function increment(){
  return {
    type: "INCREMENT"
  }
}

function decrement(){
  return {
    type: "DECREMENT"
  }
}

function increaseBy(amount) {
  return {
    type: "INCREASE_BY",
    amount
  }
}

function decreaseBy(amount) {
  return {
    type: "DECREASE_BY",
    amount
  }
}

store.dispatch(increaseBy(5));
store.dispatch(increaseBy(5));
store.dispatch(increaseBy(5));
store.dispatch(decrement());
store.dispatch(increment());
store.dispatch(decrement());
store.dispatch(decreaseBy(3));
store.dispatch(decreaseBy(3));

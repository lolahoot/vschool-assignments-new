export function addItem(item) {
  return {
    type: "ADD_ITEM",
    item
  }
}

export default function reducer(prevState = [], action){
  switch(action.type){
    case "ADD_ITEM":
      return [action.item, ...prevState];
    default:
      return prevState;
  }
}

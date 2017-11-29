const redux = require("redux");

const contacts = [];

const store = redux.createStore(reducer);

store.subscribe(function() {
  const currState = store.getState();
  console.log(currState);
});

function addContact(contact){
  return {
    type: "ADD_CONTACT",
    contact
  }
}

function remove(email){
  return {
    type: "REMOVE",
    email
  }
}

function reducer(prevState = contacts, action) {
  switch(action.type){
    case "ADD_CONTACT":
      return [...prevState, action.contact];
    case "REMOVE":
      return prevState.filter(contact => contact.email !== action.email);
    default:
      return prevState;
  }
}

store.dispatch(addContact({name: "scott", email: "scottphardy@gmail.com", phone: "5718881325"}));
store.dispatch(addContact({name: "lanie", email: "laniehardy@gmail.com", phone: "7039668175"}));
store.dispatch(remove("laniehardy@gmail.com"));

import React from "react";
import Header from "./components/Header";
import Footer from "./components/Footer";
import ContactList from "./components/ContactList"

function App(props){
  return (
    <div>
      <Header />
      <ContactList />
      <Footer />
    </div>
  )
}

export default App;

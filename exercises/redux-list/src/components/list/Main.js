import React from "react";

import AddItemForm from "./AddItemForm";
import ItemsList from "./ItemsList";

export default function Main(props){
  return (
    <main>
      <AddItemForm />
      <ItemsList />
    </main>
  )
}

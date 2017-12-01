import React from "react";
import {connect} from "react-redux";

function ItemsList(props) {
  const items = props.items.map((item, i)=> <li key={item.item + i}> {item.item} </li>)
  return(
    <ul>
      {items}
    </ul>
  )
}

function mapStateToProps(state){
  return state;
}

export default connect(mapStateToProps, null)(ItemsList)

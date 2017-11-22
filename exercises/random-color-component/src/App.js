import React, {Component} from "react";
import axios from "axios"

class App extends Component{
  componentDidMount(){
    axios.get("http://www.colr.org/api.html").then((response) =>{
      console.log();
    }

    )
  }
}

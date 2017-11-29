import React, {Component} from "react";
import NewForm from "./NewForm";

class FormSubmit extends Component {
  constructor(){
    super();

    this.state = {
        name: "",
        game: "",
        date: "",
        score: "",
        time: "",
        talk: false,
        submissions: [],
        trash:""
      }
    this.checkBox = this.checkBox.bind(this);
    this.onSubmit = this.onSubmit.bind(this);
    this.handleInput = this.handleInput.bind(this);
  }
  checkBox(e){
    this.setState({talk: e.target.checked})
  }

  trashTalk() {
    if(this.state.talk === true) {
        const arrTrash = ["lkdna;ldf;", "adhjfakgfalg", "tyrueigtkfjndbsnf"];
        return arrTrash[Math.floor(Math.random() * arrTrash.length)]
      }
  }

  handleInput(e){
    this.setState({[e.target.name]: e.target.value})

  }

  onSubmit(e){
    e.preventDefault();
    this.trashTalk();
    sessionStorage.setItem("today", JSON.stringify(this.state))
    const info = {name: this.state.name, game: this.state.game, date: this.state.date, score: this.state.score, time: this.state.time, talk: this.state.talk, trash: this.trashTalk()}
    this.setState({submissions:[info, ...this.state.submissions], name: "", game: "", date: "", score: "", time: ""})

  }

  render(){

    return(
      <div>
        <NewForm
          onSubmit={this.onSubmit}
          handleInput={this.handleInput}
          checkBox={this.checkBox}
          name={this.state.name}
          game={this.state.game}
          date={this.state.date}
          score={this.state.score}
          time={this.state.time}
        />

        {/* {this.state.submissions.map((sub, i) => {
          return

        })} */}
        <table>
           <thead>
             <tr>
               <th width="4%">#</th>
               <th width="17%">Username</th>
               <th width="17%">Game</th>
               <th width="17%">Date</th>
               <th width="17%">Score</th>
               <th width="17%">Time</th>
               <th width="17%">Trash Talk</th>
             </tr>
           </thead>
           <tbody>
             { this.state.submissions.map((player, i) => {
               return <tr key={ player.name + i }>
                   <td width="4%">{ i + 1 }</td>
                   <td width="17%">{ player.name }</td>
                   <td width="17%">{ player.game }</td>
                   <td width="17%">{ player.date }</td>
                   <td width="17%">{ player.score }</td>
                   <td width="17%">{ player.time }</td>
                   <td width="17%">{ player.trash }</td>
                  </tr>
                })
              }
           </tbody>
         </table>

      </div>
    )
  }
}

export default FormSubmit;

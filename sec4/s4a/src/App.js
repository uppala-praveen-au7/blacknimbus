import React, { Component } from "react";

import Validation from "./components/Validation";
import CharComponent from "./components/Char";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import AccessAlarmIcon from "@material-ui/icons/AccessAlarm";
import ThreeDRotation from "@material-ui/icons/ThreeDRotation";

class App extends Component {
  state = {
    length: 0,
    characters: [],
  };

  deleteChar = (index) => {
    let newChars = [...this.state.characters];
    newChars.splice(index, 1);
    this.setState({
      ...this.state,
      characters: newChars,
    });
  };

  changeHandler = (event) => {
    let size = event.target.value.length;
    let char = [...this.state.characters];
    char.push(event.target.value[size - 1]);
    this.setState({
      ...this.state,
      length: size,
      characters: char,
    });
  };
  render() {
    return (
      <div className="App container">
        <input
          type="text"
          placeholder="Text"
          onChange={this.changeHandler}
          value={this.state.characters.join("")}
        ></input>
        <Validation validate={this.state.length} />
        <CharComponent
          characters={this.state.characters}
          deleteChar={this.deleteChar}
        />
      </div>
    );
  }
}

export default App;

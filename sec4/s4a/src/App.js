import React, { Component } from "react";

import Validation from "./components/Validation";
import CharComponent from "./components/Char";
import "./App.css";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

class App extends Component {
  state = {
    length: 0,
    characters: [],
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
        ></input>
        <Validation validate={this.state.length} />
        <CharComponent characters={this.state.characters} />
      </div>
    );
  }
}

export default App;

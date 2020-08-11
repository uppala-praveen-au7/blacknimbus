import React, { useState } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";
import "./App.css";
import UserInput from "./components/UserInput";
import UserOutput from "./components/UserOutput";

function App() {
  const [currentState, setNewState] = useState({
    username: "Rama Chandra",
  });
  const nameChangeHandler = (event) => {
    const newUsername = event.target.value;
    setNewState({
      ...currentState,
      username: newUsername,
    });
  };
  const keyPressHandler = (event) => {
    console.log(event.target.value, event.keyCode);
    if (event.keyCode === 13) {
      event.stopPropagation();
      event.target.value = "";
    }
  };

  return (
    <div className="App container">
      <UserOutput username={currentState.username} />
      <UserInput
        nameChangeHandler={nameChangeHandler}
        keyPressHandler={keyPressHandler}
      />
    </div>
  );
}

export default App;

import React, { Component } from "react";
import "materialize-css/dist/css/materialize.min.css";
import "materialize-css/dist/js/materialize.min.js";

import Cockpit from "../components/Cockpit/Cockpit";
import "./App.css";
import { Button } from "react-materialize";

class App extends Component {
  constructor(props) {
    super(props);
    console.log("[App.js] constructor");
  }
  state = {
    persons: [
      { id: 1, name: "Praveen", age: 30, description: "i'm thinker & solver" },
      {
        id: 2,
        name: "Jagan",
        age: 28,
        description: "i'm executioner & solver",
      },
      {
        id: 3,
        name: "Sankar",
        age: 30,
        description: "i'm enthusiast & solver",
      },
    ],
    alterPersons: [
      {
        id: 1,
        name: "U Praveen",
        age: 32,
        description: "Try and Try and Push the Horizon",
      },
      {
        id: 2,
        name: "S Jagan",
        age: 30,
        description: "Stepping out of Comfort-zone",
      },
      {
        id: 3,
        name: "V Sankar",
        age: 32,
        description: "With humility and perseverance chase the goals",
      },
    ],
    toggleState: true,
    cockpitState: true,
  };

  static getDerivedStateFromProps(props, state) {
    console.log("[App.js] getDerivedStateFromProps", props);
    return state;
  }

  shouldComponentUpdate(nextProps, nextState) {
    console.log("[App.js] shouldComponentUpdate ", nextProps, nextState);
    return true;
  }

  componentDidMount() {
    console.log("[App.js] componentDidMount");
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[App.js] getSnapshotBeforeUpdate ", prevProps, prevState);
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[App.js] componentDidUpdate ", snapshot);
  }

  componentWillUnmount() {
    console.log("[App.js] componentWillUnmount");
  }

  switchHandler = (id, newName, newAge, newDescription) => {
    console.log(id, newName, newAge, newDescription);

    const newPersonsList = this.state.persons.map((i) => {
      if (i.id === id) {
        i.name = newName;
        i.age = newAge;
        i.description = newDescription;
      }
      return i;
    });
    this.setState({
      ...this.state,
      persons: newPersonsList,
    });
  };
  submitHandler = (event) => {
    event.preventDefault();
    const newObj = event.target;
    console.dir(newObj);
    const newName = event.target.name.value;
    const newAge = event.target.age.value;
    const newDescription = event.target.description.value;
    const ID = Number(event.target.previousSibling.id);
    const newPersonsList = this.state.persons.map((i) => {
      if (i.id === ID) {
        i.name = newName;
        i.age = newAge;
        i.description = newDescription;
      }
      return i;
    });
    this.setState({
      ...this.state,
      persons: newPersonsList,
    });
    event.target.name.value = "";
    event.target.age.value = "";
    event.target.description.value = "";
  };
  toggleCockpit = () => {
    const newCockpitState = this.state.cockpitState;
    this.setState({ ...this.state, cockpitState: !newCockpitState });
  };
  toggleHandler = () => {
    const newToggleState = this.state.toggleState;
    this.setState({ ...this.state, toggleState: !newToggleState });
  };
  deleteHandler = (event, id) => {
    event.stopPropagation();

    const newPersons = this.state.persons.filter((person) => {
      return person.id !== id;
    });

    console.log(newPersons);
    this.setState({ ...this.state, persons: newPersons });
  };
  render() {
    console.log("[App.js] render");
    let buton = (
      <Button className="btn red large" onClick={this.toggleCockpit}>
        Toggle Cockpit
      </Button>
    );
    if (!this.state.cockpitState) {
      buton = (
        <Button className="btn teal large" onClick={this.toggleCockpit}>
          Toggle Cockpit
        </Button>
      );
    }
    return (
      <div className="container App grey darken-2">
        {this.state.cockpitState ? (
          <Cockpit
            title={this.props.title}
            state={this.state}
            switchHandler={this.switchHandler}
            submitHandler={this.submitHandler}
            toggleHandler={this.toggleHandler}
            deleteHandler={this.deleteHandler}
          />
        ) : null}
        <br />
        {buton}
      </div>
    );
  }
}

export default App;

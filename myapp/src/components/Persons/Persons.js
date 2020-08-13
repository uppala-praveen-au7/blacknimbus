import React, { Component } from "react";

import Person from "./Person/Person";

class Persons extends Component {
  state = {};
  static getDerivedStateFromProps(props, state) {
    console.log("[Persons.js] getDerivedStateFromProps ", props, state);
    return state;
  }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Persons.js] shouldComponentUpdate ", nextProps, nextState);
    return nextProps.persns !== this.props.persns;
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Persons.js] getSnapshotBeforeUpdate ", prevProps, prevState);
    return null;
  }

  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Persons.js] componentDidUpdate ", snapshot);
  }
  componentWillUnmount() {
    console.log("[Persons.js] componentWillUnmount");
  }

  render() {
    console.log("[Persons.js] rendering ...");
    return this.props.persns.map((person, i) => {
      let [id, name, age, description] = [
        this.props.alterPersons[i].id,
        this.props.alterPersons[i].name,
        this.props.alterPersons[i].age,
        this.props.alterPersons[i].description,
      ];

      return (
        <Person
          key={String(person.id)}
          submit={this.props.submit}
          click={this.props.switch.bind(this, id, name, age, description)}
          uid={person.id}
          name={person.name}
          age={person.age}
          remove={this.props.delete}
        >
          {person.description}
        </Person>
      );
    });
  }
}
export default Persons;

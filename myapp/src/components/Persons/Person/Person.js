import React, { Component } from "react";
import { Button } from "react-materialize";
import DeleteIcon from "@material-ui/icons/Delete";
import PropTypes from "prop-types";

import Aux from "../../../hoc/Aux";
import withClassName from "../../../hoc/withClassName";

class Person extends Component {
  constructor(props) {
    super(props);
    this.inputElementRef = React.createRef();
  }
  // static getDerivedStateFromProps(props) {
  //   console.log("[Person.js] getDerivedStateFromProps ", props, state);
  //   return state;
  // }
  shouldComponentUpdate(nextProps, nextState) {
    console.log("[Person.js] shouldComponentUpdate ", nextProps, this.props);
    console.log(
      "shouldComponentUpdate:",
      nextProps.name !== this.props.name ||
        nextProps.age !== this.props.age ||
        nextProps.children !== this.props.children
    );
    return (
      nextProps.name !== this.props.name ||
      nextProps.age !== this.props.age ||
      nextProps.children !== this.props.children
    );
  }

  getSnapshotBeforeUpdate(prevProps, prevState) {
    console.log("[Person.js] getSnapshotBeforeUpdate ", prevProps, prevState);
    return null;
  }

  componentDidMount() {
    this.inputElementRef.current.focus();
  }
  componentDidUpdate(prevProps, prevState, snapshot) {
    console.log("[Person.js] componentDidUpdate ", snapshot);
  }

  componentWillUnmount() {
    console.log("[Person.js] componentWillUnmount");
  }

  render() {
    console.log("[Person.js] rendering ...");
    return (
      <Aux>
        <div
          className="card teal z-depth-4"
          onClick={this.props.click}
          id={this.props.uid}
          key={this.props.uid}
        >
          <h2 className="name yellow-text">
            I'm {this.props.name} and i'm {this.props.age} years old!!
          </h2>
          <p className="blue-grey white-text description">
            {this.props.children}
          </p>
          <DeleteIcon
            aria-label="delete"
            className="red-text  "
            onClick={(event) => this.props.remove(event, this.props.uid)}
            style={{
              position: "absolute",
              right: "5px",
              bottom: "-11px",
              fontSize: "30",
            }}
          ></DeleteIcon>
        </div>
        <form onSubmit={this.props.submit}>
          <div className="row">
            <div className="col s12">
              <div className="input-field col s10">
                <input
                  type="text"
                  name="name"
                  id="name"
                  ref={this.inputElementRef}
                  placeholder="Name"
                  className="validate white-text"
                />
              </div>
              <div className="input-field col s2">
                <input
                  type="number"
                  name="age"
                  id="age"
                  placeholder="Age"
                  className="validate white-text"
                />
              </div>
            </div>
          </div>

          <div className="row">
            <div className="input-field col s12">
              <textarea
                name="description"
                className="materialize-textarea white-text"
                id="description"
                cols="30"
                rows="10"
                placeholder="Description"
              ></textarea>
            </div>
          </div>

          <Button type="submit">enter</Button>
        </form>
      </Aux>
    );
  }
}

Person.propTypes = {
  click: PropTypes.func,
  uid: PropTypes.number,
  name: PropTypes.string,
  age: PropTypes.number,
  children: PropTypes.string,
  remove: PropTypes.func,
  submit: PropTypes.func,
};

export default withClassName(Person, "container");

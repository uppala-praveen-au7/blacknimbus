import React, { useEffect, useRef } from "react";

import Persons from "../Persons/Persons";
import { Button } from "react-materialize";

const Cockpit = (props) => {
  const toggleBtnRef = useRef(null);

  useEffect(
    () => {
      console.log("[Cockpit.js] useEffect");
      toggleBtnRef.current.click();
      // this function called in every render cycle
      // therefore it acts as a good alternative to react-lifecyle-hooks such as componentDidMount and/or componentDidUpdate
      // Hence this react-hook is used for sending HTTP requests
      // Now, i'm faking a HTTP requests
      // const timer = setTimeout(() => {}, 0);
      return () => {
        // clearTimeout(timer);
        console.log("[Cockpit.js] clean-up work in useEffect");
      }; //but this will work only when Cockpit-component got unmounted
    },
    [] /* If empty array is passed as an argument,
     the use-effect will be called when the component got mounted 
     and during the clean-up work such as (component got unmounted) componentWillUnmount */
  );

  useEffect(() => {
    console.log("[Cockpit.js] 2nd useEfect");

    return () => {
      console.log("[Cockpit.js] 2nd clean-up work in useEffect");
    };
  }); /* Notice, here, no argument is passed ... 
   which means this useEffect function will be called whenever it's rendered
   but it's rendered almost all the time hence this useEffect function will be called 
   almost all the times */

  let persons = null;
  let title = <h1 className="blue-text">{props.title}</h1>;
  let buton = (
    <Button
      ref={toggleBtnRef}
      onClick={props.toggleHandler}
      className="btn red waves-effect waves-light z-depth-2"
      // ref={toggleBtnRef}
    >
      Toggle
    </Button>
  );

  if (props.state.toggleState) {
    persons = (
      <Persons
        persns={props.state.persons}
        alterPersons={props.state.alterPersons}
        submit={props.submitHandler}
        switch={props.switchHandler}
        delete={props.deleteHandler}
      />
    );
  } else {
    buton = (
      <Button
        ref={toggleBtnRef}
        onClick={props.toggleHandler}
        className="btn waves-effect waves-light z-depth-2"
      >
        Toggle
      </Button>
    );
  }
  return (
    <div className="grey darken-2">
      {title}
      {buton}
      {persons}
      <br></br>
    </div>
  );
};

export default Cockpit;

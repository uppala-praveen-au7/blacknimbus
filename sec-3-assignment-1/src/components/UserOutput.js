import React from "react";

const UserOutput = (props) => {
  return (
    <div className="card z-depth-4">
      <p>
        Hello !! I'm <span className="red-text">{props.username}</span>
      </p>
      <p id="flow" className="flow-text">
        Recently, i've started
        <span className="red-text "> www.{props.username}.com</span> to increase
        the awareness about nature and how to protect it
      </p>
    </div>
  );
};

export default UserOutput;

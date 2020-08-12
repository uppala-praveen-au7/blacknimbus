import React from "react";

const Validation = (props) => {
  if (props.validate <= 5) {
    return (
      <div>
        <small className="red-text">Text is too Short</small>
      </div>
    );
  } else {
    return (
      <div>
        <small className="green-text">Text is long enough</small>
      </div>
    );
  }
};

export default Validation;

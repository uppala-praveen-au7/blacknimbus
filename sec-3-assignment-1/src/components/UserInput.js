import React from "react";

const UserInput = (props) => {
  return (
    <div className="row">
      <div className="input-field col s6">
        <input
          type="text"
          name="username"
          id="username"
          placeholder="Username"
          onChange={props.nameChangeHandler}
          onKeyDown={props.keyPressHandler}
        />
      </div>
    </div>
  );
};

export default UserInput;

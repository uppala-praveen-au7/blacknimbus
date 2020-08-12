import React from "react";
import { Button } from "react-materialize";
import ClearIcon from "@material-ui/icons/Clear";
import { red } from "@material-ui/core/colors";

const CharComponent = (props) => {
  const newChars = props.characters.map((character, index) => {
    return (
      <div className="card z-depth-2" key={String(index)}>
        <h2 className="teal yellow-text">{character}</h2>
        <Button
          className="halfway-fab btn-floating red"
          onClick={() => props.deleteChar(index)}
        >
          <ClearIcon
            style={{ fontSize: 30, position: "relative", top: "5px" }}
          ></ClearIcon>
        </Button>
      </div>
    );
  });

  return <div className="container blue-grey ">{newChars}</div>;
};

export default CharComponent;

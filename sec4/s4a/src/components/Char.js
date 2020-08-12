import React from "react";
import { Button, Icon } from "react-materialize";

const CharComponent = (props) => {
  const newChars = props.characters.map((character, index) => {
    return (
      <div className="card z-depth-2" key={String(index)}>
        <h2 className="teal yellow-text">{character}</h2>
        <Button
          className="halfway-fab btn-floating red"
          onClick={() => props.deleteChar(index)}
        >
          <Icon>clear</Icon>
        </Button>
      </div>
    );
  });

  return <div className="container blue-grey ">{newChars}</div>;
};

export default CharComponent;

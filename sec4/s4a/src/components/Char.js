import React from "react";

const CharComponent = (props) => {
  const newChars = props.characters.map((character, index) => {
    return (
      <div className="card z-depth-2" key={index}>
        <h2 className="teal yellow-text">{character}</h2>
      </div>
    );
  });

  return <div className="container blue-grey ">{newChars}</div>;
};

export default CharComponent;

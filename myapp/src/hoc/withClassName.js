import React from "react";

const withClassName = (WrappedComponent, className) => {
  return (props) => (
    <div className={className}>
      <br></br>
      <WrappedComponent {...props} />
    </div>
  );
};
export default withClassName;

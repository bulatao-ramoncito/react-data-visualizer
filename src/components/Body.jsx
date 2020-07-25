import React from "react";
import Selection from "./sorting/Selection";
import classes from "./Body.module.css";

const Body = () => {
  return (
    <div className={classes.Body}>
      <Selection />
    </div>
  );
};

export default Body;

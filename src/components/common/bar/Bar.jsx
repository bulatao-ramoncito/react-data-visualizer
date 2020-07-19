import React from "react";
import classes from "./Bar.module.css";

function Bar({ node }) {
  const { value, selected, min } = node;

  let barClass = [classes.Bar];
  if (selected) barClass.push(classes.SelectedBar);
  if (min) barClass.push(classes.Min);

  return (
    <div style={{ height: value }} className={barClass.join(" ")}>
      {value}
    </div>
  );
}

export default Bar;

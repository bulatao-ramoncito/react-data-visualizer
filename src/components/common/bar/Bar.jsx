import React from "react";
import classes from "./Bar.module.css";

function Bar({ node, width }) {
  const { value, selected, min } = node;

  let barClass = [classes.Bar];
  if (selected) barClass.push(classes.SelectedBar);
  if (min) barClass.push(classes.Min);

  return (
    <div
      style={{ height: value, width: width }}
      className={barClass.join(" ")}
    />
  );
}

export default Bar;

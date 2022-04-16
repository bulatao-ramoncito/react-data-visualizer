import React, { useState } from "react";
import classes from "./css/SortVisualizer.module.css";
import Bars from "./Bars";
import { Button } from "@mui/material";

function SortVisualizer() {
  const [bars, setBars] = useState([
    { id: 1, value: 4 },
    { id: 2, value: 2 },
    { id: 3, value: 5 },
    { id: 4, value: 3 },
    { id: 5, value: 1 },
  ]);

  return (
    <div className={classes.root}>
      <Bars bars={bars} />
      <div
        style={{
          margin: "10px",
          display: "flex",
          justifyContent: "center",
        }}
      >
        <Button variant="contained">Sort</Button>
      </div>
    </div>
  );
}

export default SortVisualizer;

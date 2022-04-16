import React from "react";
import { Typography } from "@mui/material";

function Bar({ bar }) {
  return (
    <div
      style={{
        height: `${bar.value * 30}px`,
        width: "30px",
        background: "#adf6b1",
        margin: "0px 8px",
        color: "#000000",
        display: "flex",
        alignItems: "center",
        justifyContent: "center",
      }}
    >
      <Typography>{bar.value}</Typography>
    </div>
  );
}

export default Bar;

import React from "react";
import Bar from "./Bar";

function Bars({ bars }) {
  return (
    <div
      style={{
        display: "flex",
        justifyContent: "center",
        alignItems: "flex-end",
      }}
    >
      {bars.map((bar) => (
        <Bar key={bar.id} bar={bar} />
      ))}
    </div>
  );
}

export default Bars;

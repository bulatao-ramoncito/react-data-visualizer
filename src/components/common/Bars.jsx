import React from "react";
import Bar from "./bar/Bar";

function Bars({ data, width }) {
  return (
    <React.Fragment>
      {data.map((n) => (
        <React.Fragment key={Math.random() + n.value}>
          <Bar node={n} width={width} />
          <span> </span>
        </React.Fragment>
      ))}
    </React.Fragment>
  );
}

export default Bars;

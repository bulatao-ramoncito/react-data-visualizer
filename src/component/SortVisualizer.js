import React, { useState } from "react";
import classes from "./css/SortVisualizer.module.css";
import Bars from "./Bars";
import { Button } from "@mui/material";
import { defaultColor } from "./constant/color";

function SortVisualizer() {
  const [bars, setBars] = useState([
    { id: 1, value: 4, color: defaultColor },
    { id: 2, value: 2, color: defaultColor },
    { id: 3, value: 5, color: defaultColor },
    { id: 4, value: 3, color: defaultColor },
    { id: 5, value: 1, color: defaultColor },
  ]);

  const insertionSort = async (inputArr) => {
    let n = inputArr.length;
    let lastPrintedArray = [];
    for (let i = 1; i < n; i++) {
      // Choosing the first element in our unsorted subarray
      let current = inputArr[i];

      // The last element of our sorted subarray
      let j = i - 1;
      while (j > -1 && current < inputArr[j]) {
        inputArr[j + 1] = inputArr[j];
        compareBars(current, inputArr[j + 1]);
        await sleep(200);
        j--;
      }
      inputArr[j + 1] = current;

      if (lastPrintedArray.toString() !== inputArr.toString()) {
        await sleep(800);
        updateBar(inputArr);
      }
      lastPrintedArray = [...inputArr];
    }

    return inputArr;
  };

  const compareBars = (valueA, valueB) => {
    const barA = getBarFromValue(valueA);
    barA.color = "red";
    const barB = getBarFromValue(valueB);
    barB.color = "red";

    const updatedBarState = bars.map((bar) => {
      if (bar.value === valueA) {
        return barA;
      } else if (bar.value === valueB) {
        return barB;
      } else {
        return bar;
      }
    });
    setBars(updatedBarState);
  };

  const updateBar = (updatedArray) => {
    const sortedBars = [];
    for (const value of updatedArray) {
      const bar = getBarFromValue(value);
      bar.color = defaultColor;
      sortedBars.push(bar);
    }
    setBars(sortedBars);
  };

  const getBarFromValue = (value) => {
    return bars.find((bar) => bar.value === value);
  };

  const sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  const handleSort = () => {
    const array = bars.map((bar) => bar.value);
    insertionSort(array);
  };

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
        <Button variant="contained" onClick={handleSort}>
          Sort
        </Button>
      </div>
    </div>
  );
}

export default SortVisualizer;

import React, { useEffect, useState } from "react";
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

  // useEffect(() => {
  //   const array = bars.map((bar) => bar.value);
  //   insertionSort(array);
  // }, []);

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
        j--;
      }
      inputArr[j + 1] = current;

      if (lastPrintedArray.toString() !== inputArr.toString()) {
        await sleep(1000);
        updateBar(inputArr);
      }
      lastPrintedArray = [...inputArr];
    }

    return inputArr;
  };

  const updateBar = (updatedArray) => {
    console.log("updating bar to : ", updatedArray);
    //TODO: add handling for setting state here
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

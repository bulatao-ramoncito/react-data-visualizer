import React, { Component } from "react";
import classes from "./Selection.module.css";
import CustomizedSlider from "./CustomizedSlider";
import Bars from "../common/Bars";

class Selection extends Component {
  barArea = React.createRef();

  state = {
    arr: [],
    arrSize: 0,
    barWidth: 30,
    sorting: false,
  };

  componentDidMount() {
    this.handleArrDataChange(null, 0);
  }

  sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  doOneIteration = async (i, arr, max) => {
    if (i === 0) this.setState({ sorting: true });
    if (i === max) return this.setState({ sorting: false });

    //select
    const curArr = [...arr];
    const selNode = { ...curArr[i] };
    selNode.selected = true;
    curArr[i] = selNode;
    this.setState({ arr: curArr });
    await this.sleep(0);

    let min = i;
    for (let j = i + 1; j < max; j++) {
      const curArray2 = [...this.state.arr];
      const selNode2 = { ...curArray2[j] };
      selNode2.selected = true;
      curArray2[j] = selNode2;
      this.setState({ arr: curArray2 });

      await this.sleep(0);

      const curArray3 = [...this.state.arr];
      const selNode3 = { ...curArray3[j] };
      selNode3.selected = false;
      if (arr[j].value < arr[min].value) {
        min = j;
        curArray3.forEach((n) => (n.min = false));
        selNode3.min = true;
      }
      curArray3[j] = selNode3;
      this.setState({ arr: curArray3 });

      await this.sleep(0);
    }

    const updated = [...curArr];
    const unSelectNode = { ...updated[i] };
    unSelectNode.selected = false;
    updated[i] = unSelectNode;

    if (min !== i) {
      const tmp = updated[i];
      updated[i] = updated[min];
      updated[min] = tmp;
    }

    this.setState({ arr: updated }, () =>
      this.doOneIteration(i + 1, updated, max)
    );
  };

  handleArrDataChange = (e, value) => {
    const maxWidth = this.barArea.current.offsetWidth;
    const maxHeight = 500;
    const minHeigth = 10;
    const percent = 1 - value / 100;

    const minBarWidth = 10;
    const maxBarWidth = 60;

    const barWidth = Math.floor((maxBarWidth - minBarWidth) * percent) + 10;
    const barCount = Math.floor(maxWidth / (barWidth + 4));

    const barData = this.generateBarData(maxHeight, minHeigth, barCount);
    this.setState({ arr: barData, arrSize: value, barWidth });
  };

  generateBarData = (maxHeight, minHeigth, barCount) => {
    const data = [];
    for (let i = 0; i < barCount; i++)
      data.push({
        value: this.getRandomNumber(maxHeight, minHeigth),
        selected: false,
      });
    return data;
  };

  getRandomNumber = (max, min) => {
    return Math.floor(Math.random() * (max - min + 1) + min);
  };

  handleSliderChange = (evt, value) => {
    const { arrSize } = this.state;
    if (arrSize !== value) this.handleArrDataChange(null, value);
    this.setState({ arrSize: value });
  };

  render() {
    return (
      <div ref={this.barArea} className={classes.Selection}>
        <div>
          <CustomizedSlider
            value={this.state.arrSize}
            onChange={this.handleSliderChange}
            disabled={this.state.sorting}
          />
          <div>
            <button
              disabled={this.state.sorting}
              onClick={() => {
                this.doOneIteration(0, this.state.arr, this.state.arr.length);
              }}
            >
              SORT
            </button>
            <button
              disabled={this.state.sorting}
              onClick={() => this.handleArrDataChange(null, this.state.arrSize)}
            >
              RESET
            </button>
          </div>
        </div>
        <Bars data={this.state.arr} width={this.state.barWidth} />
      </div>
    );
  }
}

export default Selection;

import React, { Component } from "react";
import Bar from "../common/bar/Bar";

class Selection extends Component {
  state = {
    // arr: [14, 33, 27, 10, 35, 19, 42, 44],
    // arr: [
    //   { value: 14, selected: false },
    //   { value: 33, selected: false },
    //   { value: 27, selected: false },
    //   { value: 10, selected: false },
    //   { value: 35, selected: false },
    //   { value: 19, selected: false },
    //   { value: 42, selected: false },
    //   { value: 44, selected: false },
    // ],
    arr: [
      { value: 18, selected: false },
      { value: 49, selected: false },
      { value: 14, selected: false },
      { value: 16, selected: false },
      { value: 69, selected: false },
      { value: 40, selected: false },
      { value: 86, selected: false },
      { value: 32, selected: false },
      { value: 43, selected: false },
      { value: 46, selected: false },
      { value: 62, selected: false },
      { value: 35, selected: false },
      { value: 82, selected: false },
      { value: 64, selected: false },
      { value: 42, selected: false },
      { value: 39, selected: false },
      { value: 33, selected: false },
      { value: 12, selected: false },
      { value: 72, selected: false },
      { value: 65, selected: false },
    ],
  };

  sleep = (ms) => {
    return new Promise((resolve) => setTimeout(resolve, ms));
  };

  doOneIteration = async (i, arr, max) => {
    if (i === max) return;
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

  render() {
    return (
      <div>
        {this.state.arr.map((n) => (
          <React.Fragment key={n.value}>
            <Bar node={n} />
            <span> </span>
          </React.Fragment>
        ))}
        <br />
        <button
          onClick={() =>
            this.doOneIteration(0, this.state.arr, this.state.arr.length)
          }
        >
          SORT
        </button>
        <button onClick={() => window.location.reload()}>RESET</button>
        {/* <pre>{JSON.stringify(this.state, 2, null)}</pre> */}
      </div>
    );
  }
}

export default Selection;

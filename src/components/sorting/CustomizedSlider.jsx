import React from "react";
import { makeStyles } from "@material-ui/core/styles";
import Slider from "@material-ui/core/Slider";

const useStyles = makeStyles((theme) => ({
  root: {
    width: 250,
  },
  margin: {
    height: theme.spacing(3),
  },
}));

export default function CustomizedSlider({ value, onChange, disabled }) {
  const classes = useStyles();

  return (
    <Slider
      disabled={disabled}
      className={classes.root}
      value={value}
      onChange={onChange}
    />
  );
}

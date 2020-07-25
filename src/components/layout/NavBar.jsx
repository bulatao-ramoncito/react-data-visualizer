import React from "react";
import { AppBar, Toolbar, Typography } from "@material-ui/core";

function NavBar(props) {
  return (
    <AppBar position="static">
      <Toolbar>
        <Typography variant="h6">RB</Typography>
      </Toolbar>
    </AppBar>
  );
}

export default NavBar;

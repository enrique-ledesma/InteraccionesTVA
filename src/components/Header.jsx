import React from "react";
import logo from "../images/logo.png";
import { toggleCreator } from "./CardCreator";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  root: {
    "& > *": {
      margin: theme.spacing(1)
    }
  },
  fab: {
    backgroundColor: "#fff",
    margin: theme.spacing(1)
  }
}));

function Header() {
  const classes = useStyles();
  return (
    <header>
      <img src={logo} alt="logo" />
      <Fab className={classes.fab} id="header-btn-add" onClick={toggleCreator}>
        <AddIcon className={classes.extendedIcon} />
      </Fab>
      <h1>Interacciones</h1>
    </header>
  );
}

export default Header;

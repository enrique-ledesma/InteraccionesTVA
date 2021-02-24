import React, { useEffect } from "react";
import logo from "../images/logo.png";
import Fab from "@material-ui/core/Fab";
import AddIcon from "@material-ui/icons/Add";
import { makeStyles } from "@material-ui/core/styles";
import { toggleCreator } from "./CardCreator";
import SettingsIcon from "@material-ui/icons/Settings";

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

function Header(props) {
  function toggleCreator() {
    props.toggleCreator(!props.creatorState);
  }

  function toggleSettings() {
    props.toggleSettings(!props.settingsState);
  }
  const classes = useStyles();
  return (
    <header>
      <img src={logo} alt="logo" />
      <div>
        <Fab
          className={classes.fab}
          id="header-btn-add"
          onClick={toggleCreator}
        >
          <AddIcon className={classes.extendedIcon} />
        </Fab>
        <Fab
          size="small"
          className={classes.fab}
          id="header-btn-settings"
          onClick={toggleSettings}
        >
          <SettingsIcon />
        </Fab>
      </div>
      <h1>Interacciones</h1>
    </header>
  );
}

export default Header;

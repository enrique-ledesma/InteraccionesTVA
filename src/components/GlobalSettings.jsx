import React, { useState } from "react";
import Switch from "@material-ui/core/Switch";
import TextField from "@material-ui/core/TextField";
import Card from "@material-ui/core/Card";
import { makeStyles } from "@material-ui/core/styles";
import CardActions from "@material-ui/core/CardActions";
import CardContent from "@material-ui/core/CardContent";
import FormGroup from "@material-ui/core/FormGroup";
import FormControlLabel from "@material-ui/core/FormControlLabel";
import Grid from "@material-ui/core/Grid";
import Button from "@material-ui/core/Button";
import CheckIcon from "@material-ui/icons/Check";

const useStyles = makeStyles((theme) => ({
  button: {
    margin: theme.spacing(1),
    backgroundColor: "#009921",
    "&:hover": {
      backgroundColor: "#008911"
    }
  },
  textField: {
    margin: theme.spacing(1),
    width: "calc(100% - 30px)"
  },
  header: {
    fontSize: "20px",
    textAlign: "center"
  }
}));

function GlobalSettings(props) {
  const [switchState, setSwitchState] = useState(false);
  const [output, setOutput] = useState({
    title: "",
    time: "",
    habilitaSonido: "",
    adunit: ""
  });
  const classes = useStyles();

  function handleSwitch(event) {
    setSwitchState(event.target.checked);
  }

  function toggleSettings() {
    props.toggleSettings(!props.settingsState);
  }

  function handleButton() {
    props.onUpdate(
      output.title,
      output.time,
      output.habilitaSonido,
      output.adunit
    );
    toggleSettings();
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setOutput((prevOutput) => {
      return {
        ...prevOutput,
        habilitaSonido: [switchState],
        [name]: value
      };
    });
  }
  return (
    <Card>
      <CardContent>
        <h1 className={classes.header}>Configuración</h1>
        <TextField
          name="title"
          variant="outlined"
          label="Título"
          helperText={"Actual: " + output.title}
          value={output.title}
          className={classes.textField}
          onChange={handleChange}
        />
        <TextField
          name="adunit"
          variant="outlined"
          label="AdUnit"
          placeholder=""
          helperText={"Actual: " + output.adunit}
          value={output.adunit}
          className={classes.textField}
          onChange={handleChange}
        />
        <Grid container spacing={3}>
          <Grid item xs={6}>
            <TextField
              name="time"
              variant="outlined"
              label="Tiempo"
              placeholder=""
              helperText={"Actual: " + output.time}
              value={output.time}
              className={classes.textField}
              onChange={handleChange}
            />
          </Grid>
          <Grid item xs={3}>
            <FormControlLabel
              control={
                <Switch
                  checked={switchState}
                  onChange={handleSwitch}
                  name="sonido"
                />
              }
              label="Sonido"
            />
          </Grid>
        </Grid>
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<CheckIcon />}
          onClick={handleButton}
        >
          Aceptar
        </Button>
      </CardContent>
    </Card>
  );
}
export default GlobalSettings;

import React, { useState } from "react";
import CancelIcon from "@material-ui/icons/Cancel";
import CheckIcon from "@material-ui/icons/Check";
import Button from "@material-ui/core/Button";
import { makeStyles } from "@material-ui/core/styles";
import TextField from "@material-ui/core/TextField";

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
  }
}));

function CardEditor(props) {
  const classes = useStyles();
  const [card, setCard] = useState({
    id: props.id,
    title: "",
    url: "",
    enabled: false
  });
  function handleChange(event) {
    const { name, value } = event.target;

    setCard((prevCard) => {
      return {
        ...prevCard,
        [name]: value
      };
    });
  }
  function submitCard() {
    props.updateCard(props.id, card);
    props.closeEdit();
  }
  return (
    <div className="card-editor">
      <CancelIcon className="icon icon-close" onClick={props.closeEdit} />
      <h1 className="card-creator-h1">Editar interacción</h1>
      <form>
        <TextField
          name="title"
          variant="outlined"
          label="Titulo"
          helperText={"Actual: " + props.title}
          value={card.title}
          className={classes.textField}
          onChange={handleChange}
        />
        <TextField
          name="url"
          variant="outlined"
          label="URL"
          placeholder={props.url}
          helperText={"Actual: " + props.url}
          value={card.url}
          className={classes.textField}
          onChange={handleChange}
        />
        <Button
          variant="contained"
          color="primary"
          className={classes.button}
          startIcon={<CheckIcon />}
          onClick={submitCard}
        >
          Aceptar
        </Button>
      </form>
    </div>
  );
}

export default CardEditor;

import React from "react";
import IconButton from "@material-ui/core/IconButton";
import DeleteIcon from "@material-ui/icons/Delete";
import EditIcon from "@material-ui/icons/Edit";
import Switch from "@material-ui/core/Switch";
import CardEditor from "./CardEditor";

function Card(props) {
  const [switchState, setSwitchState] = React.useState(false);
  const [editorState, setEditorState] = React.useState(false);
  React.useEffect(() => {
    setSwitchState(props.enabled);
  }, [props.enabled]);
  function handleDelete() {
    props.onDelete(props.id);
  }

  function openEdit() {
    setEditorState(true);
  }

  function closeEdit() {
    setEditorState(false);
  }

  function enableCard(isEnabled) {
    props.enableCard(props.id);
  }

  function handleSwitch(event) {
    setSwitchState(event.target.checked);
    // If it is set to true, pass back this card to be set to active.
    if (event.target.checked === true) {
      enableCard(event.target.checked);
    }
    // If it is false, pass back this card to be set to inactive.
  }

  return (
    <div className="card">
      {editorState && (
        <CardEditor
          id={props.id}
          updateCard={props.updateCard}
          closeEdit={closeEdit}
          title={props.title}
          url={props.url}
        />
      )}
      <Switch
        onChange={handleSwitch}
        className="react-switch"
        checked={switchState}
      />
      <p>{props.title}</p>
      <div className="icon-section">
        <IconButton size="small" aria-label="delete" onClick={handleDelete}>
          <DeleteIcon fontSize="small" size="small" className="icon-delete" />
        </IconButton>
        <IconButton size="small" aria-label="delete" onClick={openEdit}>
          <EditIcon fontSize="small" className="icon-edit" />
        </IconButton>
      </div>
    </div>
  );
}

export default Card;

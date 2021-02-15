import React from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faEdit, faTrashAlt } from "@fortawesome/free-solid-svg-icons";
import Switch from "react-switch";

var title = "Título muestra";

function Card(props) {
  return (
    <div className="card">
      <Switch className="react-switch" />
      <h1>{props.title}</h1>
      <div className="iconSection">
        <FontAwesomeIcon icon={faEdit} className="icon icon-edit" />
        <FontAwesomeIcon icon={faTrashAlt} className="icon icon-delete" />
      </div>
    </div>
  );
}

export default Card;

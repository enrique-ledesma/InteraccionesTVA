import React from "react";
import Card from "./Card";

function CardContainer(props) {
  return (
    <div className="card-container">
      {props.cardList.map((interaction, index) => (
        <Card
          key={interaction.id}
          id={interaction.id}
          title={interaction.title}
          onDelete={props.onDelete}
          enabled={interaction.enabled}
          enableCard={props.enableCard}
        />
      ))}
    </div>
  );
}

export default CardContainer;

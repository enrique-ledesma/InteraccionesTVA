import React, { useState } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faTimesCircle } from "@fortawesome/free-solid-svg-icons";
import { v4 as uuidv4 } from "uuid";

export function toggleCreator() {
  const creator = document.getElementsByClassName("card-creator")[0];
  const background = document.getElementsByClassName("background-layer")[0];
  creator.classList.toggle("expanded");
  if (creator.classList.contains("expanded")) {
    background.style.display = "block";
  } else {
    background.style.display = "none";
  }
}

function CardCreator(props) {
  const [card, setCard] = useState({
    id: uuidv4(),
    title: "",
    url: "",
    enabled: false
  });

  function submitCard(event) {
    props.onAdd(card);
    event.preventDefault();
    setCard({
      id: uuidv4(),
      title: "",
      url: ""
    });
    toggleCreator();
  }

  function handleChange(event) {
    const { name, value } = event.target;

    setCard((prevCard) => {
      return {
        ...prevCard,
        [name]: value
      };
    });
  }
  return (
    <div className="card-creator">
      <FontAwesomeIcon
        icon={faTimesCircle}
        className="icon icon-close"
        onClick={toggleCreator}
      />
      <h1>Crear nueva interacción</h1>
      <form>
        <input
          name="title"
          type="text"
          placeholder="Título de la interacción"
          value={card.title}
          onChange={handleChange}
        />
        <input
          name="url"
          type="text"
          placeholder="URL"
          value={card.url}
          onChange={handleChange}
        />
        <button className="card-creator-button" onClick={submitCard}>
          Crear
        </button>
      </form>
    </div>
  );
}

export default CardCreator;

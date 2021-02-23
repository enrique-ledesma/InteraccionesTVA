import "../../public/styles.css";
import Header from "./Header";
import Footer from "./Footer";
import CardContainer from "./CardContainer";
import CardCreator, { toggleCreator } from "./CardCreator";
import React, { useState } from "react";
import interactions from "../resources/interactions";
import fs from "fs";

export default function App() {
  const [cards, setCards] = useState(interactions);
  function addCard(newCard) {
    console.log("creating card " + newCard.id);
    setCards((prevCards) => {
      return [...prevCards, newCard];
    });
  }

  function deleteCard(id) {
    console.log("Deleting id: " + id);
    setCards((prevCards) => {
      return prevCards.filter((currentCard) => {
        return currentCard.id !== id;
      });
    });
    console.log(cards);
  }

  function enableCard(id) {
    var newCardList = [...cards];
    // Look for the element to enable:
    newCardList.forEach((element) => {
      if (element.id === id) {
        element.enabled = true;
      } else {
        element.enabled = false;
      }
    });
    setCards(newCardList);
    console.log(cards);
  }

  return (
    <div>
      <section className="background-layer" onClick={toggleCreator}></section>
      <Header />
      <CardCreator onAdd={addCard} />
      <CardContainer
        onDelete={deleteCard}
        enableCard={enableCard}
        cardList={cards}
      />
      <Footer />
    </div>
  );
}

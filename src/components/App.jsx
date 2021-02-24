import "../../public/styles.css";
import Header from "./Header";
import Footer from "./Footer";
import CardContainer from "./CardContainer";
import CardCreator, { toggleCreator } from "./CardCreator";
import React, { useState } from "react";
import interactions from "../resources/interactions";
import fs from "fs";
import Button from "@material-ui/core/Button";
import GlobalSettings from "./GlobalSettings";
import { makeStyles } from "@material-ui/core/styles";

const useStyles = makeStyles((theme) => ({
  settingsCard: {
    height: "500px",
    width: "500px",
    position: "fixed",
    top: "50%",
    left: "50%",
    marginTop: "-250px",
    marginLeft: "-250px",
    zIndex: "3"
  }
}));

export default function App() {
  const classes = useStyles();
  const [cards, setCards] = useState(interactions);
  const [creatorState, setCreatorState] = useState(false);
  const [settingsState, setSettingsState] = useState(false);
  const [outputJSON, setOutputJSON] = useState({
    setList: {
      title: "",
      img: "",
      url: "",
      time: "",
      habilitaSonido: "",
      adunit: ""
    }
  });

  function addCard(newCard) {
    setCards((prevCards) => {
      return [...prevCards, newCard];
    });
  }

  function deleteCard(id) {
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
  }

  function updateCard(id, updatedCard) {
    var newCardList = [...cards];
    //Search for the card
    newCardList.forEach((element) => {
      if (element.id === id) {
        element.title = updatedCard.title;
        element.url = updatedCard.url;
      }
    });
    setCards(newCardList);
  }

  function toggleCreator(state) {
    setCreatorState(state);
  }

  function toggleSettings(state) {
    setSettingsState(state);
  }

  function updateSettings(newTitle, newTime, newSonido, newAdUnit) {
    var outputBuffer = {
      setList: {
        title: newTitle,
        img: "",
        url: "",
        time: newTime,
        habilitaSonido: "",
        adunit: newAdUnit
      }
    };
    //Look for active card
    cards.forEach((element) => {
      if (element.enabled === true) {
        outputBuffer.setList.url = element.url;
      }
    });

    //Update sound
    outputBuffer.setList.habilitaSonido = newSonido ? "1" : "0";
    setOutputJSON(outputBuffer);
  }

  function debug() {
    console.log(outputJSON);
  }

  return (
    <div>
      <Header
        toggleCreator={toggleCreator}
        creatorState={creatorState}
        toggleSettings={toggleSettings}
        settingsState={settingsState}
      />
      {creatorState && (
        <CardCreator
          onAdd={addCard}
          toggleCreator={toggleCreator}
          currentState={creatorState}
        />
      )}
      {settingsState && (
        <div className={classes.settingsCard}>
          <GlobalSettings
            onUpdate={updateSettings}
            toggleSettings={toggleSettings}
            settingsState={settingsState}
          />
        </div>
      )}
      {creatorState && (
        <section className="background-layer" onClick={toggleCreator}></section>
      )}
      <Button color="primary" onClick={debug} style={{ zIndex: "2000" }}>
        DEBUG
      </Button>
      <CardContainer
        onDelete={deleteCard}
        enableCard={enableCard}
        cardList={cards}
        updateCard={updateCard}
      />
      <Footer />
    </div>
  );
}

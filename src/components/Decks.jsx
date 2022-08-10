import React, { useEffect, useState } from "react";
import { motion, AnimateSharedLayout } from "framer-motion";
import DeckOptions from "./DeckOptions";
import NewDeckForm from "./NewDeckForm";
import { getDecks } from "../actions/deckActions";
import { useSelector, useDispatch } from "react-redux";
import { addDeck } from "../actions/deckActions";

const Decks = ({ currentUser }) => {
  const decks = useSelector((state) => state.deckReducer.decks);
  const dispatch = useDispatch();
  const [form, toggleForm] = useState(false);

  const handleNewDeck = (name) => {
    dispatch(addDeck(name));
    toggleForm(!form);
  };

  useEffect(() => {
    dispatch(getDecks());
  }, [dispatch]);

  return (
    <AnimateSharedLayout>
      <motion.div className="decks-container" layout>
        <motion.div className="decks-header" layout>
          <motion.h2 className="decks-header-text" layout>
            Decks
          </motion.h2>
          <motion.button
            className="add-deck-bttn"
            onClick={() => toggleForm(!form)}
            whileHover={{ background: "white", color: "black" }}
            whileTap={{ borderRadius: "50%" }}
          >
            +
          </motion.button>
        </motion.div>
        {!form && decks.length === 0 && (
          <div
            style={{
              display: "flex",
              justifyContent: "center",
              alignItems: "center",
              height: "80%",
              background: "transparent",
              color: "var(--lightblue)",
              fontSize: "40px",
            }}
          >
            <span>No Decks Yet</span>
          </div>
        )}
        {form && <NewDeckForm handleNewDeck={handleNewDeck} />}
        {!form && decks.length > 0 && <DeckOptions decks={decks} />}
      </motion.div>
    </AnimateSharedLayout>
  );
};

export default Decks;

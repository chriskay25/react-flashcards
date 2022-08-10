import React from "react";
import { motion } from "framer-motion";
import ModeSelect from "./ModeSelect";

const optionVariants = {
  hidden: {
    opacity: 0,
    borderRadius: "10px",
  },
  visible: {
    opacity: 1,
    width: "100%",
    color: "#c2dae2",
    borderRadius: "10px",
  },
  open: {
    opacity: 1,
    color: "var(--lightcoral)",
    borderRadius: "10px",
  },
};

const DeckOption = ({ deck, selected, handleClick }) => {
  return (
    <motion.li
      key={deck.id}
      className="deck-option"
      initial="hidden"
      animate={selected ? "open" : "visible"}
      exit="exit"
      variants={optionVariants}
      layout
    >
      <motion.div
        style={{ padding: "1rem" }}
        onClick={() => handleClick(deck.id)}
        layout
      >
        <motion.h2 style={{ fontSize: "2.5rem" }} layout>
          {deck.name}
        </motion.h2>
        {selected && (
          <motion.div style={{ fontSize: "1.8rem" }} layout>
            {deck.cards.length} Cards
          </motion.div>
        )}
      </motion.div>

      <motion.div className="mode-select-div" layout>
        {selected && <ModeSelect deck={deck} />}
      </motion.div>
    </motion.li>
  );
};

export default DeckOption;

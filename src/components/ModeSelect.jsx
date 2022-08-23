import React, { useState } from "react";
import { Redirect } from "react-router-dom";
import { useDispatch } from "react-redux";
import { getDeck, setMode } from "../actions/deckActions";
import { motion, AnimateSharedLayout } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowRight } from "@fortawesome/free-solid-svg-icons";

const ModeSelect = ({ deck }) => {
  const [selected, setSelected] = useState("quiz");
  const [redirected, setRedirected] = useState(false);
  const modes = ["quiz", "study", "edit"];
  const dispatch = useDispatch();

  const handleModeSelect = () => {
    dispatch(getDeck(deck.id));
    dispatch(setMode(selected));
    setRedirected(true);
  };

  return (
    <motion.div
      className="mode-select-container"
      layout
      initial={{ opacity: 0, scale: 0.4 }}
      animate={{ opacity: 1, scale: 1 }}
      transition={{ delay: 0.4, type: "spring" }}
    >
      <h2>Select Mode</h2>
      <div className="mode-select">
        <AnimateSharedLayout>
          {modes.map((mode) => (
            <motion.div
              className={`mode-option ${selected === mode && "selected"}`}
              key={mode}
              onClick={() => setSelected(mode)}
              layout
            >
              {selected === mode && (
                <motion.span className="underline" layoutId="underline" />
              )}
              {mode}
            </motion.div>
          ))}
        </AnimateSharedLayout>
      </div>
      <div className="confirm-mode">
        <button onClick={() => handleModeSelect(selected)}>
          {<FontAwesomeIcon icon={faArrowRight} size={"2x"} />}
        </button>
      </div>
      {redirected && <Redirect to={{ pathname: `/decks/${deck.id}` }} />}
    </motion.div>
  );
};

export default ModeSelect;

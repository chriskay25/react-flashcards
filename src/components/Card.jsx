import React from "react";
import { useDispatch } from "react-redux";
import Question from "./Question";
import Answer from "./Answer";
import Checkmark from "./Checkmark";
import CardStats from "./CardStats";
import { triggerHintModal } from "../actions/sessionActions";
import { motion } from "framer-motion";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faLightbulb } from "@fortawesome/free-solid-svg-icons";

const cardVariants = {
  enterRight: {
    opacity: 0,
    x: "60vw",
    scale: 0.4,
  },
  enterLeft: {
    opacity: 0,
    x: "-60vw",
    scale: 0.4,
  },
  visible: {
    opacity: 1,
    x: 0,
    scale: 1,
  },
  exitRight: {
    x: "60vw",
    opacity: 0.2,
    scale: 0,
  },
  exitLeft: {
    x: "-60vw",
    opacity: 0.2,
    scale: 0,
  },
};

const Card = ({ card, index, mode, direction }) => {
  const dispatch = useDispatch();

  const handleHint = () => {
    const modalObject = { open: true, content: card.hint };
    dispatch(triggerHintModal(modalObject));
  };

  return (
    <motion.div className="card" style={{ overflow: "hidden" }}>
      <motion.div
        className="inner-card"
        key={index}
        variants={cardVariants}
        initial={direction === "forward" ? "enterRight" : "enterLeft"}
        animate="visible"
        transition={{ type: "spring", stiffness: 175, damping: 25 }}
        exit={direction === "forward" ? "exitLeft" : "exitRight"}
      >
        <span className="question-number">{index + 1}.</span>
        <Question question={card.question} />
        <Answer
          answer={card.answer}
          answered={card.answered}
          mode={mode}
          id={card.id}
        />
        <FontAwesomeIcon
          onClick={handleHint}
          className="fontawesome-lightbulb"
          icon={faLightbulb}
          size="2x"
        />
        <CardStats />
        {card.answered && <Checkmark correct={card.correct} />}
      </motion.div>
    </motion.div>
  );
};

export default Card;

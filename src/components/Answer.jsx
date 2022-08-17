import React, { useState } from "react";
import { useDispatch } from "react-redux";
import { questionAnswered } from "../actions/sessionActions";
import { motion } from "framer-motion";
import { TextareaAutosize } from "@material-ui/core";

const answerVariants = {
  hidden: {
    opacity: 0,
  },
  visible: {
    opacity: 1,
  },
};

const Answer = ({ answer, mode, answered, id }) => {
  const [userAnswer, setUserAnswer] = useState("");
  const dispatch = useDispatch();

  const handleAnswerChange = (e) => {
    setUserAnswer(e.target.value);
  };

  const handleAnswerSubmit = (e) => {
    const payload = {
      id: id,
      answer: userAnswer,
    };
    dispatch(questionAnswered(payload));
  };

  return (
    <motion.div
      className="answer"
      variants={answerVariants}
      initial="hidden"
      animate="visible"
      layout
    >
      {mode === "quiz" && (
        <>
          <TextareaAutosize
            value={userAnswer}
            onChange={handleAnswerChange}
            placeholder="Answer"
          ></TextareaAutosize>
          <button
            className="answer-submit"
            onClick={handleAnswerSubmit}
            disabled={answered}
          >
            Submit
          </button>
        </>
      )}
      {mode === "study" && <div>{answer}</div>}
    </motion.div>
  );
};

export default Answer;

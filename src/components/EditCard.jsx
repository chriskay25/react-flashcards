import { useState } from "react";
import { TextareaAutosize } from "@material-ui/core";

const EditCard = ({ card }) => {
  const [question, setQuestion] = useState(card ? card.question : "");
  const [answer, setAnswer] = useState(card ? card.answer : "");
  const [hint, setHint] = useState(card && card.hint ? card.hint : "");

  const editCard = (e) => {
    e.preventDefault();
  };

  return (
    <div className="edit-card">
      <form onSubmit={(e) => editCard(e)}>
        <div>
          <p style={{ fontFamily: "bungee" }}>Question</p>
          <TextareaAutosize
            className="edit-card input"
            onChange={(e) => setQuestion(e.target.value)}
            value={question}
          />
        </div>
        <div>
          <p style={{ fontFamily: "bungee", marginTop: "10px" }}>Answer</p>
          <TextareaAutosize
            className="edit-card input"
            type="text"
            name="answer"
            value={answer}
            onChange={(e) => setAnswer(e.target.value)}
          />
        </div>
        <div>
          <p style={{ fontFamily: "bungee", marginTop: "10px" }}>Hint</p>
          <input
            className="edit-card input"
            type="text"
            name="hint"
            value={hint}
            onChange={(e) => setHint(e.target.value)}
          />
        </div>
        <input className="edit-submit" type="submit" value="Submit Changes" />
      </form>
    </div>
  );
};

export default EditCard;

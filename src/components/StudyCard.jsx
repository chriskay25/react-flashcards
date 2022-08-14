import { useState } from "react";

const StudyCard = ({ card }) => {
  const [flip, setFlip] = useState(false);
  return (
    <li
      className={`study-card ${flip ? "flip" : ""}`}
      onClick={() => setFlip(!flip)}
    >
      <div className="front">
        <p style={{ padding: "10px" }}>{card.question}</p>
      </div>
      <div className="back">
        <p>{card.answer}</p>
      </div>
    </li>
  );
};

export default StudyCard;

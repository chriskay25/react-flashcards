import React, { useState } from "react";
import DeckTitle from "./DeckTitle";
import QuizSession from "./QuizSession";
import StudySession from "./StudySession";
import { useSelector } from "react-redux";

const Deck = () => {
  const [index, setIndex] = useState(0);
  const session = useSelector((state) => state.sessionReducer);

  const next = () => {
    if (index < session.cards.length - 1) {
      setIndex(index + 1);
    }
  };

  const back = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const goTo = (x) => {
    if (x > 0 && x < session.cards.length + 1) setIndex(x - 1);
  };

  return (
    <div
      style={{
        height: "calc(100% - 50px)",
        width: "100%",
        overflowY: "auto",
        marginTop: "50px",
        position: "relative",
      }}
    >
      <div className="deck-display">
        <DeckTitle session={session} />
        {session.cards.length === 0 && (
          <div
            style={{
              width: "100%",
              height: "150px",
              display: "flex",
              flexDirection: "column",
              justifyContent: "center",
              alignItems: "center",
              fontSize: "2.5rem",
            }}
          >
            <span style={{ color: "white" }}>Deck is empty</span>
          </div>
        )}
        {session.cards.length > 0 && session.mode === "quiz" && (
          <QuizSession
            session={session}
            index={index}
            back={back}
            next={next}
            goTo={goTo}
          />
        )}
        {session.mode === "study" && <StudySession cards={session.cards} />}
      </div>
    </div>
  );
};

export default Deck;

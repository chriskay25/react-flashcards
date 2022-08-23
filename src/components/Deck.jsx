import DeckHeader from "./DeckHeader";
import QuizMode from "./QuizMode";
import StudyMode from "./StudyMode";
import EditDeck from "./EditDeck";
import { useSelector } from "react-redux";

const Deck = () => {
  const deck = useSelector((state) => state.deckReducer.deck);
  const mode = useSelector((state) => state.deckReducer.mode);

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
      {deck && (
        <div className="deck-display">
          <DeckHeader deck={deck} mode={mode} />
          {deck.cards.length === 0 && (
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
          {deck.cards.length > 0 && mode === "quiz" && <QuizMode deck={deck} />}
          {mode === "study" && <StudyMode deck={deck} />}
          {mode === "edit" && <EditDeck deck={deck} />}
        </div>
      )}
    </div>
  );
};

export default Deck;

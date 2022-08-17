import { useDispatch } from "react-redux";
import { modeSelect } from "../actions/sessionActions";

const DeckTitle = ({ session }) => {
  const dispatch = useDispatch();
  const handleModeChange = (newMode) => {
    dispatch(modeSelect(newMode));
  };

  return (
    <div className="deck-title">
      <div style={{ display: "flex", alignItems: "baseline" }}>
        <h1>{session.deck.name}</h1>
        <p
          style={{
            fontFamily: "Montserrat",
            paddingLeft: "8px",
            color: "lightsalmon",
          }}
        >
          ({session.cards.length} Cards)
        </p>
      </div>
      <div style={{}}>
        {session.mode !== "quiz" && (
          <button
            onClick={() => handleModeChange("quiz")}
            className="deck-title-button"
          >
            Quiz
          </button>
        )}
        {session.mode !== "study" && (
          <button
            onClick={() => handleModeChange("study")}
            className="deck-title-button"
          >
            Study
          </button>
        )}
        {session.mode !== "edit" && (
          <button
            onClick={() => handleModeChange("edit")}
            className="deck-title-button"
          >
            Edit
          </button>
        )}
      </div>
    </div>
  );
};

export default DeckTitle;

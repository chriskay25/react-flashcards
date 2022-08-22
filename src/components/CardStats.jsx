import { useSelector } from "react-redux";

const CardStats = ({ deckLength }) => {
  const numberAnswered = useSelector(
    (state) => state.quizReducer.numberAnswered
  );
  const numberCorrect = useSelector((state) => state.quizReducer.numberCorrect);

  return (
    <div
      style={{
        position: "absolute",
        left: "1rem",
        bottom: "1rem",
        fontSize: "1.4rem",
        color: "var(--dark)",
        fontWeight: "600",
      }}
    >
      <span style={{ marginRight: "8px" }}>
        Answered:{" "}
        <span
          style={{
            fontFamily: "Bungee",
          }}
        >
          {numberAnswered}{" "}
          <span style={{ color: "var(--dark)" }}>/ {deckLength}</span>
        </span>
      </span>
      <br />
      <span style={{}}>
        Correct:{" "}
        <span
          style={{
            color: "var(--blue)",
            fontFamily: "Bungee",
          }}
        >
          {numberCorrect}
        </span>
      </span>
    </div>
  );
};

export default CardStats;

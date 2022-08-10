import { useSelector } from "react-redux";

const CardStats = () => {
  const numberAnswered = useSelector(
    (state) => state.sessionReducer.numberAnswered
  );
  const numberCorrect = useSelector(
    (state) => state.sessionReducer.numberCorrect
  );

  return (
    <div
      style={{
        position: "absolute",
        left: "1rem",
        bottom: "1rem",
        fontSize: "1rem",
      }}
    >
      <span style={{ marginRight: "5px" }}>Answered: {numberAnswered}</span>
      <span>Correct: {numberCorrect}</span>
    </div>
  );
};

export default CardStats;

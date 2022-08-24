import { useState, useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import CardContainer from "../containers/CardContainer";
import CardNav from "./CardNav";
import { startQuiz } from "../actions/quizActions";

const QuizMode = ({ deck }) => {
  const [index, setIndex] = useState(0);
  const dispatch = useDispatch();
  const quiz = useSelector((state) => state.quizReducer);

  useEffect(() => {
    dispatch(startQuiz(deck));

    return () => dispatch({ type: "CLEAR_QUIZ" });
  }, [dispatch]);

  const next = () => {
    if (index < deck.cards.length - 1) {
      setIndex(index + 1);
    }
  };

  const back = () => {
    if (index > 0) {
      setIndex(index - 1);
    }
  };

  const goTo = (x) => {
    if (x > 0 && x < deck.cards.length + 1) setIndex(x - 1);
  };

  return (
    <>
      {quiz.cards && (
        <>
          <CardContainer
            card={quiz.cards[index]}
            index={index}
            mode={"quiz"}
            deckLength={deck.cards.length}
          />

          <CardNav
            back={back}
            next={next}
            cardCount={deck.cards.length}
            goTo={goTo}
            index={index}
            id={deck.cards.length > 0 ? deck.cards[index].id : 0}
          />
        </>
      )}
    </>
  );
};

export default QuizMode;

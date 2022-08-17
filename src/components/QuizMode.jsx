import CardContainer from "../containers/CardContainer";
import CardNav from "./CardNav";

const QuizMode = ({ session, index, back, next, goTo }) => {
  return (
    <>
      <CardContainer
        card={session.cards[index]}
        index={index}
        mode={session.mode}
        deckLength={session.cards.length}
      />

      <CardNav
        back={back}
        next={next}
        cardCount={session.cards.length}
        goTo={goTo}
        index={index}
        id={session.cards.length > 0 ? session.cards[index].id : 0}
      />
    </>
  );
};

export default QuizMode;

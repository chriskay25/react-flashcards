import StudyCard from "./StudyCard";

const StudySession = ({ cards }) => {
  const view = () => {
    return cards.map((card) => <StudyCard key={card.id} card={card} />);
  };
  return <ul className="card-list">{view()}</ul>;
};

export default StudySession;

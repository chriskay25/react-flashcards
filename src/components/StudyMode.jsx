import StudyCard from "./StudyCard";

const StudyMode = ({ cards }) => {
  const view = () => {
    return cards.map((card) => <StudyCard key={card.id} card={card} />);
  };
  return <ul className="card-list study">{view()}</ul>;
};

export default StudyMode;

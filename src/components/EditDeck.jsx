import EditCard from "./EditCard";

const EditDeck = ({ cards }) => {
  const cardList = () => {
    return cards.map((card) => <EditCard key={card.id} card={card} />);
  };
  return (
    <ul className="card-list edit">
      {cardList()}
      <EditCard />
    </ul>
  );
};

export default EditDeck;

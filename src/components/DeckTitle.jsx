const DeckTitle = ({ session }) => {
  return (
    <div className="deck-title">
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
  );
};

export default DeckTitle;

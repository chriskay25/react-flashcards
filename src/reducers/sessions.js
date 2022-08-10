const updateAnsweredCard = (cards, cardId, answer) => {
  const updatedCards = cards.map((card) => {
    if (card.id !== cardId) return card;
    card.answered = true;
    card.correct = card.answer === answer ? true : false;
    return card;
  });

  return updatedCards;
};

const initialState = {
  started: false,
  finished: false,
  showHintModal: false,
  numberAnswered: 0,
  numberCorrect: 0,
};

export const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case "MODE":
      return {
        ...state,
        mode: action.payload,
      };
    case "START":
      return {
        ...state,
        started: true,
        deck: action.payload.deck,
        cards: action.payload.cards,
      };
    case "ANSWERED":
      const newCards = updateAnsweredCard(
        state.cards,
        action.payload.id,
        action.payload.answer
      );
      return {
        ...state,
        cards: newCards,
        numberAnswered: newCards.filter((c) => c.answered).length,
        numberCorrect: newCards.filter((c) => c.correct).length,
      };
    case "SHOW_HINT_MODAL":
      return {
        ...state,
        showHintModal: action.payload.open,
        hintContent: action.payload.content,
      };
    default:
      return state;
  }
};

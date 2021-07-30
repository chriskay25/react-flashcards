const updateAnsweredCard = (cards, cardId, answer) => {
    const updatedCards = cards.map(card => {
      if (card.id !== cardId) return card
      card.answered = true
      card.correct = card.answer === answer ? true : false
      return card
    })
  
    return updatedCards
}

const initialState = {
    started: false,
    finished: false,
}

export const sessionReducer = (state = initialState, action) => {
  switch (action.type) {
    case 'START':
        return {
            ...state,
            started: true,
            deck: action.payload.deck,
            cards: action.payload.cards
        };
    case 'ANSWERED':
        const newCards = updateAnsweredCard(state.cards, action.payload.id, action.payload.answer)
        return {
            ...state,
            cards: newCards
        };
    default:
      return state;
  }
}
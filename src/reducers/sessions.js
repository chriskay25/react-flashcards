const updateCardInArray = (array, cardId) => {
    const updatedCards = array.map(card => {
      if (card.id !== cardId) return card
      card.answered = true
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
        const newCards = updateCardInArray(state.cards, action.payload)
        return {
            ...state,
            cards: newCards
        };
    default:
      return state;
  }
}
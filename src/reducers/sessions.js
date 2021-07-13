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
    default:
      return state;
  }
}
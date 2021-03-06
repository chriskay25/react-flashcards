export const deckReducer = (state = {decks: [], deck: null}, action) => {
  switch (action.type) {
    case 'GET_DECK':
      return {
        ...state,
        deck: action.payload
      };
    case 'GET_DECKS':
      return {
        ...state,
        decks: [...action.payload]
      };
    default:
      return state;
  }
}
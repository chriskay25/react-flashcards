export const cardReducer = (state = {card: null}, action) => {
  switch (action.type) {
    case 'GET_CARD':
      return {
        ...state,
        card: action.payload
      };
    default:
      return state;
  }
}
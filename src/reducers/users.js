export const userReducer = (state = {currentUser: null}, action) => {
    switch (action.type) {
      case 'LOGIN':
        return {
          ...state,
          currentUser: action.payload
        }
      default:
        return state;
    }
}
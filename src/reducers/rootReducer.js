import { combineReducers } from 'redux'
import { deckReducer } from './decks'
import { cardReducer } from './cards'
import { userReducer } from './users'
export default combineReducers({
  deckReducer,
  cardReducer,
  userReducer
})
import { combineReducers } from 'redux'
import { deckReducer } from './decks'
import { cardReducer } from './cards'
import { cards } from './cards'

export default combineReducers({
  deckReducer,
  cardReducer
})
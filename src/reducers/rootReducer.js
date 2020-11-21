import { combineReducers } from 'redux'
import { deckReducer } from './decks'
import { cards } from './cards'

export default combineReducers({
  deckReducer
})
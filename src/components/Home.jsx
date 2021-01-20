import React, { Component } from 'react'
import DeckSelect from './DeckSelect'
import { getDeck, getDecks } from '../actions/deckActions'
import { connect } from 'react-redux'

class Home extends Component {

  selectedDeck = (id) => {
    this.props.getDeck(id)
  }

  render() {
    return (
      <div className='Homepage'>
        <h2>Welcome! What would you like to study?</h2>
        <DeckSelect decks={this.props.decks} selectedDeck={this.selectedDeck} />
      </div>
    )
  }

  componentDidMount() {
    this.props.getDecks()
  }
}

const mapState = (state) => ({
  deck: state.deckReducer.deck,
  decks: state.deckReducer.decks
})

export default connect(
  mapState,
  { getDeck, getDecks }
)(Home)
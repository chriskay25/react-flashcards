import React, { Component } from 'react'
import Deck from '../components/Deck'
import DeckSelect from '../components/DeckSelect'
import { getDecks } from '../actions/decks'
import { connect } from 'react-redux'

class DeckContainer extends Component {

  displayDecks = () => {
    return (
      this.props.decks.map(deck => {
        return <Deck key={deck.id} name={deck.attributes.name} cards={deck.attributes.cards} />
      })
    )
  }

  render() {
    console.log("Apropos: ", this.props)
    const { decks, deck } = this.props
    const chosenDeck = deck ? <Deck name={deck.name} cards={deck.attributes.cards} /> : (
      <div className="DeckContainer">
        <DeckSelect decks={decks} />
      </div>
    )
    return (
      chosenDeck
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
  { getDecks }
)(DeckContainer)
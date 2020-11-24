import React, { Component } from 'react'
import Deck from '../components/Deck'
import DeckSelect from '../components/DeckSelect'
import { getDeck, getDecks } from '../actions/decks'
import { connect } from 'react-redux'

class DeckContainer extends Component {

  displayDecks = () => {
    return (
      this.props.decks.map(deck => {
        return <Deck key={deck.id} name={deck.attributes.name} cards={deck.attributes.cards} />
      })
    )
  }

  singleDeck = (id) => {
    console.log("Did it make it")
    this.props.getDeck(id)
  }

  render() {
    const { deck, decks } = this.props

    if (deck) {
      return (<Deck name={deck.attributes.name} cards={deck.attributes.cards} />)
    }
    else {
      return (<DeckSelect decks={decks} singleDeck={this.singleDeck} />)
    }
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
)(DeckContainer)
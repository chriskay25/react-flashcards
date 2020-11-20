import React, { Component } from 'react'
import Deck from '../components/Deck'
import DeckSelect from '../components/DeckSelect'
import { getDeck } from '../actions/decks'

class DeckContainer extends Component {
  state = {
    singleDeck: null,
    decks: []
  }

  displayDecks = () => {
    return (
      this.state.decks.map(deck => {
        return <Deck key={deck.id} name={deck.attributes.name} cards={deck.attributes.cards} />
      })
    )
  }

  render() {
    console.log(this.state)
    const { decks, singleDeck } = this.state
    const chosenDeck = singleDeck ? <Deck name={singleDeck.name} cards={singleDeck.attributes.cards} /> : (
      <div className="DeckContainer">
        <DeckSelect decks={decks} fetchDeck={this.fetchDeck}/>
        {/* {this.displayDecks()} */}
      </div>
    )
    return (
      chosenDeck
    )
  }

  const mapStateToProps = (state) => {
    
  }
}

export default DeckContainer
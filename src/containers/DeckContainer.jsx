import React, { Component } from 'react'
import Deck from '../components/Deck'
import DeckSelect from '../components/DeckSelect'

class DeckContainer extends Component {
  state = {
    singleDeck: null,
    decks: []
  }

  fetchDecks = () => {
    fetch('http://localhost:3000/api/v1/collections')
      .then(resp => resp.json())
      .then(decks => decks.data.forEach(deck => {
        this.setState({
          decks: this.state.decks.concat(deck)
        })
      }));
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
    const { decks } = this.state
    return (
      <div className="DeckContainer">
        <DeckSelect decks={decks} />
        {/* {this.displayDecks()} */}
      </div>
    )
  }

  componentDidMount() {
    this.fetchDecks()
  }
}

export default DeckContainer
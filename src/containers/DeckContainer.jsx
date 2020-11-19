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

  fetchDeck = (id) => {
    fetch(`http://localhost:3000/api/v1/collections/` + id)
      .then(resp => resp.json())
      .then(deck => this.setState({
        singleDeck: deck.data
      }))
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

  componentDidMount() {
    this.fetchDecks()
  }
}

export default DeckContainer
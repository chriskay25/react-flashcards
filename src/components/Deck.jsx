import React, { Component } from 'react';
import CardContainer from '../containers/CardContainer'
import { getDeck } from '../actions/deckActions'
import { connect } from 'react-redux'
import { motion } from 'framer-motion'

const buttonVariants = {
  hidden: {
    opacity: 0,
    x: '100vw'
  },
  visible: {
    x: 0,
    opacity: 1,
    transition: {
      delay: .3,
      type: 'spring'
    }
  },
  whileHover: {
    scale: .9,
  }
}

class Deck extends Component {
  constructor(props) {
    super(props)
    this.state = {
      mode: '',
    }
  }

  handleClick = (e) => {
    e.preventDefault()
    this.setState({
      mode: e.target.innerHTML
    })
  }

  render() {
    const { mode } = this.state
    const { deck } = this.props
    return (
      <div className="deck-display">
        {deck && <div className='deck-title'>
          <h2>{deck.attributes.name}</h2>
          <p>- {deck.attributes.cards.length} Cards</p>
          
        </div>}

        {!mode && <span className='mode-select'>
          <motion.button onClick={this.handleClick} variants={buttonVariants} initial='hidden' animate='visible' whileHover='whileHover' whileTap='whileTap'>Study</motion.button> 
          <motion.button onClick={this.handleClick} variants={buttonVariants} initial='hidden' animate='visible' whileHover='whileHover'>Quiz</motion.button> 
        </span>}

        {mode && <CardContainer cards={deck.attributes.cards} mode={mode} />}
      </div>
    )
  }
  componentDidMount() {
    const id = this.props.match.params.id
    this.props.getDeck(id)
  }
}

const mapState = (state) => ({
  deck: state.deckReducer.deck
})

export default connect(
  mapState, { getDeck }
)(Deck)
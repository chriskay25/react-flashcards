import React, { Component } from 'react'
import { connect } from 'react-redux'
import { motion } from 'framer-motion'
import DeckOption from './DeckOption'
import { getDecks } from '../actions/deckActions'

const containerVariants = {
    hidden: {
        opacity: 0,
        scale: 0
    },
    visible: {
        opacity: 1,
        scale: 1,
        transition: {
            when: 'beforeChildren',
            staggerChildren: .3
        }
    },
    exit: {
        transition: {
            x: '-100vw',
            when: 'afterChildren',
        }
    }
}

class Decks extends Component {

    componentDidMount() {
        this.props.getDecks()
    }

    populate = () => {
        return this.props.decks.map((deck, idx) => {
            return <DeckOption key={deck.id} deckId={deck.id} index={idx + 1} deckName={deck.attributes.name} />
        })
    }

    render() {
        return (
            <motion.div className='decks-motion'
                variants={containerVariants} 
                initial='hidden' 
                animate='visible'
                exit='exit'
            >
                {this.populate()}
            </motion.div>
        )
    }
}

const mapState = (state) => ({
    decks: state.deckReducer.decks
})
  
  export default connect(
    mapState,
    { getDecks }
  )(Decks)
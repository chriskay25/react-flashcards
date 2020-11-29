import React, { Component } from 'react'
import Card from '../components/Card'
import { getCard } from '../actions/cardActions'
import { connect } from 'react-redux'

class CardContainer extends Component {

  singleCard = (id) => {
    this.props.getCard(id)
  }

  render() {
    const { card } = this.props
    console.log("In CardContainer, card = ", card)
    return (
      <Card />
    )
  }
}

const mapState = (state) => ({
  card: state.cardReducer.card
})

export default connect(
  mapState,
  { getCard }
)(CardContainer)
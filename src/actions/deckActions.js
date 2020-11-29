export const getDeck = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/collections/${id}`)
      .then(resp => resp.json())
      .then(deck => {
        dispatch({
          type: 'GET_DECK',
          payload: deck.data
        })
      })
  }
}

export const getDecks = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/collections')
      .then(resp => resp.json())
      .then(decks => {
        dispatch({
          type: 'GET_DECKS',
          payload: decks.data
        })
      })
  }
}
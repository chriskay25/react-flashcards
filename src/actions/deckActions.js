export const getDeck = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/decks/${id}`)
      .then(resp => resp.json())
      .then(deck => {
        dispatch({
          type: 'GET_DECK',
          payload: deck
        })
      })
  }
}

export const getDecks = () => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/decks')
      .then(resp => resp.json())
      .then(decks => {
        console.log("getDecks action: ", decks)
        dispatch({
          type: 'GET_DECKS',
          payload: decks
        })
      })
  }
}
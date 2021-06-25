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
        dispatch({
          type: 'GET_DECKS',
          payload: decks
        })
      })
  }
}

export const addDeck = (data) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/decks', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        deck: data
      })
    })
      .then(resp => resp.json())
      .then(deckData => {
        console.log('cardData: ', deckData)
        if (deckData.error) {
            alert('Invalid Credentials')
        } else {
            dispatch({
                type: 'ADD_CARD',
                payload: deckData
            })
        }
      })
  }
}
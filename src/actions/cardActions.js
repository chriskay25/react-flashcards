export const getCard = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/cards/${id}`)
      .then(resp => resp.json())
      .then(card => {
        dispatch({
          type: 'GET_CARD',
          payload: card.data
        })
      })
  }
}

export const addCard = (data) => {
  return (dispatch) => {
    fetch('http://localhost:3000/api/v1/cards', {
      headers: {
        'Content-Type': 'application/json'
      },
      method: 'POST',
      body: JSON.stringify({
        card: data
      })
    })
      .then(resp => resp.json())
      .then(cardData => {
        console.log('cardData: ', cardData)
        if (cardData.error) {
            alert('Invalid Credentials')
        } else {
            dispatch({
                type: 'ADD_CARD',
                payload: cardData
            })
        }
      })
  }
}

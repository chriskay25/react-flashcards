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

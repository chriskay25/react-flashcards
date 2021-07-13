export const startSession = (deck) => {
    return (dispatch) => {

        let cards = deck.cards.map(card => {
            return Object.assign({}, card, {
              answered: false,
              correct: null
            })
        })

        const deckObject = {
            deck: {
              id: deck.id,
              name: deck.name
            },
            cards: cards
        }

        dispatch({
            type: 'START',
            payload: deckObject
        })
    }
}

export const questionAnswered = (id) => {
    return (dispatch) => {
        dispatch({
            type: 'ANSWERED',
            payload: id
        })
    }
}
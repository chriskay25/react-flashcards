export const modeSelect = (mode) => {
  return (dispatch) => {
    dispatch({
      type: "MODE",
      payload: mode,
    });
  };
};

export const startSession = (deck) => {
  return (dispatch) => {
    let cards = deck.cards.map((card) => {
      return Object.assign({}, card, {
        answered: false,
        correct: null,
      });
    });

    const deckObject = {
      deck: {
        id: deck.id,
        name: deck.name,
      },
      cards: cards,
    };

    dispatch({
      type: "START",
      payload: deckObject,
    });
  };
};

export const questionAnswered = (payload) => {
  return (dispatch) => {
    dispatch({
      type: "ANSWERED",
      payload: payload,
    });
  };
};

export const triggerHintModal = (payload) => {
  return (dispatch) => {
    dispatch({
      type: "SHOW_HINT_MODAL",
      payload: payload,
    });
  };
};

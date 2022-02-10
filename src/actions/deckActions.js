export const getDeck = (id) => {
  return (dispatch) => {
    fetch(`http://localhost:3000/api/v1/decks/${id}`)
      .then((resp) => resp.json())
      .then((deck) => {
        dispatch({
          type: "GET_DECK",
          payload: deck,
        });
      });
  };
};

export const getDecks = () => {
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/decks")
      .then((resp) => resp.json())
      .then((decks) => {
        dispatch({
          type: "GET_DECKS",
          payload: decks,
        });
      });
  };
};

export const addDeck = (data) => {
  const token = localStorage.getItem("token");
  // debugger;
  return (dispatch) => {
    fetch("http://localhost:3000/api/v1/decks", {
      headers: {
        Authorization: token,
        "Content-Type": "application/json",
      },
      method: "POST",
      body: JSON.stringify({
        name: data,
      }),
    })
      .then((resp) => resp.json())
      .then((deckData) => {
        debugger;
        console.log("deckData: ", deckData);
        if (deckData.error) {
          alert(deckData.error);
        } else {
          dispatch({
            type: "ADD_DECK",
            payload: deckData,
          });
        }
      });
  };
};

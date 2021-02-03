export const userLogin = (data) => {
    return (dispatch) => {
        fetch('http://localhost:3000/api/v1/login', {
            headers: {
                'Content-Type': 'application/json'
            },
            method: 'POST',
            body: JSON.stringify({
                user: data
            })
        })
            .then(resp => resp.json())
            .then(userData => {
                console.log("userData response: ", userData)
                if (userData.error) {
                    alert('Invalid Credentials')
                } else {
                    localStorage.setItem('token', userData.jwt)
                    dispatch({
                        type: 'LOGIN',
                        payload: userData.user
                    })
                }

            })
    }
}

export const userLogout = () => {
    localStorage.clear()
    return (dispatch) => {
      dispatch({
        type: 'LOGOUT',
        payload: null 
      })
    }
}

export const getCurrentUser = () => {
    const token = localStorage.getItem('token')
    if (token) {
      return (dispatch) => {
        fetch('http://localhost:3000/api/v1/auth', {
          headers: {
            'Authorization': token,
          }
        })
          .then(resp => resp.json())
          .then(user => {
              console.log('GET_C_U action - w/token - user payload: ', user)
            if (user.error) {
              alert(user.error)
            } else {
              dispatch({type: 'GET_CURRENT_USER', payload: user})
            }
          })
      }
    } else {
        console.log('GET_C_U action - no token found :(')
      return (dispatch) => {
        dispatch({type: 'GET_CURRENT_USER', payload: null})
      }
    }
  }
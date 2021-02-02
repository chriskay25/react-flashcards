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
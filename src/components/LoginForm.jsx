import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { userLogin } from '../actions/userActions'

const LoginForm = () => {
    const [username, setUsername] = useState('')
    const [password, setPassword] = useState('')
    const dispatch = useDispatch()

    const handleUsernameChange = (e) => {
        setUsername(e.target.value)
    }

    const handlePasswordChange = (e) => {
        setPassword(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault()
        dispatch(userLogin({ username, password }))
    }

    return (
        <div>
            <form className='auth-form' onSubmit={handleSubmit}>
                <h2>LOGIN</h2>
                <label htmlFor='username'>Username: </label>
                <input type='text' name='username' value={username} placeholder='Username' onChange={handleUsernameChange} />
                    <br />
                <label htmlFor='password'>Password: </label>
                <input type='text' name='password' value={password} placeholder='Password' onChange={handlePasswordChange} />
                    <br />
                <input className='form-button' type='submit' value='Submit' />
            </form>
        </div>
    )
}

export default LoginForm
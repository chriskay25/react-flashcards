import React, { Component } from 'react'
import { connect } from 'react-redux'
import { userLogin } from '../actions/userActions'

class LoginForm extends Component {
    state = {
        username: '',
        password: ''
    }

    handleChange = (e) => {
        this.setState({
            [e.target.name]: e.target.value
        })
    }

    handleSubmit = (e) => {
        e.preventDefault()
        this.props.userLogin(this.state)
        this.setState({
            username: '',
            password: ''
        })
    }

    render() {
        const { username, password } = this.state
        return (
            <div>
                <form className='auth-form' onSubmit={this.handleSubmit}>
                    <label htmlFor='username'>Username: </label>
                    <input type='text' name='username' value={username} placeholder='Username' onChange={this.handleChange} />
                        <br />
                    <label htmlFor='password'>Password: </label>
                    <input type='text' name='password' value={password} placeholder='Password' onChange={this.handleChange} />
                        <br />
                    <input type='submit' value='Login' />
                </form>
            </div>
        )
    }
}

export default connect(
    null, { userLogin }
)(LoginForm)
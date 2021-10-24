import React, { useContext } from 'react'
import Button from '../Components/UI/Button/Button'
import Input from '../Components/UI/Input/Input'
import { AuthContext } from '../context/context'

const Login = () => {
const {isAuth, setIsAuth} = useContext(AuthContext)
const login = event => {
event.preventDefault()
setIsAuth(true)
localStorage.setItem('auth', 'true')
}

    return (
        <div>
            <h1>You must log in</h1>
            <form onSubmit={login}>
                <Input type='text' placeholder='Your login'></Input>
                <Input type='password' placeholder='Your password'></Input>
                <Button>Log in</Button>
            </form>
        </div>
    )
}

export default Login

import React, { useContext } from 'react'
import { Link } from 'react-router-dom'
import { AuthContext } from '../../../context/context'
import Button from '../Button/Button'

const Navbar = () => {
    const {isAuth, setIsAuth} = useContext(AuthContext)
    return (
        <div className='navbar'>
            <Button onClick={() => setIsAuth(false)}>
                Log out
            </Button>
            <div className='navbar__links'>
                <Link to='/about'>About</Link>
                <Link to='/posts'>Posts</Link>
            </div>
        </div>
    )
}

export default Navbar

import React from 'react'
import { Link } from 'react-router-dom'

const Navbar = () => {
    return (
        <div className='mx-auto p-4 bg-gradient-to-r from-violet-600 via-purple-800 to-fuchsia-950 text-white'>
            <ul>
                <li>
                    <Link to='/'>Home</Link>
                </li>
            </ul>
        </div>
    )
}

export default Navbar
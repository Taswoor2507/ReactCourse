import React from 'react'
import './header.css'
const Header = () => {
  return (
    <div className='bg-red-300 p-3 flex justify-between'>
        <div className='logo'>Logo</div>
        <ul className='flex gap-3'>
            <li>Home</li>
            <li>About</li>
            <li>Contact</li>
        </ul>
    </div>
  )
}

export default Header
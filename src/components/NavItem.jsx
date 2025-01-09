import React from 'react'
import { Link } from 'react-router-dom'

function NavItem({ nav, path }) {
    return (
        <div className='group'>
            <Link className='  h-full text-[14px]  poppins flex items-center hover:transition' to={path}>{nav}</Link>
            <div className=' h-[2px] w-0 invisible bg-white group-hover:visible group-hover:w-full group-hover:transition-all duration-300'>

            </div>
        </div>
    )
}

export default NavItem
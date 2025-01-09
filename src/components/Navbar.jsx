import React, { useState } from 'react'
import Logo from '../images/accelor-nobg11.png'
import '../App.css';
import { Link, useLocation } from 'react-router-dom';
import NavItem from './NavItem';
import { AnimatePresence, motion } from 'framer-motion'
import { IoChevronDown, IoCloseCircle, IoReorderThree } from "react-icons/io5";

function Navbar() {
    const [isMenu, setIsMenu] = useState(false);
    const location = useLocation();
    let bgColor;
    let nav_absolute = '';

    if (location.pathname === '/' || location.pathname === '/careers') {
        bgColor = 'bg-none';
        nav_absolute = 'absolute z-[999]'
    }
    else
        bgColor = 'bg-[#425472]'


    const closeMenu = () => {
        setIsMenu(false);
        document.body.style.overflow = 'visible'
    }

    return (

        <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
            className={`flex  justify-between  px-5 w-[100%] h-[65px] ${bgColor} ${nav_absolute} text-white items-center `}>

            <div className=''>
                <img className=' max-sm:w-[150px]' src={Logo} width={200} alt='logo' />
            </div>
            <div className=' invisble'>
                <button className='invisible max-sm:visible'><IoReorderThree size={30} onClick={() => { setIsMenu(true); document.body.style.overflow = 'hidden' }} /></button>
            </div>

            <AnimatePresence>
                {
                    isMenu ?

                        <motion.div initial={{ x: 1000 }} animate={{ x: 0 }} exit={{ x: 1000 }} className='h-[100vh] z-50 p-0 top-0 left-0 overflow-hidden flex flex-col gap-4 items-center justify-center absolute w-full bg-black max-sm:visible'>
                            <button onClick={closeMenu}><IoCloseCircle size={30} /></button>
                            {/* <Link nav='Home' path='/' setIsMenu={setIsMenu} /> */}
                            <Link to='/' onClick={closeMenu}>Home</Link>
                            <Link to='/about-us' onClick={closeMenu}>About</Link>

                            {/* <div className=' group relative'>

                                <Link className='  h-full flex poppins items-center hover:transition'>About <span><IoChevronDown size={15} /></span></Link>

                                <div className=' z-50 absolute invisible group-hover:visible border shadow1 bg-white text-[0.9rem] text-black  w-[400%]  group-hover:transition-all flex flex-col  font-semibold'>
                                    <Link onClick={closeMenu} to='/about-us' className='border-t p-1  hover:bg-gray-200 '>About us</Link>
                                    <Link onClick={closeMenu} to='/team' className='border-t p-1  hover:bg-gray-200 '>Our team</Link>
                                    <Link onClick={closeMenu} to='/mission-vision' className='border-t p-1  hover:bg-gray-200 '>Mission, Vision & Values</Link>
                                </div>
                            </div> */}
                            {/* <NavItem setIsMenu={setIsMenu} nav='Careers' path='/careers' /> */}
                            {/* <Link to='/careers' onClick={closeMenu}>Careers</Link> */}

                            <div className=' group relative'>

                                <Link className='  h-full flex  poppins items-center hover:transition'>Infrastructure<span><IoChevronDown size={15} /></span></Link>

                                <div className='z-[40] absolute invisible group-hover:visible border shadow1 bg-white text-[0.9rem] text-black  w-[200%] group-hover:transition-all flex flex-col font-semibold'>
                                    <Link onClick={closeMenu} to='/infrastructure/rnd' className='border-t p-1  hover:bg-gray-200 '>Research & Development</Link>
                                    <Link onClick={closeMenu} to='/infrastructure/ess' className='border-t p-1  hover:bg-gray-200 '>Environmental Testing</Link>
                                    <Link onClick={closeMenu} to='/infrastructure/production' className='border-t p-1  hover:bg-gray-200 '>Electronics Manufacturing</Link>
                                    <Link onClick={closeMenu} to='/infrastructure/mechanical' className='border-t p-1  hover:bg-gray-200 '>Mechanical Integration</Link>
                                    <Link onClick={closeMenu} to='/infrastructure/qa' className='border-t p-1  hover:bg-gray-200 '>Quality Assurance</Link>

                                </div>
                            </div>

                            <Link to='/Products' onClick={closeMenu}>Products</Link>
                            <Link to='/careers' onClick={closeMenu}>Careers</Link>

                            <Link to='/contact' onClick={closeMenu}>Contact</Link>



                        </motion.div>
                        :
                        ''

                }
            </AnimatePresence>


            <div className='flex gap-11 items-center h-full max-sm:hidden   '>
                <NavItem nav='Home' path='/' />
                {/* <NavItem nav='Home2' path='/2' />
                <NavItem nav='Home3' path='/3' /> */}
                {/* <NavItem nav='About' path='/about' /> */}

                {/* <Link to='/about-us' className='  h-full text-[14px] flex poppins items-center hover:transition'>About</Link> */}
                <NavItem nav='About' path='/about-us' />
                {/* <div className=' group relative'> */}


                {/* <div className=' z-50 absolute invisible group-hover:visible border shadow1 bg-white text-[13px] text-black  w-[400%] group-hover:transition-all flex flex-col  font-semibold'> */}
                {/* <Link to='/about-us' className='border-t p-1  hover:bg-gray-200 '>About us</Link> */}
                {/* <Link to='/history' className='border-t p-1  hover:bg-gray-200 '>History</Link> */}
                {/* <Link to='/team' className='border-t p-1  hover:bg-gray-200 '>Our team</Link> */}
                {/* <Link to='/mission-vision' className='border-t p-1  hover:bg-gray-200 '>Mission, Vision & Values</Link> */}
                {/* <Link to='/production' className='border-t p-1  hover:bg-gray-200 '>Electronics Manufacturing</Link>
                        <Link to='/mechanical' className='border-t p-1  hover:bg-gray-200 '>Mechanical Integration</Link> */}
                {/* </div> */}
                {/* </div> */}


                <div className=' group relative'>

                    <Link to='/infrastructure' className='  h-full text-[14px] flex  poppins items-center hover:transition'>Infrastructure<span><IoChevronDown size={15} /></span></Link>

                    <div className=' z-50 absolute invisible group-hover:visible border shadow1 bg-white text-[13px] text-black  w-[200%] group-hover:transition-all flex flex-col font-semibold'>
                        <Link to='/infrastructure/rnd' className='border-t p-1  hover:bg-gray-200 '>Research & Development</Link>
                        <Link to='/infrastructure/ess' className='border-t p-1  hover:bg-gray-200 '>Environmental Testing</Link>
                        <Link to='/infrastructure/production' className='border-t p-1  hover:bg-gray-200 '>Electronics Manufacturing</Link>
                        <Link to='/infrastructure/mechanical' className='border-t p-1  hover:bg-gray-200 '>Mechanical Integration</Link>
                        <Link to='/infrastructure/qa' className='border-t p-1  hover:bg-gray-200 '>Quality Assurance</Link>

                    </div>
                </div>

                <NavItem nav='Products' path='/Products' />
                <NavItem nav='Careers' path='/careers' />

                <NavItem nav='Contact' path='/contact' />
                {/* <Link to="/contact" className=' text-[0.8rem]  px-4 archivo uppercase text-white   py-2   hover:transition '><span>Contact Us</span></Link> */}

            </div>


        </motion.div>
    )
}

export default Navbar
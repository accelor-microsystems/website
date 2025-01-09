import React from 'react'
import Logo from '../images/accelor-nobg11.png'
import { IoLocation, IoMail, IoCall } from "react-icons/io5";
import { Link, useLocation } from 'react-router-dom';
function Footer() {
    const location = useLocation()
    let bgColor;
    if (location.pathname === '/infrastructure/ess') {
        bgColor = 'bg-gray-200'
    }
    else if (location.pathname === '/') {
        bgColor = 'bg-gray-200'
    }

    else {
        bgColor = 'bg-gray-100'
    }
    return (
        <div className=''>
            {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="#000"><path d="M0 0v100S0 4 500 4s500 96 500 96V0H0Z"></path></svg> */}

            {location.pathname === '/Products' ? '' :
                <svg className={`relative top-0 rotate-180 ${bgColor}`} xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="#425472"><path d="M0 0v100c166.7 0 166.7-66 333.3-66S500 77 666.7 77 833.3 28 1000 28V0H0Z" opacity=".5"></path><path d="M0 0v100c166.7 0 166.7-66 333.3-66S500 70 666.7 70 833.3 16 1000 16V0H0Z" opacity=".5"></path><path d="M0 0v100c166.7 0 166.7-66 333.3-66S500 63 666.7 63 833.3 4 1000 4V0H0Z"></path></svg>
            }
            {/* <svg className=' rotate-180 bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="#425472"><path d="M1000 100C500 100 500 64 0 64V0h1000v100Z" opacity=".5"></path><path d="M1000 100C500 100 500 34 0 34V0h1000v100Z" opacity=".5"></path><path d="M1000 100C500 100 500 4 0 4V0h1000v100Z"></path></svg> */}
            {/* <svg className=' rotate-180 bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="#425472"><path d="M0 0v99.7C62 69 122.4 48.7 205 66c83.8 17.6 160.5 20.4 240-12 54-22 110-26 173-10a392.2 392.2 0 0 0 222-5c55-17 110.3-36.9 160-27.2V0H0Z" opacity=".5"></path><path d="M0 0v74.7C62 44 122.4 28.7 205 46c83.8 17.6 160.5 25.4 240-7 54-22 110-21 173-5 76.5 19.4 146.5 23.3 222 0 55-17 110.3-31.9 160-22.2V0H0Z"></path></svg> */}
            {/* <svg className=' rotate-180 bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="#425472"><path d="M0 1v99c134.3 0 153.7-99 296-99H0Z" opacity=".5"></path><path d="M1000 4v86C833.3 90 833.3 3.6 666.7 3.6S500 90 333.3 90 166.7 4 0 4h1000Z" opacity=".5"></path><path d="M617 1v86C372 119 384 1 196 1h421Z" opacity=".5"></path><path d="M1000 0H0v52C62.5 28 125 4 250 4c250 0 250 96 500 96 125 0 187.5-24 250-48V0Z"></path></svg> */}
            {/* <svg width="1920" height="1080" viewBox="0 0 1920 1080" xmlns="http://www.w3.org/2000/svg"><path d="M1920,1080C1601,1093.8333333333333,275.1666666666667,1095.1666666666667,0,1080C-275.1666666666667,1064.8333333333333,178.33333333333331,989.6666666666666,269,989C359.6666666666667,988.3333333333334,452.6666666666667,1073.3333333333333,544,1076C635.3333333333334,1078.6666666666667,727.1666666666666,1013,817,1005C906.8333333333334,997,992.3333333333334,1031.3333333333333,1083,1028C1173.6666666666667,1024.6666666666667,1267.3333333333333,980,1361,985C1454.6666666666667,990,1552.8333333333333,1056,1645,1058C1737.1666666666667,1060,1868.1666666666667,993.3333333333334,1914,997C1959.8333333333333,1000.6666666666666,2239,1066.1666666666667,1920,1080C1601,1093.8333333333333,275.1666666666667,1095.1666666666667,0,1080" fill="#425472" /></svg> */}
            <div className='bg-[#425472] h-[auto]  px-[10%] py-7 max-sm:px-4 flex items-center justify-center  text-white'>

                <div className='flex max-sm:flex-col flex-wrap w-full items-center justify-between gap-10'>
                    <img className='' src={Logo} alt='logo' height='250' width='250' />
                    {/* <h1 className='poppins text-[3rem] font-bold'>ACCELOR<br /></h1> */}
                    <div className='max-sm:text-[14px] flex gap-10 max-sm:flex max-sm:gap-8'>
                        <div className='flex flex-col'>

                            <Link to='/'>Home</Link>
                            <Link to='/about-us'>About</Link>
                            <Link to='infrastructure'>Infrastructure</Link>
                        </div>
                        <div className='flex flex-col'>

                            <Link to='Products'>Products</Link>
                            <Link to='careers'>Careers</Link>
                            <Link to='contact'>Contact</Link>
                        </div>
                    </div>

                    <div className='flex flex-col max-sm:text-[14px] gap-4 items-start'>
                        <h1 className='font-bold uppercase'>Contact us</h1>
                        <div className='flex gap-2'>
                            <span><IoLocation size={25} color='white' /></span>
                            <p>
                                F451, Phase-8B, Industrial Focal Point, <br />SAS Nagar, Mohali, Punjab-160055
                            </p>
                        </div>

                        <div className='flex gap-2'>
                            <span><IoMail size={25} color='white' /></span>
                            <p>
                                contact@accelorindia.com
                            </p>
                        </div>

                        <div className='flex gap-2'>
                            <span><IoCall size={25} color='white' /></span>
                            <p className='text-left'>+91 7080229840/41</p>
                            <p className='text-left'>+91 7080229843 (AMETL)</p>
                        </div>
                    </div>
                </div>

                {/* <div>
                <h1 className='font-bold'>Accelor Microsystems Private Limited</h1>
                
                </div> */}

            </div>
        </div>
    )
}

export default Footer
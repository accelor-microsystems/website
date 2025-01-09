import React from 'react'
import '../App.css'
import { motion } from "framer-motion"
import HomeBG from '../images/home-bg.jpg'
import BGVideo from '../images/bg-video.mp4'
import Slider from '../components/Slider'
import Card from '../components/Card'
import BackgroundVid from '../components/BackgroundVid'
import { IoMove } from 'react-icons/io5'
import MDImg from '../images/md.jpg'
import RanjitSinghImg from '../images/ranjitsingh.png'
import SalilDeyImg from '../images/salildey2.png'
import TransitionPage from '../TransitionPage'
import TextAnim from '../components/TextAnim'
import ViewElement from '../components/ViewElement'
import DRDO from '../images/drdo1.png'
import CSIR from '../images/csir.png'
import BDL from '../images/bdl.png'
import adani from '../images/adani.png'
import solar from '../images/solar.png'
import BGC from '../images/bgc3.jpg'
import hardware from '../images/hardware.png'
import AnimatedElement from '../components/AnimatedElement'
import SVGRND from '../components/SVG/SVG-RND'
import RevealText from '../components/TextReveal2'
import ParticlesComponent from '../components/Particles'
import MissionImg from '../images/leadership.png'
import VisionImg from '../images/vision.png'
import NumberCounter from '../components/NumberCount'

import IPC from '../images/Mechanical/ipc.jpg'
import ISO from '../images/Mechanical/iso.jpg'
import MSME from '../images/Mechanical/msme.png'
import AS9100 from '../images/Mechanical/as9100.png'
import ACC from '../images/unnamed.png'
import StrengthBG from '../components/SVG/StrengthBG'
import Values2 from '../components/About/Values2'
import BG2 from '../components/SVG/BG2'
// import NumberCounter from '../components/NumberCount'

function Home() {
    return (
        <>
            <TransitionPage>
                <div className=' h-auto relative text-white bg-gray-300'>
                    {/* <ParticlesComponent /> */}
                    <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}>
                        {/* <BackgroundVid /> */}
                        {/* <div className=' h-[90vh] flex flex-col items-center justify-between'>
                            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className='uppercase text-white font-oswald text-left font-extrabold text-[4.5rem]'>Electronics Redefined</motion.h1>
                            <motion.h1 initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 1 }} className='uppercase text-white font-oswald text-left font-extrabold text-[4.5rem]'>Solutions Simplified</motion.h1>
                        </div> */}

                        <div className='bg-none'>
                            <div className='  relative overflow-hidden contain-content h-[100vh]'>
                                <div className='z-[95] relative'>
                                    <ParticlesComponent />
                                </div>
                                <div className='w-full h-full'>
                                    <BG2 />
                                </div>


                                <div className='flex items-center w-full  z-[99] absolute top-0  justify-center p-5 h-full '>
                                    <svg className='svg-text w-full h-full'  >
                                        <text className='max-sm:text-[1.5rem]  text-[60px]' x="50%" y="50%" dy=".35em" text-anchor="middle">

                                            Accelor
                                            Microsystems
                                        </text>
                                    </svg>

                                    {/* <h1 className='text-[4rem] max-sm:text-[16px] font-semibold  text-gray-200 text-left uppercase'>Accelor Microsystems</h1> */}
                                    {/* <a target="_blank" href="http://codepen.io/Moslim/" class="white-mode">OTHER PENS</a> */}
                                </div>
                            </div>

                            <div className='  overflow-hidden bg-gray-200 relative flex items-center justify-center max-sm:flex-col  max-sm:p-[0] py-[70px] px-[12%]'>

                                <SVGRND />
                                <div className='absolute top-0 w-full h-full'>

                                    <svg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio="none" width='100%' height='100%' viewBox='0 0 2 1'><rect fill='#c2c2c2' width='2' height='1' /><defs><linearGradient id='a' gradientUnits='userSpaceOnUse' x1='0' x2='0' y1='0' y2='1'><stop offset='0' stop-color='#D2D2D2' /><stop offset='1' stop-color='#DEDEDE' /></linearGradient><linearGradient id='b' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='0' y2='1'><stop offset='0' stop-color='#E8E8E8' stop-opacity='0' /><stop offset='1' stop-color='#E8E8E8' stop-opacity='1' /></linearGradient><linearGradient id='c' gradientUnits='userSpaceOnUse' x1='0' y1='0' x2='2' y2='2'><stop offset='0' stop-color='#E8E8E8' stop-opacity='0' /><stop offset='1' stop-color='#E8E8E8' stop-opacity='1' /></linearGradient></defs><rect x='0' y='0' fill='url(#a)' width='2' height='1' /><g fill-opacity='0.5'><polygon fill='url(#b)' points='0 1 0 0 2 0' /><polygon fill='url(#c)' points='2 1 2 0 0 0' /></g></svg>
                                </div>
                                <div className=' relative flex flex-[2]   flex-col leading-relaxed items-center justify-center  p-5 h-full '>
                                    <AnimatedElement direction='from-left'>

                                        <h1 className='text-[2.3rem] max-sm:text-[24px]  font-semibold text-[#45484C] text-left'> We have expertise in </h1>
                                        <div className='animation bg-gradient-to-r from-pink-900 to-purple-900  w-fit'>
                                            <span className='text-gray-300   font-extrabold'>
                                                Hardware designing<br />
                                                Software Development<br />
                                                Mechanical Designing<br />
                                                AI & Machine Learning<br />
                                            </span>
                                        </div>
                                        <h1 className='text-[2.3rem] max-sm:text-[24px] max-sm font-semibold text-[#45484C] text-left'>with inhouse <span className='uppercase font-extrabold'>R&D</span> and state of the art <span className='uppercase font-extrabold'>manufacturing facility <span className='font-medium  lowercase'>for</span> prototype <span className='font-medium lowercase'>to</span> mass production</span></h1>
                                    </AnimatedElement>
                                </div>
                                <div className='flex-1 relative'>

                                    <AnimatedElement direction='from-right'>
                                        <img className=' ' width={400} src={hardware} />
                                    </AnimatedElement>
                                </div>
                            </div>
                        </div>


                        {/* <div className=' bg-white p-10 max-sm:p-0 max-sm:py-5 '>
                            <AnimatedElement direction='from-down'>
                                <RevealText text='Meet our leadership' css='text-[3rem] max-sm:text-[26px] text-[#45484C] uppercase font-bold' />

                                <div className='flex items-center justify-center flex-wrap max-sm:px-10  gap-10 mt-10'>
                                    <Card image={MDImg} alt='director' designation="Managing Director" name="Mr. Mukhwinder Singh" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolorem atque nulla id accusamus provident quas nobis illum quidem hic." />
                                    <Card image='' designation="Director & CEO" name="Dr. Manvjeet Kaur (PhD)" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolorem atque nulla id accusamus provident quas nobis illum quidem hic." />
                                    <Card image={SalilDeyImg} designation="COO" name="Dr. Salil Dey (PhD)" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolorem atque nulla id accusamus provident quas nobis illum quidem hic." />
                                    <Card image={RanjitSinghImg} designation="Head Mechanical and CQO" name="Dr. Ranjit Singh (PhD)" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolorem atque nulla id accusamus provident quas nobis illum quidem hic." />
                                    <Card image='' designation="Head Mechanical" name="Dr. Prince Pal Singh (PhD)" content="Lorem ipsum dolor sit amet consectetur adipisicing elit. Officia dolorem atque nulla id accusamus provident quas nobis illum quidem hic." />

                                </div>
                            </AnimatedElement>
                        </div> */}

                        <div className='bg-gradient-to-r from-[#6d222e] to-[#505da0] py-14 px-[12%] max-sm:px-3 flex flex-col gap-10'>


                            <AnimatedElement direction="from-right">
                                <div className='flex  flex-row-reverse max-sm:flex-col  max-sm:px-0 '>
                                    <div className='flex-1 flex  items-center  justify-center'>
                                        <img className=' grayscale mix-blend-plus-lighter' width={200} src={MissionImg} />
                                    </div>
                                    <div className='flex flex-col p-4  justify-center flex-[2]'>
                                        {/* <div className='bg-[#2D3139] h-[20px] w-full absolute slide-up  '></div> */}
                                        <div className='relative flex'>
                                            {/* <h1 className='text-[3rem] text-[#425472]  font-bold poppins uppercase'>Our Mission</h1> */}
                                            <RevealText text='Our Mission' css='text-[2.6rem] max-sm:text-[2rem] after:bg-[#672D44]  text-gray-100 uppercase font-bold' />
                                        </div>
                                        <AnimatedElement direction='from-down'>

                                            {/* <p className='text-gray-100  poppins text-justify '>Our mission is to deliver top-notch/supreme Défense solutions, maintaining utmost integrity, reliability, and excellence. We're dedicated to pioneering technologies that ensure security and peace for our nation and allies. Through collaboration and continuous improvement, we aim to meet evolving needs while upholding the highest standards. */}
                                            {/* </p> */}
                                            {/* <p className='text-gray-100  poppins text-justify '>Dedicated towards pioneering technologies to ensure top notch defence and aerospace solutions maintaining utmost quality, reliability and excellence while upholding the highest standards.
                                            </p> */}
                                            <p className='text-gray-100  poppins text-justify '>Focused on developing and manufacturing reliable customized products build upon pioneering technologies by experienced team upholding the highest standards of quality.
                                            </p>
                                        </AnimatedElement>

                                    </div>
                                </div>
                            </AnimatedElement>

                            <AnimatedElement direction="from-left" delayAn='0.7' >
                                <div className='flex    max-sm:flex-col  max-sm:px-0'>
                                    <div className='flex-1 flex items-center  justify-center'>
                                        <img alt='vision' className='grayscale mix-blend-screen' width={180} src={VisionImg} />
                                    </div>
                                    <div className='  flex p-4 flex-col justify-center flex-[2]'>
                                        <div className='relative flex'>
                                            {/* <h1 className='text-[3rem] text-[#425472] font-bold poppins uppercase'>Our Vision</h1> */}
                                            <RevealText text='Our Vision' css='text-[2.6rem] text-[#fff] max-sm:text-[2rem] after:bg-[#613C60] uppercase font-bold' />

                                            <div className='absolute flex -rotate-45 -right-[40px]'>
                                                {/* <MissileSVG /> */}
                                            </div>
                                        </div>
                                        <p className=' text-justify  text-[#fff] poppins '>To be the foremost authority and trusted partner in industrial, defence and aerospace solutions globally.</p>
                                    </div>
                                </div>
                                {/* Dedicated towards pion technologies that ensure top notch defence grade solutions maintaining utmost integrity, reliability and excellence while upholding the highest standards. */}
                            </AnimatedElement>

                        </div>


                        <div className='bg-[#101010] py-10  px-10 max-sm:px-0  flex flex-col items-center justify-center'>

                            <div className=''>
                                <RevealText text='Our Values' css='text-[2.6rem] text-[#fff] max-sm:text-[2rem] after:bg-[#fff] uppercase font-bold' />
                            </div>
                            <div className=''>
                            </div>
                            <Values2 />
                        </div>

                        <div className=' relative bg-black py-10 px-[10%] max-sm:px-2 '>
                            {/* <div className='absolute h-full w-full  '>
                                <StrengthBG />
                            </div> */}
                            <div className='absolute top-0 left-0 w-full h-full'>

                                {/* <svg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio="none" width='100%' height='100%' viewBox='0 0 1600 800'><rect fill='#000000' width='1600' height='800' /><g fill-opacity='1'><polygon fill='#050509' points='800 100 0 200 0 800 1600 800 1600 200' /><polygon fill='#090b12' points='800 200 0 400 0 800 1600 800 1600 400' /><polygon fill='#0e101b' points='800 300 0 600 0 800 1600 800 1600 600' /><polygon fill='#121524' points='1600 800 800 400 0 800' /><polygon fill='#171a2d' points='1280 800 800 500 320 800' /><polygon fill='#1b2036' points='533.3 800 1066.7 800 800 600' /><polygon fill='#20253F' points='684.1 800 914.3 800 800 700' /></g></svg> */}
                                {/* <svg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio="none" width='100%' height='100%' viewBox='0 0 1600 800'><rect fill='#000000' width='1600' height='800' /><g fill-opacity='1'><polygon fill='#010102' points='800 100 0 200 0 800 1600 800 1600 200' /><polygon fill='#020305' points='800 200 0 400 0 800 1600 800 1600 400' /><polygon fill='#030407' points='800 300 0 600 0 800 1600 800 1600 600' /><polygon fill='#05060a' points='1600 800 800 400 0 800' /><polygon fill='#06070c' points='1280 800 800 500 320 800' /><polygon fill='#07090f' points='533.3 800 1066.7 800 800 600' /><polygon fill='#080A11' points='684.1 800 914.3 800 800 700' /></g></svg> */}
                                {/* <svg xmlns='http://www.w3.org/2000/svg' preserveAspectRatio="none" width='100%' height='100%' viewBox='0 0 1600 800'><rect fill='#000000' width='1600' height='800' /><g fill-opacity='1'><polygon fill='#030305' points='800 100 0 200 0 800 1600 800 1600 200' /><polygon fill='#05060a' points='800 200 0 400 0 800 1600 800 1600 400' /><polygon fill='#08090f' points='800 300 0 600 0 800 1600 800 1600 600' /><polygon fill='#0a0b14' points='1600 800 800 400 0 800' /><polygon fill='#0d0e19' points='1280 800 800 500 320 800' /><polygon fill='#0f111e' points='533.3 800 1066.7 800 800 600' /><polygon fill='#121423' points='684.1 800 914.3 800 800 700' /></g></svg> */}

                            </div>

                            <div className='content'>
                                <h2 className=' max-sm:text-[2.5rem] text-[6rem]'>OUR STRENGTHS</h2>
                                <h2 className=' max-sm:text-[2.5rem] text-[6rem]'>OUR STRENGTHS</h2>
                            </div>
                            <AnimatedElement direction='from-down'>

                                <div className='relative flex max-sm:flex-col mt-[200px] max-sm:mt-20 gap-7 '>
                                    <h1 className='text-[1.5rem] max-sm:text-[1.2rem] uppercase flex-1 text-center'>Well-equipped <span className='font-bold'>automated manufacturing</span> & <span className='font-bold'>testing facilities</span> under one roof </h1>
                                    <h1 className='text-[1.5rem] max-sm:text-[1.2rem] uppercase flex-1 text-center'>Manufacturing facility complaint with <span className='font-bold'>Defence & aerospace manufacturing processes</span></h1>
                                    <h1 className='text-[1.5rem] max-sm:text-[1.2rem] uppercase flex-1 text-center'><span className='font-bold'>T<span className='lowercase'>o</span>T holder</span> of various products</h1>
                                    {/* <h1 className='text-[3rem] uppercase'></h1>
                                <h1 className='text-[3rem] uppercase'></h1> */}
                                </div>
                            </AnimatedElement>
                            <div className='flex relative max-sm:flex-col gap-10 place-self-center  w-full py-10 mt-10 max-sm:py-4 justify-center'>

                                <div className=''>
                                    <div className=' flex items-center justify-center text-[3rem] oswald  font-semibold'><NumberCounter from={0} to={50} />+</div>
                                    <p className='text-[1.1rem] max-sm:text-[16px]  font-medium'>Experienced Professionals</p>
                                </div>
                                <div className=''>
                                    <div className=' flex items-center justify-center text-[3rem] oswald  font-semibold'><NumberCounter from={0} to={14} /></div>

                                    <p className='text-[1.1rem] max-sm:text-[16px] font-medium'>Years of experience<br /></p>
                                </div>
                                <div className=''>
                                    <div className=' flex items-center justify-center text-[3rem]  font-semibold'><NumberCounter from={0} to={100} duration={3} />+</div>

                                    <p className='text-[1.1rem] max-sm:text-[16px] font-medium'>Orders successfully delivered</p>
                                </div>
                            </div>
                        </div>
                        {/* <svg xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="#000"><path d="M0 0v4l500 96 500-96V0H0z"></path></svg> */}

                        <div className='flex max-sm:flex-col max-sm:gap-0 gap-[200px] items-center relative justify-center bg-gray-300 w-full'>
                            <div className='absolute'>

                            </div>
                            <div className='  max-sm:mt-0 flex flex-col items-center gap-6 max-sm:py-[30px]  py-[60px]'>
                                {/* <h1 className='text-[2.5rem] text-[#5A6984] font-bold poppins uppercase'>Our Certifications</h1> */}
                                <RevealText text='OUR Certifications' css='text-[2.3rem] max-sm:text-[26px] text-[#425472] after:bg-[#425472] uppercase font-bold' />

                                <div className='flex gap-[100px] max-sm:gap-6'>
                                    <img className='mix-blend-multiply max-sm:w-[80px]' width={100} alt='cert' src={ISO} />
                                    <img className='mix-blend-multiply max-sm:w-[80px]' width={100} alt='cert' src={AS9100} />
                                </div>
                            </div>

                            <div className=' max-sm:mt-0  flex flex-col items-center gap-10 max-sm:py-[30px]  py-[60px]'>
                                {/* <h1 className='text-[2.5rem] text-[#5A6984] font-bold poppins uppercase'>Our Memberships</h1> */}
                                <RevealText text='OUR Memberships' css='text-[2.3rem] max-sm:text-[26px] after:bg-[#425472] text-[#425472] uppercase font-bold' />
                                <div className='flex gap-[100px] max-sm:gap-6'>
                                    <img className='mix-blend-multiply max-sm:w-[100px] max-sm:h-[70px]' width={160} alt='cert' src={IPC} />
                                    <img className='max-sm:w-[100px] max-sm:h-[70px]' width={160} alt='cert' src={MSME} />
                                </div>
                            </div>
                        </div>

                        <div className='flex flex-col relative bg-gray-200 py-[50px] overflow-hidden  max-sm:py-[25px]'>
                            {/* <SVGRND /> */}

                            <AnimatedElement direction='from-down'>
                                {/* <h1 className='text-[3rem] font-extrabold poppins text-[#45484C] uppercase mb-5'>Our clients</h1> */}
                                <RevealText text='Our major clients' css='text-[2.3rem] max-sm:text-[26px] after:bg-[#425472] text-[#425472] uppercase font-bold' />

                                <div className=' relative flex max-sm:flex-wrap max-sm:mt-3 gap-10  items-center justify-center'>
                                    <img className=' hover:scale-110 transition-all w-[134px] max-sm:w-[75px] h-[134px] max-sm:h-[75px]' alt='drdo' src={DRDO} />
                                    <img className=' hover:scale-110 transition-all w-[130px] max-sm:w-[100px]' alt='bdl' src={BDL} />
                                    <img className=' hover:scale-110 transition-all w-[130px] max-sm:w-[90px]' alt='adani' src={adani} />
                                    <img className=' hover:scale-110 transition-all w-[130px] max-sm:w-[120px]' alt='csir' src={CSIR} />
                                    <img className=' hover:scale-110 transition-all w-[130px] max-sm:w-[110px]' alt='solar' src={solar} />
                                </div>
                            </AnimatedElement>

                        </div>





                    </motion.div>

                </div >


            </TransitionPage >

        </>

    )
}

export default Home


import React from 'react'
import Img1 from '../../images/IMG_3676.jpg'
import Img2 from '../../images/IMG_36642.jpg'
import Img3 from '../../images/IMG_3668.jpg'
import SimpleImageSlider from 'react-simple-image-slider'
import ImageSlider from '../../components/ImageSlider'
import Dev from '../../images/dev.png'
import AnimatedElement from '../../components/AnimatedElement'
import TransitionPage from '../../TransitionPage'
import Radio from '../../images/radio-waves.png'
import Digital from '../../images/frequency.png'
import Processing from '../../images/iteration.png'
import AI from '../../images/microchip.png'
import RNDi from '../../images/rnd.png'
import BG from '../../components/SVG/BG'
import { animate, motion } from 'framer-motion'

import RevealText from '../../components/TextReveal2'
import ViewElement from '../../components/ViewElement'

function RND() {
    const images = [
        Img1,
        Img2,
        Img3
    ]
    return (
        <TransitionPage>

            <div className='relative flex flex-col  items-center bg-gray-100 overflow-hidden'>
                {/* <div className=" bg-black bg-opacity-50">
                <img className=" mix-blend-multiply" src={Img1} alt="rnd" />
                </div> */}


                <div className='flex items-center justify-center h-full'>
                    <div className='bg-black bg-opacity-10'>
                        {/* <ImageSlider images={images} autoPlay={true} autoPlayInterval={4000} /> */}
                        <img className=' mix-blend-multiply' src={Img3} />
                    </div>
                    <div className='absolute'>
                        <RevealText text='Research & Development' css='uppercase max-sm:text-[1.3rem] bg-[#000] after:bg-black p-3 bg-opacity-60 text-[3rem] font-bold text-white' />
                    </div>
                </div>


                <div className='flex flex-col px-[10%] max-sm:px-3  gap-5 mt-10 relative items-center justify-center'>
                    {/* <SVGRND /> */}
                    {/* <BG /> */}
                    {/* <svg className='absolute' xmlns='http://www.w3.org/2000/svg' width='' height='' viewBox='0 0 800 800'><rect fill='#F3F4F6' width='800' height='800' /><g fill='none' stroke='#9C9C9C' stroke-width='1'><path d='M769 229L1037 260.9M927 880L731 737 520 660 309 538 40 599 295 764 126.5 879.5 40 599-197 493 102 382-31 229 126.5 79.5-69-63' /><path d='M-31 229L237 261 390 382 603 493 308.5 537.5 101.5 381.5M370 905L295 764' /><path d='M520 660L578 842 731 737 840 599 603 493 520 660 295 764 309 538 390 382 539 269 769 229 577.5 41.5 370 105 295 -36 126.5 79.5 237 261 102 382 40 599 -69 737 127 880' /><path d='M520-140L578.5 42.5 731-63M603 493L539 269 237 261 370 105M902 382L539 269M390 382L102 382' /><path d='M-222 42L126.5 79.5 370 105 539 269 577.5 41.5 927 80 769 229 902 382 603 493 731 737M295-36L577.5 41.5M578 842L295 764M40-201L127 80M102 382L-261 269' /></g><g fill='#D2D2D2'><circle cx='769' cy='229' r='5' /><circle cx='539' cy='269' r='5' /><circle cx='603' cy='493' r='5' /><circle cx='731' cy='737' r='5' /><circle cx='520' cy='660' r='5' /><circle cx='309' cy='538' r='5' /><circle cx='295' cy='764' r='5' /><circle cx='40' cy='599' r='5' /><circle cx='102' cy='382' r='5' /><circle cx='127' cy='80' r='5' /><circle cx='370' cy='105' r='5' /><circle cx='578' cy='42' r='5' /><circle cx='237' cy='261' r='5' /><circle cx='390' cy='382' r='5' /></g></svg> */}
                    {/* <svg className='absolute' fill="#ebebeb" height="300px" width="300px" version="1.1" id="Layer_1" xmlns="http://www.w3.org/2000/svg" xmlnsXlink="http://www.w3.org/1999/xlink" viewBox="0 0 512.001 512.001" xmlSpace="preserve" stroke="#ebebeb"><g id="SVGRepo_bgCarrier" stroke-width="0"></g><g id="SVGRepo_tracerCarrier" stroke-linecap="round" stroke-linejoin="round"></g><g id="SVGRepo_iconCarrier"> <g> <g> <path d="M481.283,441.672l-77.852-77.852c21.198-31.713,33.178-68.131,34.992-106.283h27.386c5.633,0,10.2-4.566,10.2-10.2 c0-66.066-25.727-128.177-72.444-174.893C356.848,25.727,294.737,0,228.671,0c-5.633,0-10.2,4.566-10.2,10.2v27.385 C107.394,42.923,18.668,134.961,18.668,247.338c0,115.796,94.207,210.003,210.003,210.003c41.859,0,81.958-12.16,116.484-35.242 l77.851,77.851c8.033,8.033,18.587,12.05,29.138,12.05c10.552,0,21.105-4.017,29.139-12.051 C497.35,483.883,497.35,457.739,481.283,441.672z M388.694,349.081l-12.62-12.62c-3.983-3.983-10.441-3.982-14.424,0 l-14.715,14.715l-19.98-19.98c17.23-20.165,28.381-45.672,30.576-73.658h60.477C416.283,290.264,406.26,321.547,388.694,349.081z M238.871,20.626c117.047,5.197,211.316,99.465,216.513,216.512h-97.851c-4.953-63.159-55.503-113.708-118.662-118.662V20.626z M238.871,138.958c51.902,4.846,93.334,46.278,98.18,98.179h-98.18V138.958z M228.671,257.537h108.388 c-5.161,55.26-51.802,98.662-108.388,98.662c-60.027,0-108.861-48.835-108.861-108.861c0-56.586,43.401-103.227,98.662-108.387 v108.387C218.472,252.97,223.038,257.537,228.671,257.537z M317.795,394.738l12.624,12.624 c-30.382,19.386-65.325,29.58-101.748,29.58c-104.548,0-189.604-85.056-189.604-189.604c0-101.128,79.578-184.018,179.405-189.334 v60.475c-66.525,5.217-119.061,61.017-119.061,128.859c0,71.275,57.986,129.26,129.26,129.26 c31.974,0,61.268-11.675,83.858-30.978l19.98,19.98l-14.714,14.714c-1.912,1.912-2.987,4.507-2.987,7.212 C314.808,390.231,315.883,392.826,317.795,394.738z M466.859,485.525c-8.112,8.114-21.314,8.115-29.428,0l-98-98l29.429-29.429 l97.999,97.999C474.972,464.21,474.972,477.412,466.859,485.525z"></path> </g> </g> <g> <g> <path d="M209.502,164.452c-1.919-5.297-7.768-8.034-13.064-6.117c-23.462,8.499-42.982,26.36-53.556,49.002 c-2.384,5.104-0.178,11.174,4.925,13.557c1.396,0.652,2.864,0.961,4.309,0.961c3.839,0,7.516-2.179,9.248-5.886 c8.298-17.771,23.614-31.787,42.02-38.453C208.682,175.597,211.42,169.748,209.502,164.452z"></path> </g> </g> <g> <g> <path d="M145.306,230.409c-5.615-0.453-10.528,3.749-10.972,9.364c-0.198,2.503-0.298,5.048-0.298,7.565 c0,5.633,4.566,10.2,10.2,10.2c5.633,0,10.2-4.566,10.2-10.2c0-1.983,0.08-3.987,0.235-5.957 C155.114,235.765,150.922,230.852,145.306,230.409z"></path> </g> </g> </g></svg> */}
                    {/* <h1 className='home-title '><span>Transforming Ideas into Reality</span></h1> */}
                    <RevealText text='Transforming Ideas into Reality' css='text-[3rem] max-sm:text-[1rem] text-[#425472] after:bg-[#425472] uppercase font-bold' />
                    <AnimatedElement direction='from-down' >

                        <div className=' text-black flex max-sm:flex-col items-center justify-center'>
                            <p className='text-justify flex-[2]'>
                                {/* <span className='text-[2rem] max-sm:text-[1.2rem] font-bold uppercase'>The Research and Development</span> */}
                                <RevealText text='The Research and Development' css='text-[2rem] after:bg-black max-sm:text-[1.2rem] font-bold uppercase' />
                                {/* <ViewElement initial={{ opacity: 0, scale: '0' }} animate={{ opacity: 1, scale: 1 }} styled='inline'> */}
                                <span>

                                    (R&D) is the pulsating heart of our company's innovation engine. Situated at the forefront of technological
                                    advancement, our R&D department embodies our commitment to pushing boundaries, exploring new horizons, and staying ahead of the
                                    curve in a rapidly evolving industry landscape.

                                    {/* Within our R&D department, a team of visionary researchers, engineers, and scientists collaborate tirelessly to pioneer groundbreaking
                                    solutions, anticipate market trends, and drive the next wave of product development. Through a relentless pursuit of excellence and a
                                    culture of experimentation, our R&D team remains dedicated to transforming bold ideas into tangible realities that redefine industry
                                    standards and delight our customers. */}
                                </span>
                                {/* </ViewElement> */}
                            </p>

                            <div className='flex-1'>
                                <motion.img alt='analog' src={RNDi} />
                            </div>
                        </div>
                    </AnimatedElement>



                    {/* <div className='flex flex-col gap-5 text-black mb-10'>
                        <div className=' flex items-center text-[2rem] justify-center text-left font-bold'>
                                <img width={150} className='' src={Dev} />
                                Design and development of new products and upgradation of existing products.
                            </div>

                        <div className='  flex flex-col items-center justify-center text-left font-bold '> Analog and RF designing, Digital and Mixed Signal designing, Analog and Digital signal processing, Power Electronics and AI Algorithms.</div>

                        <div className=' flex flex-col items-center justify-center text-left font-bold'>Latest instrumentation including Impedance analyser, MSO, DSO, High voltage and High current probes, Precise power supplies, Arbitrary signal generators, Data logger multi-meters, etc</div>
                    </div> */}
                    <AnimatedElement direction='from-left'>
                        <div className='mb-10 max-sm:mt-4'>
                            {/* <h1 className='text-[3rem] font-bold text-[#425472]'> Strengths of R&D</h1> */}
                            <RevealText text='Strengths of R&D' css='text-[3rem] max-sm:text-[1.8rem] after:bg-[#425472] text-[#425472] uppercase font-bold' />
                            <div className='flex max-sm:flex-col gap-3 mt-6'>
                                <AnimatedElement direction='from-down' delayAn=''>

                                    <div className=' p-3 bg-gray-200 flex flex-col gap-3 shadow-md items-center font-semibold'><img alt='analog' width={100} src={Radio} />Analog and RF designing</div>
                                </AnimatedElement>
                                <AnimatedElement direction='from-down' delayAn='0.13'>
                                    <div className=' p-3 bg-gray-200 flex flex-col gap-3 shadow-md items-center font-semibold'><img alt='digital' width={100} src={Digital} />Digital and Mixed Signal designing</div>
                                </AnimatedElement>
                                <AnimatedElement direction='from-down' delayAn='0.16'>

                                    <div className=' p-3 bg-gray-200 flex flex-col gap-3 shadow-md items-center font-semibold'><img alt='process' width={100} src={Processing} />Analog and Digital signal processing</div>
                                </AnimatedElement>
                                <AnimatedElement direction='from-down' delayAn='0.19'>

                                    <div className=' p-3 bg-gray-200 flex flex-col gap-3 shadow-md items-center font-semibold'><img alt='ai' className='-rotate-90' width={100} src={AI} />Power Electronics and AI Algorithms</div>
                                </AnimatedElement>
                            </div>
                        </div>
                    </AnimatedElement>
                </div>

            </div >
        </TransitionPage >
    )
}

export default RND
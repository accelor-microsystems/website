import React from 'react'
import Img1 from '../../images/Mechanical/IMG_3914.jpg'
import Img12 from '../../images/Mechanical/IMG_38362.jpg'
import Img2 from '../../images/Mechanical/img4.jpg'
import Img3 from '../../images/Mechanical/img5.jpg'
import Solid from '../../images/Mechanical/process.png'
import Tools from '../../images/Mechanical/tools.png'
import Mechanic from '../../images/Mechanical/mechanic.png'
import Ruler from '../../images/Mechanical/ruler.png'
import Pen from '../../images/Mechanical/3d-printer.png'
import mech from '../../images/Mechanical/mech.png'

import { motion } from 'framer-motion'
import AnimatedElement from '../../components/AnimatedElement'
import TransitionPage from '../../TransitionPage'
import RevealText from '../../components/TextReveal2'
import ImageSlider from '../../components/ImageSlider'

function Mechanical() {
    const images = [
        Img1,
        Img12
    ]
    return (
        <TransitionPage>

            <div className='h-auto text-black bg-gray-100    '>

                <div className='flex items-center justify-center'>

                    {/* <motion.h1 initial={{ x: 400 }} animate={{ x: 0 }} transition={{ duration: 2, type: 'spring', damping: 12, delay: 1 }} className='text-[4rem] absolute z-10 text-white font-semibold  uppercase '>Mechanical Department</motion.h1> */}
                    <div className='absolute z-40'>
                        <RevealText text='Mechanical Department' css='uppercase text-[3rem] after:bg-black  bg-black p-3 bg-opacity-60  max-sm:text-[1.2rem] font-bold text-white' />
                    </div>
                    <div className='h-full  '>
                        {/* <img className=' opacity-40' src={Img1} alt='mech1' /> */}
                        <ImageSlider images={images} autoPlay={true} autoPlayInterval={4000} />
                    </div>
                </div>
                {/* <svg style={{ position: 'absolute', zIndex: -1, height: 'auto' }} className=' bg-gray-100' xmlns="http://www.w3.org/2000/svg" version="1.1" xmlnsXlink="http://www.w3.org/1999/xlink" xmlnsSvgjs="http://svgjs.dev/svgjs" viewBox="0 0 1422 800"><g shape-rendering="crispEdges" stroke-linejoin="round" fill="none" stroke-width="2" stroke="hsl(0, 0%, 92.54901960784314%)"><polygon points="1244.25,100 1422,100 1244.25,0"></polygon><polygon points="1066.5,100 1244.25,100 1244.25,0"></polygon><polygon points="1244.25,200 1244.25,100 1066.5,100"></polygon><polygon points="1422,200 1422,100 1244.25,200"></polygon><polygon points="1066.5,100 1066.5,0 888.75,0"></polygon><polygon points="888.75,0 711,100 888.75,100"></polygon><polygon points="711,200 711,100 888.75,200"></polygon><polygon points="1066.5,200 1066.5,100 888.75,100"></polygon><polygon points="888.75,200 888.75,300 1066.5,300"></polygon><polygon points="888.75,300 888.75,200 711,300"></polygon><polygon points="888.75,300 711,300 711,400"></polygon><polygon points="888.75,400 888.75,300 1066.5,300"></polygon><polygon points="1422,200 1244.25,200 1244.25,300"></polygon><polygon points="1244.25,300 1244.25,200 1066.5,200"></polygon><polygon points="1066.5,400 1066.5,300 1244.25,400"></polygon><polygon points="1244.25,300 1244.25,400 1422,400"></polygon><polygon points="711,0 711,100 533.25,100"></polygon><polygon points="355.5,0 355.5,100 533.25,0"></polygon><polygon points="533.25,100 355.5,100 533.25,200"></polygon><polygon points="711,100 711,200 533.25,100"></polygon><polygon points="355.5,200 355.5,0 0,0"></polygon><polygon points="355.5,200 355.5,300 177.75,200"></polygon><polygon points="0,200 0,300 177.75,300"></polygon><polygon points="0,400 0,300 177.75,400"></polygon><polygon points="355.5,400 355.5,300 177.75,300"></polygon><polygon points="711,300 711,200 533.25,200"></polygon><polygon points="533.25,200 355.5,300 533.25,300"></polygon><polygon points="533.25,300 444.375,350 533.25,350"></polygon><polygon points="444.375,350 444.375,300 355.5,300"></polygon><polygon points="444.375,350 444.375,400 355.5,400"></polygon><polygon points="533.25,350 444.375,350 533.25,400"></polygon><polygon points="711,400 711,300 533.25,300"></polygon><polygon points="711,400 711,500 533.25,400"></polygon><polygon points="533.25,450 444.375,400 444.375,450"></polygon><polygon points="355.5,450 444.375,400 355.5,400"></polygon><polygon points="444.375,450 355.5,450 355.5,500"></polygon><polygon points="533.25,450 444.375,450 444.375,500"></polygon><polygon points="533.25,600 533.25,500 355.5,500"></polygon><polygon points="711,500 533.25,600 533.25,500"></polygon><polygon points="177.75,400 355.5,500 355.5,400"></polygon><polygon points="177.75,500 0,400 0,500"></polygon><polygon points="177.75,500 177.75,600 0,500"></polygon><polygon points="355.5,600 355.5,500 177.75,500"></polygon><polygon points="355.5,600 355.5,800 0,800"></polygon><polygon points="711,600 533.25,600 533.25,700"></polygon><polygon points="533.25,700 355.5,700 533.25,600"></polygon><polygon points="355.5,700 533.25,800 355.5,800"></polygon><polygon points="711,800 711,700 533.25,800"></polygon><polygon points="1422,400 1244.25,500 1244.25,400"></polygon><polygon points="1244.25,400 1244.25,500 1066.5,400"></polygon><polygon points="1066.5,600 1066.5,500 1244.25,600"></polygon><polygon points="1244.25,500 1422,600 1422,500"></polygon><polygon points="888.75,400 888.75,500 1066.5,400"></polygon><polygon points="888.75,400 888.75,500 711,500"></polygon><polygon points="711,500 711,600 888.75,500"></polygon><polygon points="888.75,500 1066.5,600 888.75,600"></polygon><polygon points="1066.5,600 888.75,600 888.75,700"></polygon><polygon points="888.75,700 888.75,600 711,700"></polygon><polygon points="888.75,700 888.75,800 711,700"></polygon><polygon points="1066.5,800 888.75,800 888.75,700"></polygon><polygon points="1422,600 1244.25,600 1422,700"></polygon><polygon points="1244.25,600 1066.5,600 1066.5,700"></polygon><polygon points="1066.5,700 1066.5,800 1244.25,800"></polygon><polygon points="1422,800 1244.25,800 1244.25,700"></polygon></g><g fill="hsl(220, 62%, 45%)" stroke-width="3" stroke="hsl(220, 43%, 13%)"></g></svg> */}
                <AnimatedElement direction='from-down'>
                    <div className='flex max-sm:flex-col items-center  justify-center gap-5 py-6 px-10 max-sm:px-3'>

                        <div className=' flex-[3]  h-full px-10 max-sm:px-3'>
                            <p className='text-justify text-[1em] '>
                                <RevealText text='The Mechanical Department' css='text-[2rem] after:bg-black max-sm:text-[1.2rem] font-bold uppercase' />

                                <span>
                                    This department customizes mechanical systems to meet the unique requirements of these instruments, guaranteeing their reliability in critical scenarios.
                                    Structural Analysis and Design techniques are rigorously applied to safeguard the integrity and longevity of vital components, while Materials Science and Engineering advancements optimize their weight, resilience, and performance. We employ state-of-the-art Prototyping and
                                    Testing facilities to validate designs, assess performance metrics, and mitigate risks before deployment, ensuring the operational readiness
                                    and reliability of our products.
                                </span>

                            </p>
                        </div>
                        <div className='flex-1'>
                            <img alt='mech' src={mech} />
                        </div>

                    </div>
                </AnimatedElement>

                {/* <h1 className='text-[3rem] text-[#425472] uppercase font-bold'>Facilities</h1> */}
                <RevealText text='Facilities' css='uppercase text-[3rem] after:bg-[#425472] max-sm:text-[2rem] font-bold text-[#425472]' />
                {/* <AnimatedElement direction='from-left'> */}

                <div className='py-5 px-[10%] max-sm:px-3 max-sm:flex-col flex items-center '>
                    <AnimatedElement direction='from-down'>

                        <Facility width={70} fac="Advanced Designing and Analysis Capabilities with Solid Works Professional 2024." img={Solid} />
                    </AnimatedElement>
                    <AnimatedElement direction='from-down' delayAn='0.2'>

                        <Facility width={70} img={Pen} fac="3D printing technology with more than 20 high end 3D printers " />
                    </AnimatedElement>
                    <AnimatedElement direction='from-down' delayAn='0.23'>

                        <Facility width={70} img={Tools} fac="Equipped with high precision machines and hand tools" />
                    </AnimatedElement>
                    <AnimatedElement direction='from-down' delayAn='0.26'>

                        <Facility width={70} img={Mechanic} fac="Experienced personnel for operating and maintaining machines and tools" />
                    </AnimatedElement>
                    <AnimatedElement direction='from-down' delayAn='0.29'>

                        <Facility width={70} img={Ruler} fac="High precision measuring instruments, such as calipers and micrometers." />
                    </AnimatedElement>
                </div>
                {/* </AnimatedElement> */}
                {/* <div className='flex items-center justify-center mt-14 gap-4'>
                <img className='' width='300' src={Img2} alt='img2' />
                <img className='' width='300' src={Img3} alt='img3' />
                </div> */}

            </div>
        </TransitionPage>
    )
}

function Facility({ fac, img, width }) {
    return (

        <div className='font-medium scale-90 w-[300px] text-[1em] h-full flex-[1] text-justify flex flex-col-reverse gap-3 items-center justify-evenly rounded-xl bg-gray-200 text-[#2f3746] p-3 py-[50px] max-sm:py-4 shadow-md hover:scale-95 transition'>
            <p>{fac}</p>
            <img alt='mech' src={img} width={width} />
        </div>
    )
}

export default Mechanical
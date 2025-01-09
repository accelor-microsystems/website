import React from 'react'
import Magrays from '../images/magrays2.png'
import Hygro from '../images/hygro2.png'
// import Magstrics from '../images/magstrics.jpg'
import Magstrics from '../images/magstrics3.png'
import dl1 from '../images/dl12.png'
import dl2 from '../images/dl22.png'
import dl3 from '../images/dl32.png'
import dl4 from '../images/dl42.png'
import OBD from '../images/obd.png'
import Payload from '../images/payload2.png'
import timer from '../images/timer.png'
import wireless from '../images/wireless2.png'
import gsm from '../images/gsm2.png'
import ldu from '../images/ldu2.png'
import TR from '../images/tr.jpg'
import GPS from '../images/gps.jpg'
import Trig from '../images/trig.jpg'
import Envirometer from '../images/envirometer2.png'
import AnimatedElement from '../components/AnimatedElement'
import RevealText from '../components/TextReveal2'
function Products2() {
    return (
        <div className='py-10 px-[15%] max-sm:px-4 bg-gray-200'>
            <RevealText text='Our Products ' css='text-[3rem] max-sm:text-[2rem] font-bold poppins text-[#425472] uppercase ' />
            {/* <div className='my-10'>
                <h1 className='text-[2rem] text-left uppercase'>Measuring Instruments</h1>
                <div className='flex flex-col items-center justify-center '>
                    <Product name='Magrays' img={Magrays} description='Used to detect the feeble magnetic field present during the machining process industrial, automotive and defence applicaitons' />
                    <Product name='Magstrics' img={Magstrics} description='Developed for performing underground mild steel pipe inspection' />
                    <div className='flex flex-col bg-gray-200 h-[500px] p-4      items-start  mt-10'>
                        <h1 className='uppercase text-[4rem] text-gray-400 font-bold'>On Board Data Loggers</h1>
                        <div className='flex flex-col items-start'>
                            <p className='text-left'>On Board data loggers are highly reliable data acquisition systems designed to work in harsh environments during dynamic testing of various defence systems including aircrafts and missiles</p>
                            <div className='flex mt-10'>
                                <img src={dl1} width={200} className='' />
                                <img src={dl2} width={200} className='' />
                                <img src={dl3} width={200} className='' />
                                <img src={dl4} width={200} className='' />
                            </div>

                        </div>
                    </div>
                </div>

            </div>

            <div className='my-10'>
                <h1 className='text-[2rem] uppercase text-left'>Electronic Components</h1>
                <div className='flex flex-col gap-10'>
                    <Product name='Payload Electronics' img={Payload} width={200} css='' description='' />
                    <Product name='Timer Based Trigerring Systems' img={timer} width={200} css='' description='Timer based triggering device used to generate triggering pulse after a configurable time delay. ' />
                    <Product name='Wireless Based Trigerring Systems' img={wireless} width={200} css='' />
                    <Product name='GSM Based control unit' img={gsm} width={200} css='' />
                </div>

            </div>
            <div className='my-10'>
                <h1 className='text-[2rem] uppercase text-left'>Meteorological Equipment</h1>
                <div>
                    <Product name='ThermoHygromter' img={Hygro} description='Capable of sensing ambient light, temperature, humidity and noise levels' />
                </div>

            </div>
            <div className='my-10'>
                <h1 className='text-[2rem] uppercase text-left'>Industrial Process control Equipment</h1>
                <div>
                    <Product name='Light Detection Unit' img={ldu} />
                </div>

            </div> */}
            {/* <div className=' text-white'>
                <h1 className='text-[3rem] font-bold text-left bg-gradient-to-r from-[#9b3243] to-[#6a7bcf] w-fit  text-transparent bg-clip-text'>MAGRAYS</h1>
                <div className='flex'>
                    <h1 className='text-left text-[20px] flex-[1]'>Used to detect the feeble magnetic field present during the machining process industrial, automotive and defence applicaitons</h1>
                    <div className=' flex-1 flex items-center justify-center'>

                        <img src={Magrays} width={400} className='bg-gradient-to-r  from-[#6d222e] to-[#505da0] rounded-3xl ' />
                    </div>
                </div>
            </div> */}
            <div className='mt-10'>
                <div>
                    {/* <h1 className='text-[2.6rem] max-sm:text-[1.8rem]'>Measuring Equipment</h1> */}
                    <ProductStyle name='Magrays' img={Magrays} description='This device is used to detect the feeble magnetic field present during the machining process in industrial, automotive and defence applications' />
                    <ProductStyle name='Magstrics' img={Magstrics} description='This device is used for performing underground mild steel pipe inspection' link=' https://youtu.be/PEuJmGpEp6U?si=a16TFpnUtThNceDA' />
                    <ProductStyle name='On Board Data Loggers' width={500} img={OBD} description='Onboard Data Loggers are highly reliable data acquisition systems designed to work in harsh environments during dynamic testing of various defence systems including aircrafts and missiles.' />
                    <ProductStyle name='Thermo Hygromter' img={Hygro} description='This device is capable of sensing ambient light, temperature, humidity and noise levels' />
                    <ProductStyle name='Envirometer' img={Envirometer} description='This device is capable of sensing ambient light, temperature, humidity and noise levels' />

                </div>
                <div>
                    {/* <h1 className='text-[2.6rem] max-sm:text-[1.8rem]'>Electronic Components</h1> */}
                    <ProductStyle name='Simulators' description='Simulators are instruments designed to test different defence products in laboratory environment. Main function of the simulator is to conduct functionality test of any system during Acceptance Test (AT) and Quality Test (QT). Simulators are standalone systems with GUI on a rugged computer.' />
                    <ProductStyle name='Payload Electronics' width={250} css='blur-sm' description='' />
                    <ProductStyle name='Timer Based Trigerring Systems' width={400} css='' description=' ' />
                    <ProductStyle name='Wireless Based Trigerring Systems' width={400} css='Wireless based triggering device is used to generate triggering pulse after a configurable time delay.' />
                    {/* <ProductStyle name='GSM Based control unit' img={GPS} width={400} css='' /> */}
                </div>
                <div>
                    {/* <h1 className='text-[2.6rem] max-sm:text-[1.8rem]'>Meteorological Equipment</h1> */}

                </div>
                <div>
                    {/* <h1 className='text-[2.6rem] max-sm:text-[1.8rem]'>Industrial Process Control Equipment</h1> */}
                    {/* <ProductStyle width={300} name='Light Detection Unit' img={ldu} /> */}
                </div>
            </div>

        </div>
    )
}

function Product({ name, img, width = 400, height, css = '', description }) {
    return (
        <div className='flex flex-col  bg-gray-200 h-[500px] p-4 mt-10'>
            <AnimatedElement direction='from-left'>

                <div>
                    {/* <h1 className='text-[1.5rem] text-left uppercase font-bold'>{name}</h1> */}
                    <h1 className='uppercase text-[4rem] text-gray-400 max-sm:text-[3rem] font-bold'>{name}</h1>
                </div>
            </AnimatedElement>
            <div className='flex items-start'>
                <AnimatedElement direction='from-left'>

                    <p className='text-left flex-1 uppercase text-[20px] font-semibold px-[50px]'>{description}</p>
                </AnimatedElement>
                <AnimatedElement direction='from-right'>

                    <div className=' h-full flex-1  flex items-center flex-col'>
                        <img src={img} width={width} height={height} className={`${css} `} />
                    </div>
                </AnimatedElement>
            </div>
        </div>
    )
}

function ProductStyle({ name, img, width = 500, height, css = '', description, link = '' }) {
    return (
        <div className=' text-white my-10 max-sm:my-5 '>
            <AnimatedElement direction='from-left'>

                <h1 className='text-[2.5rem] max-sm:text-[1.8rem] font-bold text-left bg-gradient-to-r from-[#6d222e] to-[#505da0] w-fit  text-transparent bg-clip-text'>{name}</h1>
            </AnimatedElement>
            <div className='flex  gap-10 flex-col  '>


                <h1 className=' text-left text-black text-[18px] flex-[1]'>
                    <AnimatedElement direction='from-left'>

                        {description}
                    </AnimatedElement>
                    {
                        link === '' ? '' :
                            <a className='text-blue-900 underline' href={link}>Click here for video description</a>
                    }
                </h1>

                <div className=' flex-1 flex items-center self-center w-[400px] h-[400px] max-sm:w-fit justify-center'>
                    <AnimatedElement direction='from-right'>

                        <img src={img} width={width} className={`${css} radial-gradient rounded-3xl `} />
                    </AnimatedElement>
                </div>
            </div>
        </div>
    )
}


export default Products2
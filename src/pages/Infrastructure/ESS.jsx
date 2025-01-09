import React from 'react'
import Img1 from '../../images/ESS/img1.jpg'
import BurnImg from '../../images/ESS/burn.png'
import EnvImg from '../../images/ESS/burn1.jpg'
// import Vibration from '../../images/ESS/vibration-shaker.jpg'
import Vibration from '../../images/Picture1.jpg'
import Thermal from '../../images/ESS/thermal.jpg'
import ESSImg from '../../images/ESS/es3.jpg'
import ESSImg2 from '../../images/ESS/es4.png'
import TransitionPage from '../../TransitionPage'
import { motion } from 'framer-motion'
import AnimatedElement from '../../components/AnimatedElement'
import ViewElement from '../../components/ViewElement'
import RevealText from '../../components/TextReveal2'
import BgVideo from '../../images/ESS/ess.mp4'

function ESS() {
    return (
        <TransitionPage>

            <div className='min-h-[100vh] bg-gray-100 overflow-hidden'>
                {/* <h1 className='text-[3rem] font-semibold uppercase poppins'>Environmental Stress Screening</h1> */}
                {/* <div className='w-full h-full'>
                    <img className='w-full' src={ESSImg} alt='ess1' />
                </div> */}

                <div className='flex items-center justify-center'>

                    {/* <motion.h1 initial={{ x: 400 }} animate={{ x: 0 }} transition={{ duration: 2, type: 'spring', damping: 12, delay: 1 }} className='text-[4rem] absolute z-10 text-white font-semibold  uppercase '>Environmental Stress Screening</motion.h1> */}
                    {/* <div className='absolute z-30'>
                        <RevealText text='Environmental Stress Screening' css='uppercase after:bg-black text-[3rem] max-sm:text-[2rem] font-bold text-white' />
                    </div> */}
                    <div className='absolute z-40'>
                        <RevealText text='A M E T L' css='uppercase text-[3rem] after:bg-black max-sm:text-[2rem] bg-black p-3 bg-opacity-60 font-bold text-white' />
                    </div>

                    {/* <div className='h-full w-full bg-black '>
                        <img className=' opacity-40 w-full' src={ESSImg} alt='mech1' />
                    </div> */}
                    <video muted autoPlay loop className='brightness-[1]  mix-blend-normal' width="100%">
                        <source src={BgVideo} />
                    </video>
                </div>

                <div className='flex max-sm:flex-col items-center justify-center gap-5 px-10 max-sm:px-3'>

                    <div className='h-full flex-[3] max-sm:mt-7  px-10  max-sm:px-3'>
                        <AnimatedElement direction='from-left'>
                            <p className='text-justify'>
                                <RevealText text='Accelor Microsystems Environment Test Laboratory ' css='text-[1.7rem] text-left after:bg-black max-sm:text-[1.2rem] font-bold uppercase' />
                                <span>
                                    (AMETL) in our company is dedicated to ensuring the reliability and robustness of our
                                    systems. ESS is the process of applying environmental stresses, in conjunction with functional testing, in order to stimulate the failure
                                    mechanisms of defects to the point of detection. Led by a team of experienced engineers and seasoned experts. The Environmental Test laboratory is equipped with advanced testing systems like the Vibration Shaker, Burn-in chamber, and Enviromental Chamber. NABL accreditation of the laboratory is under process as per IS/ISO/IEC 17025:2017 standard. All machinery is calibrated traceable to NABL .
                                </span>
                            </p>
                        </AnimatedElement>
                    </div>
                    <div className='flex-1'>
                        <AnimatedElement direction='from-right'>
                            <img src={ESSImg2} />
                        </AnimatedElement>
                    </div>
                </div>

                <div className='px-[10%] flex items-center flex-col mt-6 py-10'>
                    {/* <h1 className='text-[3rem] font-bold'>FACILITES</h1> */}
                    <RevealText text='Facilities' css='uppercase text-[3rem] max-sm:text-[2rem] after:bg-[#425472] font-bold text-[#425472]' />


                    {/* <div className=' group bg-blue-50 text-[1.9rem]  cursor-pointer  font-bold h-[300px] flex items-center justify-center p-3 rounded-lg shadow-lg'>
                        <img src={BurnImg} alt='burn' className='h-full transition group-hover:brightness-[0.3]' />
                        <p className='absolute invisible group-hover:visible text-white '>Burn In Test</p>
                        </div>
                        
                        <div className=' group bg-blue-50 text-[1.9rem]  cursor-pointer  font-bold h-[300px] flex items-center justify-center p-3 rounded-lg shadow-lg'>
                        <img src={Vibration} alt='vibration-shaker' className='h-full transition group-hover:brightness-[0.3]' />
                        <p className='absolute invisible group-hover:visible text-white '>Vibration Shaker</p>
                        </div> */}



                    <div className='max-sm:px-3 flex flex-col gap-10 max-sm:flex-col mt-7 '>


                        <Facility name='Vibration Shaker System' spec='Sinusoidal/ Random vibration in X,Y and Z axis with 1000Kgf capacity.' compliance='MIL-STD-810 / JSS55555 / JSS 50101' capabilities='Random vibration, Sinusoidal vibration, Mechanical Shock' image={Img1} />
                        <Facility name='Environmental Chamber' spec='Internal size 500X500X500 mm, -40° C to 150°C , Humidity up to 99%' compliance='MIL-STD-810 / JSS55555 / JSS 50101' capabilities='High Temperature, Thermal Cycling, Low Temperature, Thermal Shock, Damp & Heat, Tropical Exposure' image={EnvImg} />
                        <Facility name='Burn-in Chamber' spec='Internal size 600x600x900 mm, 0°C to 200°C' compliance='MIL-STD-883L' capabilities='High Temperature, Burn-In, Thermal Shock' image={BurnImg} />
                        <Facility name='High Altitude Chamber' spec='Internal size 810x670x705 mm, -70° C to 120°C , Humidity up to 10-98%, Pressure up to 10milibar( 1,00,000 feet above sea level)' compliance='MIL-STD-810 / JSS5555 JSS 50101' capabilities='Capabilities: High Altitude, High Temperature, Thermal Cycling, Low Temperature, Thermal Shock, Damp & Heat, Tropical Exposure' image={Vibration} />
                        <Facility name='Thermal Shock Chamber' spec='Internal size 600x600x600 mm, Cold chamber temperature up to -70° C, Hot chamber temperature up to 100°C, Automatic movement of subject from cold to hot chamber and vice-versa as per programmable profile.' compliance=' MIL-STD-810H / JSS55555/ JSS 50101' capabilities='Thermal Shock' image={Thermal} />

                    </div>

                </div>




            </div>
        </TransitionPage >
    )
}

function Facility({ name, spec, compliance, capabilities, image }) {
    return (
        // <AnimatedElement direction='from-down'>

        //     <div className='flex gap-[200px] bg-gray-200 p-4'>
        //         <div className='flex flex-col items-start flex-[2]'>
        //             <p className='text-[2em] font-semibold'>{name}</p>
        //             <div className='flex flex-col w-[80%]'>
        //                 <p className='text-justify'><span className='font-semibold'>Specifications:</span> {spec}</p>
        //                 <p className='text-justify'><span className='font-semibold'>Compliance:</span>  {compliance}</p>
        //                 <p className='text-justify'><span className='font-semibold'>Capabilities:</span> {capabilities}</p>
        //             </div>
        //         </div>
        //         <div className='flex-1'>

        //             <img className='rounded-lg w-[300px]' src={image} alt='ess1' />
        //         </div>

        //     </div>
        // </AnimatedElement>       
        <ViewElement animate={{ y: 0 }} initial={{ y: 10 }} >

            <div className='w-full'>
                <h1 className='mt-3 text-left text-[1.8rem] max-sm:text-[1.4rem]'>{name}</h1>
                <div className='  w-full flex max-sm:flex-col mt-4'>
                    <img className=' shadow-md w-[250px] max-sm:w-full  hover:scale-150 max-sm:hover:scale-100 z-50 transition' src={image} alt='ess1' />
                    <div className=' text-[16px] items-start justify-center flex flex-col w-full gap-10 max-sm:gap-3   bg-gray-100 p-4   rounded-s-none'>
                        <AnimatedElement direction='from-down'><p className='text-justify'><span className='font-semibold'>Specifications:</span> {spec}</p></AnimatedElement>
                        <AnimatedElement direction='from-down' delayAn='0.15'><p className='text-justify'><span className='font-semibold'>Compliance:</span>  {compliance}</p></AnimatedElement>
                        <AnimatedElement direction='from-down' delayAn='0.20'><p className='text-justify'><span className='font-semibold'>Capabilities:</span> {capabilities}</p></AnimatedElement>
                    </div>
                </div>
            </div>
        </ViewElement>
    )
}

export default ESS
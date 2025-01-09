import React from 'react'
import BgVideo from '../../images/Production/IMG_3781.webm'
import AnimatedElement from '../../components/AnimatedElement'

import TransitionPage from '../../TransitionPage'
import RevealText from '../../components/TextReveal2'

import Machinery from '../../images/Production/machinery.png'
import Microscope from '../../images/Production/microscope.png'
import Personnel from '../../images/Production/personnel.png'
import Automate from '../../images/Production/recovery.png'

function Production() {
    return (
        <TransitionPage>

            <div className='h-auto pb-14 bg-gray-100'>
                <div className='relative flex items-center justify-center '>
                    {/* <motion.h1 initial={{ x: 400 }} animate={{ x: 0 }} transition={{ duration: 2, type: 'spring', damping: 12, delay: 1 }} className='text-[4rem] font-bold uppercase absolute z-10 poppins text-white'>Electronics Manufacturing</motion.h1> */}
                    <div className='absolute z-40'>
                        <RevealText text='Electronics Manufacturing' css='uppercase text-[3rem] after:bg-black max-sm:text-[1rem] bg-black p-3 bg-opacity-60 font-bold text-white' />
                    </div>
                    <video muted autoPlay loop className='brightness-[0.8]  mix-blend-normal' height='50vh' width="100%">
                        <source src={BgVideo} />
                    </video>
                    <div className='absolute h-full w-full top-0 left-0 '></div>
                </div>
                <div className='flex max-sm:flex-col gap-5 mt-10 px-14 max-sm:px-3'>

                    {/* <div className='flex-[1] h-full'>
                    <img src={Img1} alt='ess1' />
                </div> */}
                    <AnimatedElement direction='from-down'>
                        <div className='flex-[3]  h-full  px-10 max-sm:px-2'>
                            <p className='text-justify'>
                                <RevealText text='The Electronics Manufacturing' css='text-[2rem] text-left after:bg-black max-sm:text-[1.2rem] font-bold uppercase' />

                                <span className='text-[16px]'>
                                    is, where raw materials are transformed into
                                    finished products with precision and efficiency. Comprising skilled technicians, supervisors, and engineers, this department makes sure that all the different steps in making products undertaken smoothly and on time to meet what the customers desire.
                                    Whether it's assembly lines, machining centers, or custom fabrication, our production facilities are equipped with state-of-the-art machinery and technologies to streamline operations and
                                    enhance productivity.


                                </span>
                            </p>
                        </div>
                    </AnimatedElement>
                </div>

                <div className='mt-10'>
                    {/* <h1 className='heading uppercase'>Facilities</h1> */}

                    <RevealText text='Facilities' css='uppercase text-[3rem] max-sm:text-[2rem] after:bg-[#425472] font-bold text-[#425472]' />

                    <div className='flex flex-col font-semibold max-sm:font-normal items-start px-[100px] max-sm:px-3  gap-3 mt-6'>

                        {/* <AnimatedElement direction='from-down' >
                            <h1 className='text-left max-sm:text-justify'><li> SMT facility is having machineries like Automatic Screen Printer, Automatic Pick & Place Machine, 12 Zone Reflow oven, Semi-Automatic cleaning machine, Automated Conformal Coating Machine.</li></h1>
                        </AnimatedElement>
                        <AnimatedElement direction='from-down' delayAn='0.1'>

                            <h1 className='text-left max-sm:text-justify'><li> Manual Assembly along with cable assembly personnel are well experienced and trained. All items are produced conformed to IPC guidelines.</li></h1>
                        </AnimatedElement>
                        <AnimatedElement direction='from-down' delayAn='0.13'>

                            <h1 className='text-left max-sm:text-justify'><li> Trained IPC certified personnel are available to inspect PCB and cable assemblies. The facility is having devices like Lynx Evo Optical Microsystem having 3D optics, Digital video Microscope.</li></h1>
                        </AnimatedElement>
                        <AnimatedElement direction='from-down' delayAn='0.16'>

                            <h1 className='text-left max-sm:text-justify'><li> Testing facility is staffed with trained and experienced man power. The facility is having all latest model of measuring instruments. Various Jigs are in place to automatize testing process to match with speed of production.</li></h1>
                        </AnimatedElement> */}

                        <div className='flex max-sm:flex-col  items-center justify-center w-full'>
                            <AnimatedElement direction='from-down'>
                                <Facility fac='Machineries like Automatic Screen Printer, Automatic Pick & Place Machine and more' img={Machinery} width={100} />
                            </AnimatedElement>

                            <AnimatedElement direction='from-down' delayAn='0.2'>
                                <Facility fac='Automatized testing process to match with speed of production.' img={Automate} width={100} />
                            </AnimatedElement>

                            <AnimatedElement direction='from-down' delayAn='0.23'>
                                <Facility fac='Devices like Lynx Evo Optical Microsystem having 3D optics, Digital video Microscope.' img={Microscope} width={100} />
                            </AnimatedElement>

                            <AnimatedElement direction='from-down' delayAn='0.26'>
                                <Facility fac='Testing facility is staffed with trained and experienced man power' img={Personnel} width={100} />
                            </AnimatedElement>

                        </div>
                        {/* <div className='flex flex-col max-sm:flex-col items-center justify-center w-full gap-14 mt-10'>
                            <AnimatedElement direction='from-left'>
                                <div>
                                    <h1 className='text-[3rem] max-sm:text-[1.5rem] max-sm:font-medium font-normal text-left'>Stencil Printer & Pick and Place Machine</h1>
                                    <img className='' src={Img5} />
                                </div>
                            </AnimatedElement>
                            <AnimatedElement direction='from-left'>

                                <div>
                                    <h1 className='text-[3rem] max-sm:text-[1.5rem] max-sm:font-medium font-normal text-left'>Reflow Oven</h1>
                                    <img className='' src={Img2} alt='img1' />
                                </div>
                            </AnimatedElement>
                            <AnimatedElement direction='from-left'>

                                <div>
                                    <h1 className='text-[3rem] max-sm:text-[1.5rem] max-sm:font-medium font-normal text-left'>Digital Microscope</h1>
                                    <img className='' src={Img4} alt='img3' />
                                </div>
                            </AnimatedElement>
                            <AnimatedElement direction='from-left'>

                                <div>
                                    <h1 className='text-[3rem] max-sm:text-[1.5rem] max-sm:font-medium font-normal text-left'>Trained Personnel</h1>
                                    <img className='' src={Img6} />
                                </div>
                            </AnimatedElement>
                        </div> */}
                    </div>
                    {/* <Facility name="1. Reflow Oven" desc="A Reflow Oven is a machine used primarily
                            for reflow soldering of electronic components to
                            PCB’s. PCB’s being processed travel through the
                            oven and through each zone at a controlled rate.
                            
                            Technicians adjust the conveyor speed and
                            zone temperatures to achieve a known time and temperature profile." img={Reflow} />
                            
                            <Facility name="2. Pick and Place Machine" desc="A Pick and Place machine is a specialized industrial automation tool used in PCB manufacturing and assembly processes.
                            A Pick-and-Place machine, also known as a surface-mount technology (SMT) machine, is a type of automated equipment that places surface-mount components, such as capacitors, resistors, and integrated circuits, onto printed circuit boards (PCB’s) in the assembly of electronics." img={PickPlace} />
                            
                            <Facility name="3. Stencil Printer" desc="A Printed Circuit Board (PCB) stencil 
                    is typically a thin sheet of stainless steel 
                    with openings that are generally laser-cut and 
                    is utilized for the application of solder paste to
                    a circuit board to attach surface-mounted components. " img={PickPlace} />
                    
                    <Facility name="4. Stereo Microscope" desc="Lynx EVO is an ergonomic zoom stereo microscope used for inspection, in Quality and Production departments in any industry where accuracy and quality are critical factor " img={StencilImg} /> */}
                </div>


                {/* <AnimatedElement direction='from-down'>
                <div className='flex items-center justify-center gap-4 my-10'>
                
                
                <img width="300" src={Img2} alt='img1' />
                <img width="300" src={Img3} alt='img2' />
                <img width="300" src={Img4} alt='img3' />
                </div>
                </AnimatedElement> */}

            </div >
        </TransitionPage>
    )
}

export default Production

function Facility({ fac, img, width }) {
    return (

        <div className='font-bold scale-90 text-[16px] text-justify max-w-[500px] flex flex-1 flex-col-reverse gap-3 items-center justify-evenly rounded-xl bg-gray-200 text-[#2f3746] p-3 py-[50px] max-sm:py-4 shadow-md hover:scale-95 transition'>
            <p>{fac}</p>
            <img alt='mech' src={img} width={width} />
        </div>
    )
}
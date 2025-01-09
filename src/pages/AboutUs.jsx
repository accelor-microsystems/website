import React, { useEffect } from 'react'
import BG from '../images/com2.jpg'
import MD from '../images/md2.jpg'
import MD2 from '../images/md-bgr.png'
import CEO from '../images/ceo2-nbg.png'
import SalilDey from '../images/sll-nbg.png'
import PPS from '../images/pps-nbg.png'
import RanjitSingh from '../images/rnjt-nbg.png'
import ShagunRana from '../images/sgn-nbg.png'
import AnimatedElement from '../components/AnimatedElement'
import TransitionPage from '../TransitionPage'
import { animate, useMotionValue, useTransform } from 'framer-motion'
import RevealText from '../components/TextReveal2'
import NumberCounter from '../components/NumberCount'


function AboutUs() {
    // const count = useMotionValue(0);
    // const rounded = useTransform(count, Math.round);
    // useEffect(() => {
    //     const animation = animate(count, 50, {
    //         duration: 2
    //     });
    //     animate();
    // }, []);


    return (
        <TransitionPage>
            <img alt='Accelor' className='rounded-xl ' src={BG} />
            <div className='min-h-[90vh] flex flex-col  bg-gray-100 relative'>
                {/* <img alt='Accelor' width={700} className='mix-blend-multiply absolute opacity-10' src={ACC} /> */}

                {/* <div className=' absolute top-0 z-10'>
                <Circles />
            </div> */}
                {/* <AnimatedElement direction='from-down'> */}

                <div className='flex flex-col gap-6 pt-10 items-center bg-[#425472] text-[#e7eaed] px-[10%] max-sm:px-3'>
                    {/* <h1 className='text-[3rem] font-bold poppins  uppercase '>About Accelor</h1> */}
                    <RevealText text='About Accelor' css='text-[2.5rem] after:bg-[#fff] max-sm:text-[26px] text-white  uppercase font-bold' />

                    <div className='flex max-sm:flex-col items-center justify-evenly gap-7'>
                        <div className='flex-[3] text-[16px] flex flex-col gap-3'>
                            <AnimatedElement direction='from-down'>

                                <p className='text-justify '>
                                    Accelor Microsystems is an ISO9001:2015 certified firm founded in 2010 by a passionate team of engineers with multidisciplinary expertise, located in the Northern Indian city of Mohali. It is well equipped with in-house hardware and software development capabilities, 5s compliant Lean Manufacturing facilities and Environmental Test Lab under one roof. Accelor Microsystems align itself with “Make in India” initiative of GoI.

                                </p>
                            </AnimatedElement>
                            <AnimatedElement direction='from-down' delayAn='0.1'>

                                <p className='text-justify '>
                                    Accelor is a manufacturer of industrial, defence and aerospace systems with in-house R&D and state of the art manufacturing facility. Accelor is having inhouse QA with IPC certified specialists to ensure quality standards as per applicable IPC or MIL standards. R&D team has expertise in Hardware designing and simulation, Software Development, Mechanical Designing and simulation, AI and Machine learning application development etc. Accelor holds capability from prototype to mass production.
                                </p>
                            </AnimatedElement>
                            <AnimatedElement direction='from-down' delayAn='0.15'>

                                {/* <p className='text-justify '>
                                    Accelor Microsystems is located in the Industrial Focal Point, Mohali, Punjab with a plant size of area 445 Sq. Yards, and total built up area of 6240.5 Sq. Ft. Being in the city of Mohali, Accelor holds the advantage of being in vicinity of TBRL- DRDO, Chandigarh. Our Team has already delivered many of the defence products to major stakeholders with QA clearances from DGQA, R&QA TBRL and R&QA RCI.
                                </p> */}
                            </AnimatedElement>
                        </div>

                        {/* <div className='flex-1'>
                            <AnimatedElement direction='from-right'>
                                <img alt='Accelor' className='rounded-xl ' src={BG} />
                            </AnimatedElement>
                        </div> */}
                    </div>
                </div>
                {/* </AnimatedElement> */}
                <svg className=' bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="#425472"><path d="M0 0v99.7C62 69 122.4 48.7 205 66c83.8 17.6 160.5 20.4 240-12 54-22 110-26 173-10a392.2 392.2 0 0 0 222-5c55-17 110.3-36.9 160-27.2V0H0Z" opacity=".5"></path><path d="M0 0v74.7C62 44 122.4 28.7 205 46c83.8 17.6 160.5 25.4 240-7 54-22 110-21 173-5 76.5 19.4 146.5 23.3 222 0 55-17 110.3-31.9 160-22.2V0H0Z"></path></svg>

                {/* 
                <div className='px-[7%] bg-e'>
                    <RevealText text='OUR STRENGTHS' css='text-[3rem] max-sm:text-[30px] text-[#425472] uppercase font-bold' />
                    <div className='flex flex-col mt-7 gap-3'>

                        <AnimatedElement direction='from-down'>
                            <p className='text-left max-sm:text-justify max-sm:text-[14px] text-[1.1em]'><li>Well-equipped high-end facilities in R&D, Electronics Manufacturing and Testing, Mechanical Manufacturing, Environmental Test Lab, QA and documentation.</li></p>
                        </AnimatedElement>
                        <AnimatedElement direction='from-down' delayAn='0.1'>

                            <p className='text-left max-sm:text-justify max-sm:text-[14px] text-[1.1em]'><li>Manufacturing facility complaint with Defence manufacturing processes as per MIL/IPC Standards.</li></p>
                        </AnimatedElement>
                        <AnimatedElement direction='from-down' delayAn='0.13'>

                            <p className='text-left max-sm:text-justify max-sm:text-[14px] text-[1.1em]'><li>ToT holder of various products from TBRL-DRDO and NML Jameshdpur.</li></p>
                        </AnimatedElement>
                        <AnimatedElement direction='from-down' delayAn='0.16'>

                            <p className='text-left max-sm:text-justify max-sm:text-[14px] text-[1.1em]'><li>To be future ready, Accelor has acquired land of 18000 sq. feet from Department of Industries Punjab to build a mass production unit with covered area of 24000 sq. feet. This new unit situated at Industrial Focal point near Air Force Station, Halwara, Punjab will be fully functional by 2025.</li></p>
                        </AnimatedElement>
                        <AnimatedElement direction='from-left'>
                            <div className='flex max-sm:flex-col gap-10 place-self-center  w-full py-10 max-sm:py-4 justify-center'>
                                <div className=''>
                                    <div className='text-black flex items-center justify-center text-[3rem] archivo font-semibold'><NumberCounter from={0} to={50} />+</div>
                                    <p className='text-[1.2rem] max-sm:text-[16px]  font-semibold'>Experienced Professionals</p>
                                </div>
                                <div className=''>
                                    <div className='text-black flex items-center justify-center text-[3rem] archivo font-semibold'><NumberCounter from={0} to={12} /></div>

                                    <p className='text-[1.2rem] max-sm:text-[16px] font-semibold'>Years of experience<br /> working with DRDO</p>
                                </div>
                                <div className=''>
                                    <div className='text-black flex items-center justify-center text-[3rem] archivo font-semibold'><NumberCounter from={0} to={80} duration={3} />+</div>

                                    <p className='text-[1.2rem] max-sm:text-[16px] font-semibold'>Orders to various Labs</p>
                                </div>
                            </div>
                        </AnimatedElement>
                    </div>
                </div> */}

                <div className='flex flex-wrap items-center py-10 relative justify-center gap-3'>
                    {/* <h1 className='text-[2.5rem] text-[#425472] font-bold'>OUR CORE TEAM</h1> */}
                    <RevealText text='OUR CORE TEAM' css='text-[2.5rem] after:bg-[#425472] max-sm:text-[26px] text-[#425472]  uppercase font-bold' />


                    <div className='flex flex-wrap gap-3 mt-4 justify-center w-full'>
                        <TeamMember img={MD2} name='Sh. Mukhwinder Singh' designation='Managing Director & Head R&D' qualification='(MTech. - ECE)' />
                        <TeamMember width={240} img={CEO} name='Dr. Manvjeet Kaur' designation='Director & CEO' qualification='(PhD in CSE)' />
                        <TeamMember img={SalilDey} name='Dr. Salil Dey' designation='Director Operations' qualification='(PhD in Quality Management)' />
                    </div>
                    <div className='flex flex-wrap gap-3 justify-center w-full'>
                        <TeamMember img={PPS} name='Dr. Prince Pal Singh' designation='Head Mechanical Engineering' qualification='(PhD in Mechanical Engineering)' />
                        <TeamMember img={RanjitSingh} name='Dr. Ranjit Singh' designation='Head AMETL' qualification='(Phd in Mechanical Engineering)' />
                        <TeamMember img={ShagunRana} name='Ms. Shagun Rana' designation='CIO and GM (Admin)' qualification='(MTech. CSE & IS)' />
                    </div>
                </div>





                {/* <svg className=' rotate-180 bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="#425472"><path d="M0 1v99c134.3 0 153.7-99 296-99H0Z" opacity=".5"></path><path d="M1000 4v86C833.3 90 833.3 3.6 666.7 3.6S500 90 333.3 90 166.7 4 0 4h1000Z" opacity=".5"></path><path d="M617 1v86C372 119 384 1 196 1h421Z" opacity=".5"></path><path d="M1000 0H0v52C62.5 28 125 4 250 4c250 0 250 96 500 96 125 0 187.5-24 250-48V0Z"></path></svg> */}
                {/* <svg className=' rotate-180 bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="#425472"><path d="M0 0v99.7C62 69 122.4 48.7 205 66c83.8 17.6 160.5 20.4 240-12 54-22 110-26 173-10a392.2 392.2 0 0 0 222-5c55-17 110.3-36.9 160-27.2V0H0Z" opacity=".5"></path><path d="M0 0v74.7C62 44 122.4 28.7 205 46c83.8 17.6 160.5 25.4 240-7 54-22 110-21 173-5 76.5 19.4 146.5 23.3 222 0 55-17 110.3-31.9 160-22.2V0H0Z"></path></svg> */}
                {/* <svg className=' rotate-180 bottom-0' xmlns="http://www.w3.org/2000/svg" viewBox="0 0 1000 100" fill="#425472"><path d="M1000 100C500 100 500 64 0 64V0h1000v100Z" opacity=".5"></path><path d="M1000 100C500 100 500 34 0 34V0h1000v100Z" opacity=".5"></path><path d="M1000 100C500 100 500 4 0 4V0h1000v100Z"></path></svg> */}


                {/* <div className=' px-[10%] py-10 flex max-sm:px-3 max-sm:pt-7 max-sm:flex-col-reverse items-center justify-center bg-gradient-to-r from-[#6d222e] to-[#505da0] text-white'>

                    <div className='flex-1'>
                        <AnimatedElement direction='from-left'>
                            <img src={MD2} width={300} />
                        </AnimatedElement>
                    </div>
                    <div className='flex-[2]'>
                        <AnimatedElement direction='from-right'>
                            <h1 className='text-[2.5rem] max-sm:text-[2rem] max-sm:text-center font-semibold text-left'>Our Managing Director</h1>
                            <p className='text-justify'>Lorem ipsum dolor sit amet, consectetur adipisicing elit. Quam sit vero consequatur, odit dolores id tempore dolorem. Obcaecati earum sed sint perferendis, autem non culpa ab rerum tempore, recusandae, voluptatibus repellat inventore ut. Dicta, odit! Nihil neque voluptates, deleniti quod odit vel tenetur eligendi natus quas. Expedita alias corrupti dolores deserunt rem cupiditate reprehenderit facilis quo eligendi quasi dolore esse qui consequatur nisi atque repellendus laborum quod sunt, libero maxime officiis pariatur laboriosam. Dolorum in eaque nostrum soluta at illo vero impedit debitis ut, facere aliquam eius veniam neque laborum.</p>

                        </AnimatedElement>
                    </div>
                </div> */}



            </div>
        </TransitionPage >
    )
}

function TeamMember({ name, img, designation, qualification, css = '', width = 150 }) {
    return (
        <div className=' flex flex-col items-center justify-end bg-slate-200 group  w-[300px] pb-5'>

            <img src={img} width={width} className='grayscale  group-hover:grayscale-0  transition duration-200 ' />
            <div className=''>
                <h1 className=' archivo font-semibold mt-2'>{name}</h1>
                <p className='archivo text-[14px]'> {designation}</p>
                <p className='archivo text-[14px]'>{qualification}</p>
            </div>
        </div >
    )
}



export default AboutUs
import React from 'react'
import ValueCard from '../../components/About/ValueCard'
import MissileSVG from '../../components/MissileSVG'
import TransitionPage from '../../TransitionPage'
import AnimatedElement from '../../components/AnimatedElement'
import Values from '../../components/About/Values'
import ObjectiveImg from '../../images/objbg.png'
import { motion } from 'framer-motion'
import ViewElement from '../../components/ViewElement'
import MissionImg from '../../images/leadership.png'
import VisionImg from '../../images/vision.png'
import RevealText from '../../components/TextReveal2'

function Mission() {

    const objectives = [
        'Develop and deploy innovative defense technologies to enhance national security',
        'Strengthen strategic partnerships to broaden our reach and capabilities',
        'Ensure operational efficiency and cost-effectiveness in all endeavours',
        'Foster a culture of continuous improvement and learning among our workforce',
        'Maintain the highest standards of compliance and ethical conduct in all operations',
        'Enhance customer satisfaction through responsive and tailored solutions',
        'Promote diversity and inclusion within our organization and the broader defense community',
        'Invest in research and development to stay at the forefront of emerging threats and technologies',
        'Enhance risk management practices to mitigate potential challenges and disruptions',
        'Contribute to the well-being and resilience of our communities through responsible corporate citizenship',
    ]

    return (
        <TransitionPage>

            <div className=' h-auto bg-gray-100 overflow-hidden py-10 relative'>
                {/* <h1 className='poppins  absolute font-bold text-[6rem] select-none right-5 top-2 text-[#ebebeb] uppercase'>About Accelor </h1> */}


                {/* <h1 className='text-[2.4rem] font-bold'>ABOUT US</h1> */}


                {/* <div className='absolute -rotate-45 top-[200px] mx-auto'>
                    <MissileSVG width={700} height={700} />
                </div> */}
                <AnimatedElement direction="from-right">
                    <div className='flex  flex-row-reverse max-sm:flex-col  max-sm:px-0 px-[100px]'>
                        <div className='flex-1 flex  items-center border-2 bg-gray-100 justify-center'>
                            <img className='' width={250} src={MissionImg} />
                        </div>
                        <div className='flex flex-col p-4 bg-gray-200 justify-center flex-[2]'>
                            {/* <div className='bg-[#2D3139] h-[20px] w-full absolute slide-up  '></div> */}
                            <div className='relative flex'>
                                {/* <h1 className='text-[3rem] text-[#425472]  font-bold poppins uppercase'>Our Mission</h1> */}
                                <RevealText text='Our Mission' css='text-[3rem] max-sm:text-[2rem]  text-[#425472] uppercase font-bold' />



                                {/* <div className='absolute flex -rotate-45'>
                                <MissileSVG />
                            </div> */}
                            </div>
                            <AnimatedElement direction='from-down'>

                                <p className='text-[#2D3139]  poppins text-justify '>Our mission is to deliver top-notch/supreme Défense solutions, maintaining utmost integrity, reliability, and excellence. We're dedicated to pioneering technologies that ensure security and peace for our nation and allies. Through collaboration and continuous improvement, we aim to meet evolving needs while upholding the highest standards.
                                </p>
                            </AnimatedElement>

                        </div>
                    </div>
                </AnimatedElement>




                <AnimatedElement direction="from-left" delayAn='0.7' >
                    <div className='flex px-[100px] max-sm:flex-col  max-sm:px-0'>
                        <div className='flex-1 flex items-center border-2 border-gray-100 bg-gray-200 justify-center'>
                            <img alt='vision' className='' width={250} src={VisionImg} />
                        </div>
                        <div className=' bg-gray-100 flex p-4 flex-col justify-center flex-[2]'>
                            <div className='relative flex'>
                                {/* <h1 className='text-[3rem] text-[#425472] font-bold poppins uppercase'>Our Vision</h1> */}
                                <RevealText text='Our Vision' css='text-[3rem] text-[#425472] max-sm:text-[2rem] uppercase font-bold' />

                                <div className='absolute flex -rotate-45 -right-[40px]'>
                                    {/* <MissileSVG /> */}
                                </div>
                            </div>
                            <p className=' text-justify  text-[#2D3139] poppins '>Our vision is to be the trusted partner of Défense solutions, recognized for our agility, innovation, and unwavering commitment to security. We aim to stay ahead of the curve, providing dependable and impactful solutions that go above and beyond. Our ultimate goal is to contribute to a safer world by leveraging our expertise and dedication to excellence in everything we do.
                            </p>
                        </div>
                    </div>
                </AnimatedElement>

                {/* <div className='bg-[#425472] py-[40px] px-[40px] my-[100px]'>
                    <h1 className='text-[3rem] text-[white]  font-bold poppins uppercase'>Our Values</h1>
                    <div className='flex flex-wrap items-center justify-between gap-x-5 gap-y-8 mt-7'>

                        <AnimatedElement direction='from-left' width='30%' >
                            <ValueCard width="30%" heading="Integrity" content="Integrity is at the core of our values. It guides everything we do, from our interactions with clients to our internal processes." />
                        </AnimatedElement>

                        <AnimatedElement direction='from-down' width='30%' >
                            <ValueCard width="30%" heading="Innovation" content="We foster creativity and forward thinking to develop new solutions, driving progress and delivering value to clients and communities." />
                        </AnimatedElement>


                        <AnimatedElement direction='from-right' width='30%' >
                            <ValueCard width="30%" heading="Teamwork" content="Collaboration is key. By working together effectively, we leverage diverse perspectives and skills to achieve our goals and deliver exceptional results." />

                        </AnimatedElement>

                        <AnimatedElement direction='from-left' width='30%' >

                            <ValueCard width="30%" heading="Excellence" content=" Pursuing high standards, we continuously challenge ourselves to exceed expectations, delivering superior quality and value in all that we do." />
                        </AnimatedElement>




                        <AnimatedElement direction='from-down' width='30%' >

                            <ValueCard width="30%" heading="Collaboration" content=" Internally and externally, we promote a culture of collaboration, pooling strengths and resources to achieve shared goals and mutual success." />
                        </AnimatedElement>

                        <AnimatedElement direction='from-right' width='30%'  >
                            <ValueCard width="30%" heading="Adaptability" content="Embracing change, we remain agile and open-minded, readily adjusting to new challenges and opportunities to ensure ongoing success and growth." />

                        </AnimatedElement>




                    </div>
                </div> */}


                <AnimatedElement direction="from-down" delayAn='1.4'>
                    <div className=' px-[100px]   max-sm:px-0'>
                        <div className='flex flex-row-reverse max-sm:flex-col  justify-evenly'>
                            <div className='border-2 flex-[1] flex items-center justify-center bg-gray-100'>
                                <img src={ObjectiveImg} alt='objective' width='100%' />
                            </div>
                            <div className=' bg-gray-200 flex-[2] flex flex-col p-6'>
                                {/* <h1 className='text-[3rem] text-[#425472] text-left font-bold poppins uppercase'> Our Objectives</h1> */}
                                <div className='place-self-start'>

                                    <RevealText text='Our Objectives' css='text-[3rem] max-sm:text-[30px] text-[#425472]  uppercase font-bold' />
                                </div>


                                {objectives.map((item, index) => {
                                    return (
                                        <Objective obj={item} />
                                    )
                                })}

                                {/* <p className='text-left'>
                                1	Develop and deploy innovative defense technologies to enhance national security.<br />
                                2	Strengthen strategic partnerships to broaden our reach and capabilities.<br />
                                3	Ensure operational efficiency and cost-effectiveness in all endeavours.<br />
                                4	Foster a culture of continuous improvement and learning among our workforce.<br />
                                5	Maintain the highest standards of compliance and ethical conduct in all operations.<br />
                                6	Enhance customer satisfaction through responsive and tailored solutions.<br />
                                7	Promote diversity and inclusion within our organization and the broader defense community.<br />
                                8	Invest in research and development to stay at the forefront of emerging threats and technologies.<br />
                                9	Enhance risk management practices to mitigate potential challenges and disruptions.<br />
                                10	Contribute to the well-being and resilience of our communities through responsible corporate citizenship.<br />

                            </p> */}
                            </div>
                        </div>
                    </div>
                </AnimatedElement>

                {/* <AnimatedElement direction="from-down"> */}

                <Values />
                {/* </AnimatedElement> */}


            </div >
        </TransitionPage >
    )
}

export default Mission


function Objective({ obj }) {
    return (

        <div className=' rounded-full w-[fit-content]  py-2 relative'>
            <h1 className='poppins text-gray-800 max-sm:text-justify text-left list-disc relative z-10'><li>{obj}</li></h1>
            <ViewElement initial={{ width: 0 }} animate={{ width: '100%' }} transition={{ duration: 1 }}>
                {/* <motion.div className=' absolute top-0 left-0 h-full w-full'>

                </motion.div> */}
            </ViewElement>
        </div>
    )
}
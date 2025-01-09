import React from 'react'
import MissileSVG from '../components/MissileSVG'
import AnimatedElement from '../components/AnimatedElement'
import ValueCard from '../components/About/ValueCard'
import { motion } from 'framer-motion'
import transition from '../transition'

function About() {
    return (
        <>

            <div className=' h-auto py-[40px] relative bg-gray-100'>
                {/* <h1 className='poppins  absolute font-bold text-[6rem] select-none right-5 top-2 text-[#ebebeb] uppercase'>About Accelor </h1> */}


                {/* <h1 className='text-[2.4rem] font-bold'>ABOUT US</h1> */}



                <div className='mt-10 flex flex-col items-start relative px-[60px]'>
                    {/* <div className='bg-[#2D3139] h-[20px] w-full absolute slide-up  '></div> */}
                    <div className='relative flex items-center justify-center'>
                        <h1 className='text-[3rem] text-[#2D3139]  font-bold poppins uppercase'>Our Mission</h1>
                        <div className='absolute flex -rotate-45 -right-[40px]'>
                            <MissileSVG />
                        </div>
                    </div>
                    <p className='text-[1.2rem] w-[70%] text-[#2D3139] poppins text-justify '>Our mission is to deliver top-notch/supreme Défense solutions, maintaining utmost integrity, reliability, and excellence. We're dedicated to pioneering technologies that ensure security and peace for our nation and allies. Through collaboration and continuous improvement, we aim to meet evolving needs while upholding the highest standards.
                    </p>

                </div>


                {/* <AnimatedElement direction='from-right'> */}


                <div className='mt-10 flex flex-col items-end px-[60px]'>
                    <div className='relative flex items-center justify-center'>
                        <h1 className='text-[3rem] text-[#2D3139] font-bold poppins uppercase'>Our Vision</h1>
                        <div className='absolute flex -rotate-45 -right-[40px]'>
                            <MissileSVG />
                        </div>
                    </div>
                    <p className='text-[1.2rem] w-[70%] text-justify text-[#2D3139] poppins '>Our vision is to be the trusted partner of Défense solutions, recognized for our agility, innovation, and unwavering commitment to security. We aim to stay ahead of the curve, providing dependable and impactful solutions that go above and beyond. Our ultimate goal is to contribute to a safer world by leveraging our expertise and dedication to excellence in everything we do.
                    </p>
                </div>
                {/* </AnimatedElement> */}

                <div className='bg-[#425472] py-[40px] px-[40px] mt-10'>
                    <h1 className='text-[3rem] text-[white]  font-bold poppins uppercase'>Our Values</h1>
                    <div className='flex flex-wrap items-center justify-evenly gap-x-5 gap-y-8 mt-7'>

                        <ValueCard width="30%" heading="Integrity" content="Integrity is at the core of our values. It guides everything we do, from our interactions with clients to our internal processes." />
                        <ValueCard width="30%" heading="Innovation" content="We foster creativity and forward thinking to develop new solutions, driving progress and delivering value to clients and communities." />
                        <ValueCard width="30%" heading="Teamwork" content="Collaboration is key. By working together effectively, we leverage diverse perspectives and skills to achieve our goals and deliver exceptional results." />
                        <ValueCard width="30%" heading="Excellence" content=" Pursuing high standards, we continuously challenge ourselves to exceed expectations, delivering superior quality and value in all that we do." />
                        <ValueCard width="30%" heading="Collaboration" content=" Internally and externally, we promote a culture of collaboration, pooling strengths and resources to achieve shared goals and mutual success." />
                        <ValueCard width="30%" heading="Adaptability" content="Embracing change, we remain agile and open-minded, readily adjusting to new challenges and opportunities to ensure ongoing success and growth." />


                    </div>
                </div>



            </div >

        </>
    )
}

export default About
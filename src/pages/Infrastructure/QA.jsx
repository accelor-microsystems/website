import React from 'react'
import QAImg from '../../images/qa/qa.jpg'
import QAImg2 from '../../images/qa/qa2.png'
import { motion } from 'framer-motion'
import AnimatedElement from '../../components/AnimatedElement'
import RevealText from '../../components/TextReveal2'
function QA() {
    return (
        <div className='bg-gray-100 h-auto overflow-hidden'>
            <div className='w-full relative bg-black flex items-center justify-center'>

                <img alt='qa-bg' className='opacity-80' src={QAImg} />
                {/* <motion.h1 initial={{ x: 400 }} animate={{ x: 0 }} transition={{ duration: 2, type: 'spring', damping: 12, delay: 1 }} className='text-[4rem] absolute z-10 text-white font-semibold gradient-text  uppercase '>Qualty Assurance</motion.h1> */}
                <div className='absolute'>
                    <RevealText text='Quality Assurance' css='text-[3rem] after:bg-black max-sm:text-[1.5rem] bg-black p-3 bg-opacity-60 text-white uppercase font-bold' />
                </div>

            </div>
            <AnimatedElement direction='from-left' delayAn='0.2'>
                <div className='flex px-[100px] max-sm:px-3 max-sm:flex-col max-sm:mt-6 items-center justify-center'>
                    <div className='flex-[3] text-justify '>
                        <RevealText text='The Quality Assurance' css='text-[2rem] after:bg-black max-sm:text-[1.2rem] font-bold uppercase' />
                        <span>

                            (QA) department is the backbone of our commitment to delivering top-notch products and services. With a team of highly skilled professionals, we ensure that every process meets stringent quality standards. By fostering continuous improvement and extending quality practices across the organization.
                        </span>
                        <p className='font-medium mt-3 '>The QA department ensures all processes are carried out in full compliance with applicable standards.</p>
                    </div>

                    <div className='flex-1'>
                        <img alt='qa-img' src={QAImg2} />
                    </div>

                </div>
            </AnimatedElement>
        </div>
    )
}

export default QA
import React, { useRef } from 'react'
// import Integrity from '../../images/integrity.png'

import Integrity from '../SVG/Integrity'
import Teamwork from '../SVG/Teamwork'
import Excellence from '../SVG/Excellence'
import Innovation from '../SVG/Innovation'
import Collab from '../SVG/Collab'
import Adap from '../SVG/Adap'
import AnimatedElement from '../AnimatedElement'
import { motion } from 'framer-motion'
import ViewElement from '../ViewElement'
import RevealText from '../TextReveal2'

function Values2() {
    let svgWidth = 80;
    let svgHeight = 80;
    const constraintsRef = useRef(null)

    return (

        <div className='relative py-10 px-7 max-sm:px-2 rounded-2xl w-full  '>
            {/* <h1 className='text-[3rem] text-[#425472]  font-bold poppins uppercase'>Our Values</h1> */}
            <h2 className='absolute text-[17px] top-1 right-3 font-bold text-[#606060]'>DRAGGABLE</h2>
            <motion.div ref={constraintsRef} className='flex flex-wrap items-center justify-center relative  w-full   gap-16  '>

                <motion.div drag dragConstraints={constraintsRef}><ValueIcon icon={<Integrity w={svgWidth} h={svgHeight} />} name='Integrity' content="Integrity is at the core of our values. It guides everything we do, from our interactions with clients to our internal processes." /></motion.div>
                <motion.div drag dragConstraints={constraintsRef}><ValueIcon icon={<Teamwork w={svgWidth} h={svgHeight} />} name='Teamwork' content="Teamwork is key. By working together effectively, we leverage diverse perspectives and skills to achieve our goals and deliver exceptional results." /></motion.div>
                <motion.div drag dragConstraints={constraintsRef}><ValueIcon icon={<Excellence w={svgWidth} h={svgHeight} />} name='Excellence' content="Pursuing high standards, we continuously challenge ourselves to exceed expectations, delivering superior quality and value in all that we do" /></motion.div>
                <motion.div drag dragConstraints={constraintsRef}><ValueIcon icon={<Innovation w={svgWidth} h={svgHeight} />} name='Innovation' content="We foster creativity and forward thinking to develop new solutions, driving progress and delivering value to clients and communities." /></motion.div>
                <motion.div drag dragConstraints={constraintsRef}><ValueIcon icon={<Collab w={svgWidth} h={svgHeight} />} name='Collaboration' content="Collaboration is key. By working together effectively, we leverage diverse perspectives and skills to achieve our goals and deliver exceptional results." /></motion.div>
                <motion.div drag dragConstraints={constraintsRef}><ValueIcon icon={<Adap w={svgWidth} h={svgHeight} />} name='Adaptability' content="Embracing change, we remain agile and open-minded, readily adjusting to new challenges and opportunities to ensure ongoing success and growth." /></motion.div>
            </motion.div>
        </div>
    )
}

export default Values2;


function ValueIcon({ icon, name, content }) {
    const constraintsRef = useRef(null)
    return (



        <div className='flex items-center justify-center flex-col scale-90'>
            <motion.div className=' bg-gradient-to-r from-pink-600 to-purple-700 h-[100px]  w-[100px] rounded-full flex items-center justify-center'>
                <div className=' h-[80px] flex items-center justify-center fill-white   w-[80px] rounded-full group-hover:bg-gradient-to-r group-hover:fill-white transition duration-200 '>
                    {/* <img src={icon} alt={name} height='65' width='65' className='' /> */}

                    {icon}
                </div>
            </motion.div>
            <h1 className='poppins font-semibold uppercase mt-2'>{name}</h1>
            {/* <p className='text-white text-justify text-[1.1em] mt-3'>{content}</p> */}
        </div>



    )

}
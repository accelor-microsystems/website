import React from 'react'
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

function Values() {
    let svgWidth = 80;
    let svgHeight = 80;
    return (

        <div className=' h-auto flex flex-col py-10 items-center justify-center px-[60px]'>
            {/* <h1 className='text-[3rem] text-[#425472]  font-bold poppins uppercase'>Our Values</h1> */}
            <RevealText text='Our Values' css='text-[3rem] max-sm:text-[34px] text-[#425472]  uppercase font-bold' />

            <div className='flex max-sm:flex-col  gap-10 mt-5  '>
                <ValueIcon icon={<Integrity w={svgWidth} h={svgHeight} />} name='Integrity' content="Integrity is at the core of our values. It guides everything we do, from our interactions with clients to our internal processes." />
                <ValueIcon icon={<Teamwork w={svgWidth} h={svgHeight} />} name='Teamwork' content="Teamwork is key. By working together effectively, we leverage diverse perspectives and skills to achieve our goals and deliver exceptional results." />
                <ValueIcon icon={<Excellence w={svgWidth} h={svgHeight} />} name='Excellence' content="Pursuing high standards, we continuously challenge ourselves to exceed expectations, delivering superior quality and value in all that we do" />

                <ValueIcon icon={<Innovation w={svgWidth} h={svgHeight} />} name='Innovation' content="We foster creativity and forward thinking to develop new solutions, driving progress and delivering value to clients and communities." />
                <ValueIcon icon={<Collab w={svgWidth} h={svgHeight} />} name='Collaboration' content="Collaboration is key. By working together effectively, we leverage diverse perspectives and skills to achieve our goals and deliver exceptional results." />
                <ValueIcon icon={<Adap w={svgWidth} h={svgHeight} />} name='Adaptability' content="Embracing change, we remain agile and open-minded, readily adjusting to new challenges and opportunities to ensure ongoing success and growth." />
            </div>
        </div>
    )
}

export default Values;


function ValueIcon({ icon, name, content }) {
    return (


        <ViewElement animate={{ scale: 1 }} initial={{ scale: 0.3 }} >
            <motion.div className=' group p-3 px-8 flex-wrap rounded-lg  flex flex-col items-center bg-gray-200 transition duration-200 hover:scale-95'>
                <div className='  bg-gray-200 m-5 h-[100px]  w-[100px] rounded-full flex items-center justify-center'>
                    <div className=' bg-gradient-to-r from-pink-600 to-purple-700 h-[100px]  w-[100px] rounded-full flex items-center justify-center'>
                        <div className='bg-white h-[80px] flex items-center justify-center   w-[80px] rounded-full group-hover:bg-gradient-to-r group-hover:fill-white transition duration-200 '>
                            {/* <img src={icon} alt={name} height='65' width='65' className='' /> */}

                            {icon}
                        </div>
                    </div>
                </div>
                <h1 className='poppins font-bold uppercase'>{name}</h1>
                {/* <p className='text-white text-justify text-[1.1em] mt-3'>{content}</p> */}
            </motion.div>
        </ViewElement>

    )

}
import React from 'react'
import TransitionPage from '../../TransitionPage'
import { motion } from 'framer-motion'
import MD from '../../images/md2.jpg'
import RanjitSingh from '../../images/ranjitsingh2.jpg'
import SalilDey from '../../images/salildey2.png'
import AnimatedElement from '../../components/AnimatedElement'
import ViewElement from '../../components/ViewElement'
import RevealText from '../../components/TextReveal2'
function Team() {
    let intro = "Dr. Ranjit Singh, a Senior Manager of R&D at Accelor Microsystems, Mohali, Punjab, India, brings over 15 years of experience in teaching and research to his role. With expertise in Design-Manufacturing integration, he holds a Ph.D. in Mechanical Engineering from Sant Longowal Institute of Engineering and Technology. Dr. Singh's contributions include four books on die-casting die design and sustainability, along with over 10 research papers in prestigious international journals and conferences. He champions automation and user-friendly processes through the latest technology. Beyond work, his interests span reading, teaching, sketching, painting, singing, and cooking."
    return (
        <TransitionPage>
            <div className='min-h-[90vh] bg-gray-100'>
                {/* <div className='poppins text-[4rem] font-bold uppercase'><span className='stroked-text uppercase archivo '>Meet</span> Our Team</div> */}

                <div className='px-[60px] max-sm:px-3 flex flex-col gap-y-[80px] py-[60px]'>
                    <TeamMember title="Managing Director" intro={intro} name="Mr. Mukhwinder Singh" lead="Research & Development head" img={MD} />
                    <TeamMember title="Chief Executive Officer" intro={intro} name="Dr. Manvjeet Kaur (PhD)" lead="Admin head" img='' />
                    <TeamMember title="Chief Operating Officer" intro={intro} name="Dr. Salil Dey (PhD)" lead="Production head" img={SalilDey} />
                    <TeamMember title="Chief Quality officer" intro={intro} name="Dr. Ranjit Singh (PhD)" lead="Mechanical head" img={RanjitSingh} />

                </div>
            </div>
        </TransitionPage>
    )
}

export default Team;


function TeamMember({ title, intro, name, lead, img }) {
    return (
        // <AnimatedElement direction='from-down'>

        <div className=''>
            <ViewElement initial={{ x: -100 }} animate={{ x: 0 }} duration='0.6'>
                {/* <h1 className='text-[#5A6984] poppins text-[4rem] uppercase font-semibold text-left'>{title}</h1> */}
                <RevealText text={title} css='text-[#5A6984]  poppins text-[3rem] max-sm:text-[1.7rem] uppercase font-semibold text-left' />
            </ViewElement>
            {/* <hr className='border' /> */}
            <div className='flex max-sm:flex-col mt-5 gap-10'>
                <ViewElement initial={{ scale: 0.4 }} animate={{ scale: 1 }} duration='0.6'>
                    <div className='flex-[1] '><img height='250' width='250' alt={name} src={img} /></div>
                </ViewElement>

                <div className='flex-[3] '>
                    <AnimatedElement direction="from-down">
                        <h3 className='text-[2rem] max-sm:text-[1.5rem] font-semibold text-left'>{name}</h3>
                        <p className='text-left text-gray-500 max-sm:text-[14px] uppercase font-bold'>{lead}</p><hr />
                        <p className='text-justify mt-4'>{intro}</p>

                    </AnimatedElement >
                </div>
            </div>
        </div>
        // </AnimatedElement>
    )
}
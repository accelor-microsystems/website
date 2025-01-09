import React, { useState } from 'react'
import TransitionPage from '../TransitionPage'
import AnimatedElement from '../components/AnimatedElement'
import RevealText from '../components/TextReveal2'
import { useScroll } from 'framer-motion'
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
import Cover from '../images/pro-cover.jpg'
import ElecComp from '../images/elec-comp.jpg'
import CPU from '../images/cpu.png'

function Products() {
    const [electComp, setElecComp] = useState(false)
    const handleEC = () => {
        setElecComp((prev) => !prev)
    }
    const electronicsComponents = [
        'ULPGM V3 Payload Electronics & SAM',
        'ULPGM V2 Payload Electronics & SAM',
        'On board electronics control & activation systems',
        'Timer based/ Wireless Triggering Systems',
        'Simulator for ULPGM V2',
        'Simulator for ULPGM V3',
        'Electronics Activation Device(EAD) for Tactical Applications',
        'Wireless Control Cum Initiation System',
        'ULPGM V2 CAS (Control & Actuation System)',
        'ULPGM V3 CAS (Control & Actuation System)',
        'GSM based control unit with inbuilt navigation',
    ];

    const meteorologicalComponents = [
        'Digital Thermo Hygrometer',
        'Environmeter'
    ]
    const industrialComponents = [
        'Light Detection Unit',
        'Microcontroller based Firing Box',
        'Electronic Time Delay Generator & Syncronizer',
        'Electronic Counter for Fragment Velocity Measurement'
    ]
    const measuringComponents = [
        'Magrays',
        'Magstrics',
        'On Board Data Loggers'
    ]
    return (
        <TransitionPage>

            <div className='min-h-[90vh] flex flex-col bg-gray-100  max-sm:px-3'>
                <div className='relative flex flex-col items-center justify-center'>
                    <div className='bg-green-800 w-full'>

                        <img src={Cover} className='w-full mix-blend-multiply' />
                    </div>
                    <div className='absolute'>
                        <RevealText text='Our Manufacturing ' css='text-[3rem] max-sm:text-[2rem] font-bold poppins text-green-200 uppercase mb-8' />
                    </div>
                </div>

                <div className='p-10 flex text-[#202020] items-cener justify-start gap-10 bg-gray-200'>
                    <div className='flex flex-col items-start shadow-md bg-gray-100 p-2 justify-center leading-[44px]'>
                        <h1 className='uppercase text-[3rem] text-right font-bold'>Electronic <br />Components</h1>
                        {/* <h1 className='text-[3rem] font-bold'>MANUFACTURING</h1> */}
                    </div>

                    <div className='uppercase font-semibold flex text-[1rem] gap-7'>
                        <div className='text-left'>
                            <p className='my-4'>ULPGM V3 Payload Electronics & SAM</p>
                            <p className='my-4'>ULPGM V2 Payload Electronics & SAM</p>
                            <p className='my-4'>On board electronics control & activation systems</p>
                            <p className='my-4'>Timer based/ Wireless Triggering Systems'</p>
                            <p className='my-4'>Simulator for ULPGM V2</p>
                            <p className='my-4'>Simulator for ULPGM V3</p>
                        </div>
                        <div className='text-left'>
                            <p className='my-4'>Electronics Activation Device(EAD) for Tactical Applications</p>
                            <p className='my-4'>Wireless Control Cum Initiation System</p>
                            <p className='my-4'>ULPGM V2 CAS (Control & Actuation System)</p>
                            <p className='my-4'>ULPGM V3 CAS (Control & Actuation System)</p>
                            <p className='my-4'>GSM based control unit with inbuilt navigation</p>
                        </div>
                    </div>
                </div>

                <div className='p-10 flex  flex-row-reverse  text-[#202020] items-center justify-center gap-10 bg-gray-100'>
                    <div className='flex flex-col items-start shadow-md bg-gray-300 p-2 justify-center leading-[44px]'>
                        <h1 className='uppercase text-[3rem] text-left font-bold'>Meteorological<br />Equipments</h1>
                        {/* <h1 className='text-[3rem] font-bold'>MANUFACTURING</h1> */}
                    </div>
                    <div className='uppercase font-semibold flex text-[1.4rem] gap-7'>
                        <p className='my-4'>Digital Thermo Hygrometer</p>
                        <p className='my-4'>Environmeter</p>
                    </div>
                </div>

                <div className='p-10 flex text-[#202020] items-center justify-center gap-10 bg-gray-200'>
                    <div className='flex flex-col items-start shadow-md bg-gray-100 p-3 justify-center leading-[44px]'>
                        <h1 className='uppercase text-[1.2rem] text-right font-bold'>Industrial Process Control Equipment</h1>
                        <h1 className='text-[3rem] font-bold'>MANUFACTURING</h1>
                    </div>
                    <div className='uppercase font-semibold text-left flex text-[1rem] gap-7'>
                        <div>

                            <p className='my-4'>Light Detection Unit</p>
                            <p className='my-4'>Microcontroller based Firing Box</p>
                        </div>
                        <div>

                            <p className='my-4'>Electronic Time Delay Generator & Syncronizer</p>
                            <p className='my-4'>Electronic Counter for Fragment Velocity Measurement</p>
                        </div>
                    </div>
                </div>

                <div className='p-10 flex  flex-row-reverse  text-[#202020] items-center justify-center gap-10 bg-gray-100'>
                    <div className='flex flex-col items-start shadow-md bg-gray-300 p-3 justify-center leading-[44px]'>
                        <h1 className='uppercase text-[3rem] text-left font-bold'>Measuring<br />Equipments</h1>
                        {/* <h1 className='text-[3rem] font-bold'>MANUFACTURING</h1> */}
                    </div>
                    <div className='uppercase font-semibold flex items-center  justify-center text-[1.4rem] gap-7'>
                        <p className='my-4'>Magrays</p>
                        <p className='my-4'>Magstrics</p>
                        <p className='my-4'>On Board data loggers</p>
                    </div>
                </div>


            </div>

        </TransitionPage >
    )
}

function Product({ name, description }) {
    return (
        <AnimatedElement direction='from-down'>

            <div>
                <h1 className='text-[2.6rem] max-sm:text-[22px] text-left font-bold poppins text-[#5A6984]'>{name}</h1>
                <p className=' text-[1.2rem] max-sm:text-[14px] text-justify mt-3'>{description}</p>
            </div>
        </AnimatedElement>
    )
}

const CollapsibleList = ({ title, items, flexDirection }) => {
    const [isOpen, setIsOpen] = useState(true);

    const toggleList = () => {
        setIsOpen(!isOpen);
    };

    return (
        <div className={`flex ${flexDirection} bg-emerald-300`}>
            <div className='flex-1 uppercase bg-[#3a4049] flex items-center justify-center'>


                {/* <img src={img} className='mix-blend-multiply' /> */}

                <h1 className='text-[2rem] absolute text-white font-semibold'>{title}</h1>
            </div>
            <div className='flex-1 bg-gray-100 flex items-center     flex-col py-10'>
                {items.map((item, index) => (
                    <p key={index} className="text-[1.1rem]">
                        {item}
                    </p>
                ))}
            </div>
        </div>
    );
};





export default Products
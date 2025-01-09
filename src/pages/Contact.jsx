import React, { useState } from 'react'
import { motion } from 'framer-motion';
// import { FontAwesomeIcon } from '@fortawesome/react-fontawesome'
import { IoLocation, IoMail, IoCall } from "react-icons/io5";
// import Map from '../components/Map';
import TransitionPage from '../TransitionPage';
import RevealText from '../components/TextReveal2';
import AnimatedElement from '../components/AnimatedElement';

function Contact() {

    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        message: "",
    });

    const [showMessage, setShowMessage] = useState(false)

    const handleChange = (e) => {
        setFormData({ ...formData, [e.target.name]: e.target.value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        try {
            const response = await fetch("http://localhost:5000/send-email", {
                method: "POST",
                headers: {
                    "Content-Type": "application/json",
                },
                body: JSON.stringify(formData),
            });
            if (response.ok) {
                setShowMessage(true)
                setFormData({ name: "", email: "", number: "", message: "" });
            } else {
                alert("Failed to send message.");
            }
        } catch (error) {
            console.error("Error sending message:", error);
        }
    };

    //     const handleFormSubmit = async (e) => {
    //         e.preventDefault()

    //         const response = await fetch('http://localhost:3001')
    //         console.log(response)
    // }
    return (

        <TransitionPage>

            <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className='min-h-[90vh] bg-gray-100  py-10 px-[100px] max-sm:px-3'>

                {/* <h1 className='text-[#425472] poppins text-[4rem] max-sm:text-[2rem] font-semibold'>Get in touch with us</h1> */}
                <RevealText text='Get in touch with us' css='text-[#425472] poppins text-[2.5rem] max-sm:text-[2rem] font-semibold' />
                <div className='flex max-sm:flex-col gap-10   w-[70%] max-sm:w-[100%] mx-auto py-10 max-sm:mt-0 max-sm:py-5 items-center justify-center'>

                    <div className=' flex-[2] max-sm:w-full w-full   flex flex-col  items-center justify-center'>


                        <form onSubmit={handleSubmit} className='flex flex-col gap-3 w-full'>

                            <input onChange={handleChange} name='name' className='outline-none text-black p-3 rounded-sm bg-gray-300' type='text' placeholder='Name' />
                            <input onChange={handleChange} name='email' className='outline-none text-black p-3 rounded-sm bg-gray-300' type='email' placeholder='Email' />
                            <input onChange={handleChange} name='number' className='outline-none text-black p-3 rounded-sm bg-gray-300' type='number' placeholder='Phone' />
                            <textarea onChange={handleChange} name='message' className='outline-none resize-none text-black p-3 rounded-sm bg-gray-300' rows={6} placeholder='Message' />
                            <button type='submit' className='bg-slate-700 text-white p-3 rounded-sm hover:bg-slate-800'>Submit</button>


                        </form>

                        {showMessage &&
                            <div className='archivo font-semibold p-2 text-green-800'>
                                Message sent successfully
                            </div>
                        }

                    </div>

                    <div className='flex flex-[1] flex-col items-start justify-center gap-10 max-sm:gap-5 text-black '>
                        <div>
                            <div className='flex items-center gap-1'>
                                <span><IoLocation size={25} color='#1E293B' /></span>
                                <h1 className=' text-[1.3rem] text-left'>Address</h1>
                            </div>
                            <p className='text-left'>
                                F451, Phase-8B, Industrial Focal Point, SAS Nagar, Mohali, Punjab-160055
                            </p>
                        </div>

                        <div>
                            <div className='flex items-center gap-1'>
                                <span><IoMail size={25} color='#1E293B' /></span>
                                <h1 className=' text-[1.3rem] text-left'>Email</h1>
                            </div>
                            <p>contact@accelorindia.com</p>
                        </div>

                        <div className=' '>
                            <div className='flex items-center gap-1'>
                                <span><IoCall size={25} color='#1E293B' /></span>
                                <h1 className=' text-[1.3rem] text-left'>Contact number</h1>
                            </div>
                            {/* <p>+91-172-4622693</p> */}
                            <p className='text-left'>+91 7080229840/41</p>
                            <p className='text-left'>+91 7080229843 (AMETL)</p>
                        </div>

                    </div>
                    <div>

                    </div>
                    {/* <Map /> */}
                </div>
                <div className='mt-14 max-sm:mt-0'>
                    <iframe
                        className='w-full h-[50vh]'
                        title='map'
                        src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d4717.042403928223!2d76.68069081221189!3d30.70219537449314!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390f9591d7eb2c97%3A0x9a557b8332e8ae10!2sACCELOR%20MICROSYSTEMS!5e1!3m2!1sen!2sin!4v1731132748815!5m2!1sen!2sin"

                        allowfullscreen=""
                        loading="lazy"
                        referrerpolicy="no-referrer-when-downgrade">
                    </iframe>
                </div>
            </motion.div>
        </TransitionPage>
    )
}

export default Contact;

// 7080229840/41
// ametl(etf)- 43
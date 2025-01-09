import React, { useState } from 'react'
import Job from '../components/Job'
import { AnimatePresence, motion } from 'framer-motion'
import TransitionPage from '../TransitionPage'
import { IoChevronDown, IoChevronUp } from "react-icons/io5";
function Career() {
    const [formData, setFormData] = useState({
        name: "",
        email: "",
        number: "",
        message: "",
        file: null,
    });
    const [showMessage, setShowMessage] = useState(false);

    const handleChange = (e) => {
        const { name, value, files } = e.target;
        setFormData(prevState => ({
            ...prevState,
            [name]: files ? files[0] : value,
        }));
    };

    const handleFormSubmit = async (e) => {
        e.preventDefault();
        console.log(formData)
        // const data = new FormData();
        // Object.keys(formData).forEach(key => {
        //     data.append(key, formData[key]);
        // });

        // const response = await fetch('http://localhost:3000/send-email', {
        //     method: 'POST',
        //     body: data,
        // });

        // if (response.ok) {
        //     setShowMessage(true);
        //     setFormData({ name: "", email: "", number: "", message: "", file: null }); // Reset form
        // } else {
        //     alert('Failed to send email.');
        // }
    };
    return (
        <TransitionPage>

            {/* <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }}
                className='min-h-[100vh] flex flex-col items-center bg-gray-100'>
                <div className='bg-gradient-to-r from-pink-600 to-purple-700   h-[150px] flex items-center justify-center w-full'>
                    <h1 className='text-white font-bold text-[4rem] max-sm:text-[40px] mt-6 poppins'>Join our team.</h1>
                </div>

                <h3 className='mt-10 text-[2rem]'>Current Openings</h3>

                <div className=' flex flex-col gap-10 w-[60%] max-sm:w-[90%] max  mt-5'>
                    <div className='relative'>
                        <div onClick={openRNDJobs} className='font-light flex items-center gap-5 w-fit cursor-pointer text-left text-[1.7rem] max-sm:text-[1.3rem] max-sm:font-medium'><h1>Research & Development</h1> {rndAccordion ? <IoChevronUp /> : <IoChevronDown />}   </div>
                        <AnimatePresence>
                            {rndAccordion && <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className=' relative'>
                                <Job title='Software Engineer' type='Internship' />
                                <Job title='Senior Software Engineer' type='Fulltime' />
                            </motion.div>}
                        </AnimatePresence>
                    </div>
                    <div>
                        <h1 className='font-light text-left text-[1.7rem] max-sm:text-[1.3rem] max-sm:font-medium'>Production</h1>
                        <div>
                        </div>

                    </div>
                    <div>
                        <h1 className='font-light text-left text-[1.7rem] max-sm:text-[1.3rem] max-sm:font-medium'>Mechanical</h1>

                    </div>
                    <div>
                        <h1 className='font-light text-left text-[1.7rem] max-sm:text-[1.3rem] max-sm:font-medium'>Environmental Testing</h1>

                    </div>
                    <div>
                        <h1 className='font-light text-left text-[1.7rem] max-sm:text-[1.3rem] max-sm:font-medium'>Admin</h1>
                        <div>
                            <Job title='Accounts Manager' type='Fulltime' />
                        </div>
                    </div>
                </div>
            </motion.div> */}

            <div className='bg-gradient-to-r from-[#6d222e] to-[#505da0]   h-[150px] flex items-center justify-center w-full'>
                <h1 className='text-white font-bold text-[3rem] max-sm:text-[30px] mt-6 poppins'>Join our team.</h1>
            </div>
            <div className='px-[10%]  max-sm:px-3 bg-gray-100 py-10 flex flex-col items-center justify-center gap-8'>
                <h1 className='text-[2.5rem] max-sm:text-[1.7rem] font-medium'>Drop your CV with us </h1>
                <form onSubmit={handleFormSubmit} className='flex w-[40%] max-sm:w-full flex-col gap-3'>

                    <input onChange={handleChange} name='name' className='outline-none text-black p-3 rounded-sm bg-gray-300' type='text' placeholder='Name' />
                    <input onChange={handleChange} name='email' className='outline-none text-black p-3 rounded-sm bg-gray-300' type='email' placeholder='Email' />
                    <input onChange={handleChange} name='phone' className='outline-none text-black p-3 rounded-sm bg-gray-300' type='number' placeholder='Phone' />
                    <textarea onChange={handleChange} name='message' className='outline-none resize-none text-black p-3 rounded-sm bg-gray-300' rows={6} placeholder='Message' />
                    <input onChange={handleChange} name='file' className='outl  ine-none text-black p-3 rounded-sm bg-gray-300' type='file' />
                    <button type='submit' className='bg-slate-700 text-white p-3 rounded-sm hover:bg-slate-800'>Submit</button>


                </form>
            </div>
            {showMessage &&
                <div className='archivo font-semibold p-2 text-green-800'>
                    Message sent successfully
                </div>
            }

        </TransitionPage>
    )
}

export default Career
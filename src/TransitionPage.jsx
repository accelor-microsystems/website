import React from 'react'
import { motion } from 'framer-motion'
function TransitionPage({ children }) {
    return (
        <>
            <motion.div initial={{ left: '100vw' }} animate={{ left: '100vw' }} exit={{ left: '-100vw' }} transition={{ duration: 0.9, }} className='slide'></motion.div>
            <motion.div initial={{ opacity: 1 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} transition={{ duration: 0.9 }}>
                {children}

            </motion.div>
        </>
    )
}

export default TransitionPage
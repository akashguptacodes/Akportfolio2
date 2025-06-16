import React from 'react'
import { abilities } from '../constants/utils'
import {motion} from 'framer-motion'

const FeatureCards = () => {
    const listVariant = {
        hidden: { opacity: 0, y: 30 },
        visible: {
            opacity: 1,
            y: 0,
            transition: { duration: 0.5 },
        },
    };
    return (
        <div className='w-full padding-x-lg mt-36'>
            <h1 className='text-center text-5xl font-bold mb-6'>My Abilities:-</h1>
            <div className='mx-auto grid-3-cols'>
                {
                    abilities.map(({ imgPath, title, desc }) => (
                        <motion.div key={title} className='card-border rounded-xl p-8 flex flex-col gap-4'
                            variants={listVariant}
                            initial="hidden"
                            whileInView="visible"
                            // viewport={{ once: false, amount: 0.2 }}
                        >
                            <div className='size-14 flex items-center justify-center rounded-full'>
                                <img src={imgPath} alt={title} />
                            </div>
                            <h3 className='text-white text-2xl font-semibold'>{title}</h3>
                            <p className='text-white-50 text-lg'>{desc}</p>
                        </motion.div>
                    ))
                }
            </div>
        </div>
    )
}

export default FeatureCards
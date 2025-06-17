import React from 'react'
import { marqueStacks } from '../constants/utils'


const LogoIcon=({stack})=>{
    return (
        <div className='flex flex-col flex-center marquee-item hover:scale-125 transition-transform duration-300'>
            <img src={stack.icon} alt={stack.name} className='rounded-3xl' />
            <p className='text-black-200'>{stack.name}</p>
        </div>
    )
}



const LogoSection = () => {
  return (
    <div className='md:my-20 my-10 relative z-10'>
        <div className='gradient-edge' />
        <div className='gradient-edge' />
        <div className='marquee h-52'>
            <div className='marquee-box md:gap-12 gap-5'>
                {
                    marqueStacks.map((stack)=>(
                        <LogoIcon key={stack.name} stack={stack} />
                    ))
                }
            </div>
        </div>
    </div>
  )
}

export default LogoSection
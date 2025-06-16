import React from 'react'
import { names, words } from '../constants/utils'
import Button from '../components/Button'
import HeroExperience from '../components/HeroModels/HeroExperience'
import { useGSAP } from '@gsap/react'
import gsap from 'gsap'

const Hero = () => {
    useGSAP(() => {
        gsap.fromTo('.hero-text h1',
            {
                y: 50,
                opacity: 0
            },
            {
                y: 0,
                opacity: 1,
                stagger: 0.2,
                duration: 1,
                ease: 'power2.inOut'
            }
        )
    })
    return (
        <section id='hero' className='relative overflow-hidden'>
            <div className='absolute top-0 left-0 z-10'>
                <img src='/images/bg.png' alt='background' />
            </div>
            <div className='hero-layout'>
                {/* left hero content */}
                <header className='flex flex-col justify-center md:w-full w-screen md:px-20 px-5'>
                    <div className='flex flex-col gap-7'>
                        <div className='hero-text'>
                            <h1>
                                Hii! I am
                                <span className='slide'>
                                    <span className='wrapper'>
                                        {
                                            names.map((name) => (
                                                <span key={name.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                                                    <span className='text-blue-300'>{name.text}</span>
                                                </span>
                                            ))
                                        }
                                    </span>
                                </span>
                            </h1>
                            <h1>
                                Transforming
                                <span className='slide'>
                                    <span className='wrapper'>
                                        {
                                            words.map((word) => (
                                                <span key={word.text} className='flex items-center md:gap-3 gap-1 pb-2'>
                                                    <img
                                                        src={word.imgPath}
                                                        alt={word.text}
                                                        className='xl-size-12 md:size-10 size-7 md:p-2 p-1 rounded-full bg-white-50'
                                                    />
                                                    <span className='text-blue-300'>{word.text}</span>
                                                </span>
                                            ))
                                        }
                                    </span>
                                </span>
                            </h1>
                            <h1>into Real Projects</h1>
                            <h1>that Deliver Results</h1>
                        </div>
                    </div>
                </header>

                {/* right hero content */}
                <figure>
                    <div className='hero-3d-layout'>
                        <HeroExperience />
                    </div>
                </figure>
            </div>
            <div id='work' className='h-28'></div>
        </section>

    )
}

export default Hero
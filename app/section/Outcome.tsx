import React from 'react'
import Image from 'next/image'
import Wrapper from '../Shared/Wrapper'
import outcome from '@/app/asessts/outcome.png'

const outcomeData = [
    "Product Ownership",
    "Freelacing",
    "Global Marketing by DAO",
    "Boosting Economy."
]
const Outcome = () => {
    return (
        <section className='mt-16 md:mt-28'>
            <Wrapper>
                <div className='flex gap-x-8 items-center flex-col-reverse md:flex-row'>
                    {/* left div */}
                    <div className='flex-1'>
                        <Image src={outcome} alt='outcome' />

                    </div>
                    {/* right div */}
                    <div className='flex-1'>
                        <h2 className='font-bold text-xl'>The Outcome for Participants of the Program</h2>
                        <p className='mt-4 text-slate-600 text-lg'>As a graduate of this program, you will own valuable products such as Full-Stack App Templates, AR and VR Experiences, and APIs that are marketed globally by the Panaverse DAO. You will also have the opportunity to offer your services at a rate of $50 per hour, providing a path to financial stability while contributing to the growth of Pakistan software exports.</p>
                        <div className='grid grid-cols-2 gap-8 mt-10'>
                            {
                                outcomeData.map((item,index)=>(

                                    <div className='flex gap-x-4 items-center' key={index}>

                                        <svg width="52" height="52" viewBox="0 0 52 52" fill="none" xmlns="http://www.w3.org/2000/svg">
                                            <path d="M20.3431 5.65686C23.4673 2.53266 28.5327 2.53266 31.6569 5.65685L46.3431 20.3431C49.4673 23.4673 49.4673 28.5327 46.3431 31.6569L31.6569 46.3431C28.5327 49.4673 23.4673 49.4673 20.3431 46.3431L5.65686 31.6569C2.53266 28.5327 2.53266 23.4673 5.65685 20.3431L20.3431 5.65686Z" fill="url(#paint0_radial_1_48)" />
                                            <path fill-rule="evenodd" clip-rule="evenodd" d="M17 24.9206C19.0707 25.3461 21.734 26.1698 23.75 27.465C26.1178 24.3345 30.371 21.406 35 19C30.6042 23.2739 26.9668 28.1236 24.5 33C22.5118 30.2129 20.3398 27.6189 17 24.9206Z" fill="white" />
                                            <defs>
                                                <radialGradient id="paint0_radial_1_48" cx="0" cy="0" r="1" gradientUnits="userSpaceOnUse" gradientTransform="translate(16.5455 -6.96429) rotate(59.1918) scale(77.3011 169.686)">
                                                    <stop offset="0.125" stop-color="#00E1F0" />
                                                    <stop offset="1" stop-color="#00616C" />
                                                </radialGradient>
                                            </defs>

                                        </svg>
                                        <h3 className='text-lg font-semibold '>{item}</h3>


                                    </div>
                                    
                                ))
                            }

                        </div>

                    </div>
                </div>



            </Wrapper>



        </section>
    )
}

export default Outcome
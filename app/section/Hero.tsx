import React from 'react'
import Wrapper from '../Shared/Wrapper'
import Image from 'next/image'
import hero from '@/app/asessts/Hero poster.png'
import Button from '../Shared/Button'

const Hero = () => {
    return (
        <section>
            <Wrapper>
                <div className='flex flex-col md:flex-row items-center gap-x-4'>
                    {/* left div */}
                    <div >
                        <h4 className='text-teal-700  font-semibold text-lg mt-4'>Presidential Initiative for Artificial Intelligence and Computing (PIAIC)</h4>
                        <h1 className='font-bold text-4xl sm:text-5xl mt-4 lg:leading-[70px]'>Certified Web 3.0 and Metaverse Developer</h1>
                        <p className='text-lg mt-6 text-slate-600 max-w-xl'>A One and Quarter Years Panaverse DAO Earn as you Learn Program Getting Ready for the Next Generation of the Internet</p> <br />
                        <p className='text-lg mt-6 text-slate-600 max-w-xl'>Consolidating Web 3.0, Metaverse, Artificial Intelligence (AI), Cloud, Edge, Ambient Computing/IoT, Network Automation, and Bioinformatics Technologies</p>

                        <div className='mt-5  '>
                            <Button text={'Learn More'}/>
                        </div>



                    </div>
                    {/* right div */}
                    <div >

                        <Image src={hero} alt='hero poster'/>
                    </div>

                </div>

            </Wrapper>
        </section>
    )
}

export default Hero
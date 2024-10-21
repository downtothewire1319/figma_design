import React from 'react'
import Image from 'next/image'
import logo from '../../public/logo.png'
import Wrapper from '@/app/Shared/Wrapper'
import Link from 'next/link'
const Header = () => {
    return (
        <header className='h-auto z-20 sticky  inset-0 backdrop-blur-md py-3'>
            <Wrapper>



                <div className='flex justify-between items-center'>
                    <Link href={'/'}>

                        <div>
                            <Image src={logo} alt='logo' />

                        </div>
                    </Link>
                    <div>
                        <ul className='flex items-center gap-x-4 h-full sm:gap-x-8 text-16'>
                            <li className='cursor-pointer'>
                                <div className='flex items-center gap-x-2 hover:text-teal-700'>
                                    <p>Course</p>
                                    <svg width="9" height="7" viewBox="0 0 9 7" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1 1.55554L4.5 5.44443L8 1.55554" stroke="black" stroke-width="2" />
                                    </svg>


                                </div>
                            </li>

                            <Link className='hover:text-teal-700' href={'/blogs'}>
                                Blog
                            </Link>
                            <Link className='hover:text-teal-700' href={'/videos'}>
                                Video
                            </Link>
                        </ul>
                    </div>

                </div>
            </Wrapper>
        </header>
    )
}

export default Header
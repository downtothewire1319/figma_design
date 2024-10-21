"use client"
import React, { useState } from 'react'
import Wrapper from '../Shared/Wrapper'
import Image from 'next/image'
import CoreTracksBox from '../Shared/CoreTracksBox'
import ai from '@/app/asessts/ai.png'
import blockchain from '@/app/asessts/blockchain.png'
import cnc from '@/app/asessts/cnc.png'
import robot from '@/app/asessts/robot.png'
import tma from '@/app/asessts/tma.png'
import dna from '@/app/asessts/dna.png'

export const data = [
    {
        slug: "blockchain",
        header: " Web 3.0 (Blockchain) and Metaverse Specialization",
        description: "This Web 3.0 and Metaverse specialization focuses on developing full-stack Web 3.0 and Metaverse experiences for the next generation of the internet by specializing in building worlds that merge the best of cutting-edge decentralized distributed blockchains with 3D metaverse client experiences.",
        image: blockchain,
        quarters: [
            {
                header: "Quarter IV",
                description: " W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
                number: 4
            },

            {
                header: "Quarter V",
                description: " W2-201: Developing Planet-Scale Web 2.0 Serverless Cloud Cloud Apps and APIs using Next.js 13 and Cloud Development Kit (CDK) for Terraform",
                number: 5
            }
        ]
    },
    {
        slug: "ai",
        header: " Artificial Intelligence (AI) and Deep Learning Specialization",
        description: "The AI and Deep Learning specialization focuses on building and deploying intelligent APIs using OpenAI models and building custom Deep Learning Tensorflow models.",
        image: ai,
        quarters: [
            {
                header: "Quarter IV",
                description: " AI-351: Developing Planet-Scale Intelligent APIs and Python Programming",
                number: 4
            },

            {
                header: "Quarter V",
                description: " AI-361: Deep Learning and MLOps",
                number: 5
            }
        ]
    },
    {
        slug: "cnc",
        header: " Cloud-Native Computing Specialization",
        description: "The Cloud-Native Computing Specialization focuses on Containers, Kubernetes, and CDK for Kubernetes.",
        image: cnc,
        quarters: [
            {
                header: "Quarter IV",
                description: " CN-351: Certified Kubernetes Application Developer (CKAD)",
                number: 4
            },

            {
                header: "Quarter V",
                description: " CN-361: Developing Multi-Cloud Apps using CDK for Terraform",
                number: 5
            }
        ]
    },
    {
        slug: "tma",
        header: " Ambient Computing and IoT Specialization",
        description: "The Ambient Computing and IoT Specialization focuses on building Smart Homes, Offices, Factories, and Cities using Voice computing, Matter Protocol, and Embedded Devices.",
        image: tma,
        quarters: [
            {
                header: "Quarter IV",
                description: " AC-351: Ambient Computing with Voice Assistants and Matter Devices",
                number: 4
            },

            {
                header: "Quarter V",
                description: " AC-361: Embedded Programming using C and Rust",
                number: 5
            }
        ]
    },
    {
        slug: "dna",
        header: " Genomics and Bioinformatics Specialization",
        description: "Genomics is the study of the total genetic makeup of individual organisms, and how this genetic information is structured, functions, and has evolved; bioinformatics encompasses a diverse range of analytical methods and tools applied to genomic data. This Specialization focuses on performing complex bioinformatics analysis using the most essential Python libraries and applications.",
        image: dna,
        quarters: [
            {
                header: "Quarter IV",
                description: " Bio-351: Python for Biologists",
                number: 4
            },

            {
                header: "Quarter V",
                description: " Bio-361: Bioinformatics with Python",
                number: 5
            }
        ]
    },
    {
        slug: "robot",
        header: " Network Programmability and Automation Specialization",
        description: "More than ever, network engineers are finding it challenging to complete their duties entirely manually. Network automation is now crucial due to new protocols, technologies, delivery models, and the requirement for enterprises to become more adaptable and agile. This course teaches network engineers how to automate systems with code using a variety of technologies and tools, including Linux, Python, APIs, and Git.",
        image: robot,
        quarters: [
            {
                header: "Quarter IV",
                description: " NPA-351: CCNA 200-301 Certification",
                number: 4
            },

            {
                header: "Quarter V",
                description: " NPA-361: Network Programmability and Automation",
                number: 5
            }
        ]
    }
]

const SpecializedTracks = () => {
    const [selectedItem, setSelectedItemData] = useState("blockchain")
    const selectedItemData = data.find((item) => item.slug === selectedItem)


    return (
        <section>
            <Wrapper>
                <div>
                    <div>
                        <h2 className='text-4xl font-bold'>Specialized Tracks:</h2>
                        <p className='mt-3 text-lg text-slate-600 leading-[30px] max-w-screen-sm'>
                            After completing the first three quarters, the participants will select one or more specializations consisting of two courses each:
                        </p>
                    </div>

                    <div className='mt-10 flex flex-col-reverse md:flex-row gap-x-2 gap-y-8'>
                        {/* Left div */}
                        <div className='flex-1'>
                            <div className='shadow-xl sticky top-28 rounded-xl border-slate-200 py-8 px-8'>
                                <h4 className='text-teal-700 text-lg font-medium'>Specialized Program</h4>
                                <h3 className='text-2xl font-bold'>{selectedItemData?.header}</h3>
                                <p className='text-lg text-slate-600 mt-2'>{selectedItemData?.description}</p>

                                <button className='text-teal-700 text-xl mt-4 underline flex gap-x-1 items-end'>
                                    Learn More
                                    <svg className="mb-1.5" width="8" height="11" viewBox="0 0 8 11" fill="none" xmlns="http://www.w3.org/2000/svg">
                                        <path d="M1.00006 10.0368L6.06801 5.57117L1.09503 0.999994" stroke="#00616C" strokeWidth="2" />
                                    </svg>
                                </button>

                                <div className='flex flex-col md:flex-row gap-x-4 mt-8'>
                                    <CoreTracksBox
                                        title={selectedItemData?.quarters[0].header}
                                        paragraph={selectedItemData?.quarters[0].description}
                                        num={selectedItemData?.quarters[0].number}
                                    />
                                    <CoreTracksBox
                                        title={selectedItemData?.quarters[1].header}
                                        paragraph={selectedItemData?.quarters[1].description}
                                        num={selectedItemData?.quarters[1].number}
                                    />
                                </div>
                            </div>
                        </div>

                        {/* Right div */}
                        <div className='flex-1 m-x-w-[491px] px-1 py-4 '>
                            {data.map((item, index) => (
                                <div onClick={() => setSelectedItemData(item.slug)} key={index} 
                                    className='flex gap-x-1 cursor-pointer items-center  border-b border-slate-300 py-2'>
                                    <div>
                                        <div className='w-40 h-24 object-cover rounded-md'>
                                            <Image src={item.image} alt={item.header} />
                                        </div>
                                    </div>
                                    <div>
                                        <h4 className='text-teal-700 text-lg font-medium'>Specialized Program</h4>
                                        <h3 className='text-lg xs:text-xl font-bold text-black'>{item.header}</h3>
                                    </div>
                                </div>
                                
                            ))}
                        </div>
                    </div>
                </div>
            </Wrapper>
        </section>
    );

}

export default SpecializedTracks
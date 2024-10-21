import React, { FC } from 'react'

interface IPorps {
    title: string | undefined;
    paragraph: string | undefined;
    num: number | undefined;
    haveBorder?: boolean
}

const CoreTracksBox: FC<IPorps> = ({ title, paragraph, num, haveBorder = true }) => {
    return (
        <div className='mt-5 '>
            <div className={`${haveBorder && "border"} rounded-md  basis-4/12 basis-4/12 md:w-96 md:h-80 relative px-8 py-12 flex flex-col justify-center`} >
                <h4 className='font-bold text-lg'>{title}</h4>
                <p className='mt-2 text-slate-600'>{paragraph}</p>
                <span className='absolute -top-10 right-10 text-[170px] font-bold opacity-10 z-10'>{num}</span>

            </div>


        </div>
    )
}

export default CoreTracksBox
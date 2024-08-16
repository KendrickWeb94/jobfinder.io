
import { candidate, employer } from '@/public/exportimg'
import Image from 'next/image'
import React from 'react'

const CanOrEmp = () => {
  return (
    <div className=' w-full mx-auto min-h-[60vh] py-10 max-w-[82%]'>
        <div className="w-full flex gap-5 items-center justify-center flex-wrap h-full">
            <Image src={candidate} alt='' className='max-w-md  object-cover' />
            <Image src={employer} alt='' className=' max-w-md object-cover' />
        </div>
    </div>
  )
}

export default CanOrEmp

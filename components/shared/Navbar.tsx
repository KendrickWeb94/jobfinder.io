import Image from 'next/image'
import React from 'react'
import logo from "@/public/logo.svg"
import TopBarLink from './TopBarLink'

const Navbar = () => {
  return (
   <div className="w-full">
      <TopBarLink />
     <div className='w-full mx-auto max-w-[85%] p-2'>
            <div className="hidden logo_section w-24">
              <Image src={logo} alt='logo-img'/>
               <div className="sr-only">Logo-image</div>
            </div>
      </div>
   </div>
  )
}

export default Navbar

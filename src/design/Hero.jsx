import Banner from "../Components/Banner";

import { useRef, useEffect } from 'react';
import { gsap } from 'gsap';



const Hero = () => {
  const heroRef = useRef(null);

  useEffect(() => {
    const heroElement = heroRef.current;

 
    gsap.set(heroElement, { y: '-150%' });

   
    const tl = gsap.timeline({ delay: 4 });
    tl.to(heroElement, { y: '0%', duration: 1, ease: 'power1.inOut' });
  }, []);
  return (
    <div className=" w-full relative hero "  ref={heroRef}>
   
       <div className=" pt-[3rem]">
        <Banner />
       </div>
      
    </div>
  );
};

export default Hero;

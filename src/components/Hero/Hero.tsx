import type { HeroProps } from "../../types/hero.type";

const Hero = ({mobile, tablet, desk, type}:HeroProps) => {
  switch (type) {
     case 'Home':
        return (
            <>
               <img src={mobile} alt="mobile-hero" className='md:hidden rounded-xl' />
               <img src={tablet} alt="tablet-hero" className='hidden md:flex lg:hidden rounded-xl' />
               <img src={desk} alt="desktop-hero" className='hidden lg:flex rounded-xl w-[98%]' />
            </>
        )
     break; 
       case 'About':
        return (
            <>
               <img src={mobile} alt="mobile-hero" className='md:hidden rounded-xl' />
               <img src={tablet} alt="tablet-hero" className='hidden md:flex  lg:hidden rounded-xl' />
               <img src={desk} alt="desktop-hero" className='hidden lg:flex rounded-xl  w-[98%]' />
            </>
        )
     break; 
       case 'Plan':
        return (
            <>
              <img src={mobile} alt="mobile-hero" className='md:hidden rounded-xl' />
               <img src={tablet} alt="tablet-hero" className='hidden md:flex  lg:hidden rounded-xl' />
               <img src={desk} alt="desktop-hero" className='hidden lg:flex rounded-xl  w-[98%]' />
            </>
        )
     break; 
  }
}

export default Hero
import type { HeroContainerProps } from '../../types/hero.type'
import Button from '../Plan-Button/Button';
import Hero from './Hero'

const HeroContainer = ({photoType, type, title, subtitle,btnActive}:HeroContainerProps) => {

  let resultType = '';
  
  switch(type) {
    case 'Home': 
     resultType = 'absolute top-20 text-center md:text-left md:top-15 lg:top-50 p-2 md:p-3 left-10 md:left-4 lg:left-24 lg:p-5 w-72 md:w-400 lg:w-150';
    break;
    case 'About':
     resultType = 'absolute top-20 text-center md:text-left md:top-15 lg:top-37 p-2 md:p-3 left-10 md:left-4 lg:left-24 lg:p-5 w-72 md:w-400 lg:w-150';
    break;
    case 'Plan':
     resultType = 'absolute top-20 text-center md:text-left md:top-15 lg:top-37 p-2 md:p-3 left-10 md:left-4 lg:left-24 lg:p-5 w-72 md:w-400 lg:w-150';
    break;
    }

  return (
    <section className='relative p-5 md:p-6 lg:p-12 text-white'>
         <Hero mobile={photoType.mobile} desk={photoType.desk} tablet={photoType.tablet} type={type} />
         <div className={resultType}>
            <h1 className='mb-5 text-2xl md:text-3xl lg:text-6xl font-bold'>{title}</h1>
            <p className='my-2 w-65 md:w-125 lg:w-97 opacity-75'>{subtitle}</p>
            {btnActive && <Button/>}
         </div>
    </section>
  )
}

export default HeroContainer
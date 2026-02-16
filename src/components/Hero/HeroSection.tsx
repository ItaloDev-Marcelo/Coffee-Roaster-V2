import type { HeroContainerProps } from '../../types/hero.type'
import Button from '../Plan-Button/Button';
import Hero from './Hero'

const HeroContainer = ({photoType, type, title, subtitle,btnActive}:HeroContainerProps) => {

  let resultType = '';
  let h1Text = '';
  let pText = ''
  
  switch(type) {
    case 'Home': 
     resultType = 'absolute top-30 md-3:top-40 text-center md:text-left md:top-30 lg:top-20 xl:top-40 p-2 md:p-3 left-10 md:left-15 lg:left-24 lg:p-5 w-72 md:w-400 lg:w-150';
     h1Text = 'mb-5 text-2xl md:text-5xl md-3:text-6xl lg:mb-3 md:w-100 md:mb-7 md-3:mb-9 lg:text-4xl xl:text-6xl xl:w-200 font-bold'
     pText = 'my-2  md-3:text-2xl md-3:md-5 w-65 md:w-125 lg:w-97 xl:my-10 xl:w-150 opacity-75'
     break;
    case 'About':
     resultType = 'absolute top-27 text-center md:text-left md:top-30 lg:top-15 xl:top-25 p-2 md:p-3 left-10 md:left-15 lg:left-24 lg:p-5 w-72 md:w-400 lg:w-150';
     h1Text = 'mb-5 text-2xl md:text-3xl md-3:text-6xl md:w-100 md:mb-7 md-3:mb-9 lg:text-6xl font-bold'
     pText = 'my-2  md-3:text-2xl lg:text-1xl md-3:md-5 w-65 md:w-125 lg:w-150 opacity-75'
     break;
    case 'Plan':
        resultType = 'absolute top-27 text-center md:text-left md:top-30 lg:top-15 xl:top-25 p-2 md:p-3 left-10 md:left-15 lg:left-24 lg:p-5 w-72 md:w-400 lg:w-150';
     h1Text = 'mb-5 text-2xl md:text-3xl md-3:text-6xl md:w-100 md:mb-7 md-3:mb-9 lg:text-6xl font-bold'
     pText = 'my-2  md-3:text-2xl lg:text-1xl md-3:md-5 w-65 md:w-125 lg:w-150 opacity-75'
     break;
    }

  return (
    <section className='relative p-5 md:p-10 lg:p-12 text-white'>
         <Hero mobile={photoType.mobile} desk={photoType.desk} tablet={photoType.tablet} type={type} />
         <div className={resultType}>
            <h1 className={h1Text}>{title}</h1>
            <p className={pText}>{subtitle}</p>
            {btnActive && <Button/>}
         </div>
    </section>
  )
}

export default HeroContainer
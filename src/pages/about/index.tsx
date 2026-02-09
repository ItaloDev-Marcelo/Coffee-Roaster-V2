import CustomImage from '../../components/CustomImage/CustomImage'
import Container from '../../components/Footer/Container'
import Footer from '../../components/Footer/Footer'
import HeroContainer from '../../components/Hero/HeroSection'
import { HeroBank } from '../../components/Hero/utils/HeroBank'
import MainWrapper from '../../components/wrapper/MainWrapper'
import { p1, p2, subtitle, title } from './utils/AboutUs-text'
import { HeadquartersData } from './utils/headquartersData'
import { ImageBank } from './utils/ImageBank'

const AboutUs = () => {
  return (
    <>
    <MainWrapper>
        <HeroContainer photoType={HeroBank.About} type='About'
           title={title} subtitle={subtitle} btnActive={false} />
           <section className='flex flex-col items-center justify-center p-20  my-30 lg:px-15'>
               <div className='my-8 lg:my-25'>
                  <section className='flex flex-col lg:flex-row items-center
                    text-center lg:text-left mb-7 md:mb-4'>
                      <div> <CustomImage mobile={ImageBank.Commitment.mobile} tablet={ImageBank.Commitment.tablet} 
                       desk={ImageBank.Commitment.desk} /></div>
                       <div className='my-2 lg:my-0 lg:ml-45 lg:px-5'>
                         <h2 className='font-bold text-cyan-900 text-[1.7rem] my-4 lg:text-[2rem] lg:mb-6 '>Our Commitment</h2>
                         <p className='text-gray-800 w-75 lg:w-100 '>{p1}</p>
                       </div>
                  </section>
               </div>
               <div className='my-8 lg:my-25'>
                  <section className='flex flex-col-reverse lg:flex-row-reverse
                   lg:space-between text-center lg:text-left items-center p-20'>
                  
                       <div className='mt-10'>
                         <CustomImage mobile={ImageBank.Quality.mobile}
                        tablet={ImageBank.Quality.tablet}
                         desk={ImageBank.Quality.desk} />
                       </div>
                  <div className='my-2 lg:my-0 lg:mr-45 lg:px-5'>
                      <h2 className='font-bold text-cyan-900 text-[1.7rem] my-4 lg:text-[2rem] lg:mb-6'>Uncompromising Quality</h2>
                      <p className='text-gray-800  w-75 lg:w-100 '>{p2}</p>
                  </div>
                  </section>
               </div>
           </section>
           <section className='  lg:ml-5 lg:-mt-30 p-20 lg:p-0'>
              <h4 className='font-bold text-cyan-900 text-[2.2rem] mb-25  lg:mb-22 lg:text-[3.5rem]'>Our headquarters</h4>
              <div className='flex flex-col  lg:flex-row lg:mt-17'>
                {
                  HeadquartersData.map((item, index) => (
                    <div className='w-75 lg:w-100' key={index}>
                       <img src={item.icon} alt={item.country} className='w-25 h-25 lg:w-45 lg:h-45 ' />
                       <h5 className='w-100 my-7 text-2xl lg:text-3xl font-bold'>{item.country}</h5>
                       <ul className='my-15'>
                        <li className='mb-3'>{item.city}</li>
                        <li className='mb-3'>{item.cityInfo}</li>
                        <li className='mb-3'>{item.address}</li>
                        <li>{item.phone}</li> 
                       </ul>
                    </div>
                  ))
                }
              </div>
           </section>
    </MainWrapper>
    <Container>
      <Footer/>
    </Container>
    </>
  )
}

export default AboutUs
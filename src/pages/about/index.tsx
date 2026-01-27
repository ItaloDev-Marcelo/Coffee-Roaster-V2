import CustomImage from '../../components/CustomImage/CustomImage'
import HeroContainer from '../../components/Hero/HeroSection'
import { HeroBank } from '../../components/Hero/utils/HeroBank'
import { HeadquartersData } from './utils/headquartersData'
import { ImageBank } from './utils/ImageBank'


const AboutUs = () => {

  const title = 'About Us'
  const subtitle = 'Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.'


  const p1 = 'We’re built on a simple mission and a commitment to doing good along the way. We want to make it easy for you to discover and brew the world’s best coffee at home. It all starts at the source. To locate the specific lots we want to purchase, we travel nearly 60 days a year trying to understand the challenges and opportunities in each of these places. We collaborate with exceptional coffee growers and empower a global community of farmers through with well above fair-trade benchmarks. We also offer training, support farm community initiatives, and invest in coffee plant science. Curating only the finest blends, we roast each lot to highlight tasting profiles distinctive to their native growing region.'
  const p2 = 'Although we work with growers who pay close attention to all stages of harvest and processing, we employ, on our end, a rigorous quality control program to avoid over-roasting or baking the coffee dry. Every bag of coffee is tagged with a roast date and batch number. Our goal is to roast consistent, user-friendly coffee, so that brew ing is easy and enjoyable.'
  return (
    <>
      <main className='flex flex-col justify-center items-center '>
          <HeroContainer photoType={HeroBank.About} type='About'
           title={title} subtitle={subtitle} btnActive={false} />
           <section className='flex flex-col items-center justify-center  my-30 lg:px-15'>
               <div className='my-25'>
                  <section className='flex flex-col lg:flex-row items-center
                    text-center lg:text-left mb-7 md:mb-4'>
                      <div> <CustomImage mobile={ImageBank.Commitment.mobile} tablet={ImageBank.Commitment.tablet} 
                       desk={ImageBank.Commitment.desk} /></div>
                       <div className='my-2 lg:my-0 lg:ml-45 lg:px-5'>
                         <h2 className='font-bold text-cyan-900 text-[1.7rem] my-4 lg:text-[2rem] lg:mb-6 '>Our Commitment</h2>
                         <p className='text-gray-800 w-125 lg:w-100 '>{p1}</p>
                       </div>
                  </section>
               </div>
               <div className='my-25'>
                  <section className='flex flex-col-reverse lg:flex-row-reverse
                   lg:space-between text-center lg:text-left items-center'>
                  
                       <div className='my-4'>
                         <CustomImage mobile={ImageBank.Quality.mobile}
                        tablet={ImageBank.Quality.tablet}
                         desk={ImageBank.Quality.desk} />
                       </div>
                  <div className='my-2 lg:my-0 lg:mr-45 lg:px-5'>
                      <h2 className='font-bold text-cyan-900 text-[1.7rem] my-4 lg:text-[2rem] lg:mb-6'>Uncompromising Quality</h2>
                      <p className='text-gray-800  w-125 lg:w-100 '>{p2}</p>
                  </div>
                  </section>
               </div>
           </section>
           <section className='lg:ml-45'>
              <h4 className='font-bold text-cyan-900 text-[3rem] mb-25 lg:mb-15 lg:text-[3.5rem]'>Our headquarters</h4>
              <div className='flex flex-col lg:flex-row lg:mt-17'>
                {
                  HeadquartersData.map((item, index) => (
                    <div key={index}>
                       <img src={item.icon} alt={item.country} className='w-55 h-55 lg:w-45 lg:h-45 ' />
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
    </main>
    </>
  )
}

export default AboutUs
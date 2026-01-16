
import HeroContainer from '../../components/Hero/HeroSection'
import { HeroBank } from '../../components/Hero/utils/HeroBank'


const AboutUs = () => {

  const title = 'About Us'
  const subtitle = 'Coffeeroasters began its journey of exotic discovery in 1999, highlighting stories of coffee from around the world. We have since been dedicated to bring the perfect cup - from bean to brew - in every shipment.'


  return (
    <>
      <main className='flex flex-col justify-center items-center '>
          <HeroContainer photoType={HeroBank.About} type='About'
           title={title} subtitle={subtitle} btn='create your plan' btnActive={false} />
    </main>
    </>
  )
}

export default AboutUs
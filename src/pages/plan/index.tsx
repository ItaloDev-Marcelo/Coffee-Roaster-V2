import HeroContainer from '../../components/Hero/HeroSection'
import { HeroBank } from '../../components/Hero/utils/HeroBank'


const CreateYourPlan = () => {

  const title = 'Create a plan'
  const subtitle = 'Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.'

  return ( 
    <>
       <main className='flex flex-col justify-center items-center '>
                <HeroContainer photoType={HeroBank.Plan} type='Plan'
                 title={title} subtitle={subtitle} btn='' btnActive={false} />
        </main>
    </>
  )
}

export default CreateYourPlan
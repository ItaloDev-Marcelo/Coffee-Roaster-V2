
import HeroContainer from '../../components/Hero/HeroSection'
import { HeroBank } from '../../components/Hero/utils/HeroBank'

const Home = () => {

  const title = 'Great coffee made simple.'
  const sub = 'Start your mornings with the world\'s best coffees. Try our expertly curated artisan coffees from our best roasters delivered directly to your door, at your schedule.'

  return (
    <>
      <main className='flex flex-col justify-center items-center '>
          <HeroContainer photoType={HeroBank.Home} type='Home'
           title={title} subtitle={sub} btn='create your plan' btnActive={true} />
      </main>
    </>
  )
}

export default Home
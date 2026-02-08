import CustomCard from '../../components/Card/CustomCard'
import HeroContainer from '../../components/Hero/HeroSection'
import { HeroBank } from '../../components/Hero/utils/HeroBank'
import {OurCollectionData} from '../../components/Data/OurCollectionData'
import { WhyChoose } from '../../components/Data/Whychoose'
import WhyUse from '../../assets/images/plan/desktop/bg-steps.png'
import { WhiteData } from '../../components/Data/NumData'
import { HomeSub, HomeTitle } from './utils/Home.txt'
const Home = () => {

  return (
    <>
      <main className='flex flex-col justify-center items-center  '>
          <HeroContainer photoType={HeroBank.Home} type='Home'
           title={HomeTitle} subtitle={HomeSub} btnActive={true} />
           <section className='relative text-center flex flex-col items-center justify-center  xl:-left-4 lg:my-10'>
                <h2 className='font-bold text-4xl mt-15 mb-5 lg:mb-0 lg:mt-0  lg:text-[8rem] text-gray-500 lg:absolute left-[12%] top-[34%]'>our <br className='lg:hidden' />Collection</h2>
              <div className='flex flex-col lg:flex-row lg:space-between p-5 lg:p-10 my-2'>
                   {
                 OurCollectionData.map((item, index) => (
                   <CustomCard key={index} customType={1} data1={item}  />
                 )) 
                }
              </div>
           </section>
           <section className='relative px-5 lg:p-14.5 lg:left-[-1em] text-center'>
                <img src={WhyUse} className='w-screen  h-[95vh]  lg:h-[75vh] rounded-lg' />
                <div className='absolute top-20 p-7 md:p-15 lg:p-0 lg:top-40 left-[5%]
                 lg:left-[30%] w-[90%] lg:w-[40%] text-white'>
                  <h2 className='font-bold text-[1.7rem] mb-4'>Why choose us?</h2>
                  <p>A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p>
                </div>
               <div className='flex flex-col lg:flex-row space-between items-center relative -top-80 lg:-top-60 lg:left-[9%]'>
                   {
                  WhyChoose.map((item, index) => (
                     <CustomCard key={index} customType={1} data1={item}  />
                  ))
                }
                </div>
           </section>
           <section>
           <section className='flex flex-col justify-start items-start relative lg:-top-32'>
              <h2 className='text-[2rem] lg:text-[3rem] mb-17'>How it works</h2>
              <div className=' flex flex-col lg:flex-row my-2 lg:my-0 gap-6'>
                 {
                  WhiteData.map((item,index) => (
                     <CustomCard key={index} customType={2} data2={item}  />
                  ))
                 }
              </div>
           </section>
           </section>
      </main>
    </>
  )
}

export default Home
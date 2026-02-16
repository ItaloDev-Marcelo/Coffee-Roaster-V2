import CustomCard from '../../components/Card/CustomCard'
import HeroContainer from '../../components/Hero/HeroSection'
import { HeroBank } from '../../components/Hero/utils/HeroBank'
import {OurCollectionData} from '../../components/Data/OurCollectionData'
import { WhyChoose } from '../../components/Data/Whychoose'
import WhyUse from '../../assets/images/plan/desktop/bg-steps.png'
import { WhiteData } from '../../components/Data/NumData'
import { HomeSub, HomeTitle } from './utils/Home.txt'
import Footer from '../../components/Footer/Footer'
import Container from '../../components/Footer/Container'
import MainWrapper from '../../components/wrapper/MainWrapper'
const Home = () => {

  return (
    <>
      <MainWrapper>
        <HeroContainer photoType={HeroBank.Home} type='Home'
           title={HomeTitle} subtitle={HomeSub} btnActive={true} />
           <section className='relative text-center flex flex-col items-center  justify-center xl:top-40   lg:my-10'>
                <h2 className='font-bold text-4xl md:text-5xl mt-15 mb-5 lg:mb-0 lg:my-10 xl:text-[8rem] text-gray-500 
                xl:absolute left-[12%] top-[34%] xl:left-[18%] xl:-top-10   md:top-[40%]  '>our <br className='lg:hidden' />Collection</h2>

              <div className='flex flex-col md:flex-row md:flex-wrap md:gap-3
              md:justify-center md:items-center xl:space-between md:w-screen p-5 lg:my-7   xl:p-10 my-4'>
                   {
                 OurCollectionData.map((item, index) => (
                   <CustomCard key={index} customType={1} data1={item}  />
                 )) 
                }
              </div>
           </section>
           <section className='relative md:top-55 xl:top-60  md-3:top-30 px-5 lg:p-14.5 md-2:p-10 
           2xl:p-40 lg:left-[-1em] text-center'>
                <img src={WhyUse} className='w-screen  h-[95vh]  lg:h-[75vh] xl:h-[80vh] rounded-lg' />
                <div className='absolute top-20 p-7 md:p-15 lg:p-0 lg:top-30 xl:top-50 2xl:top-55 left-[5%]
                 lg:left-[30%] w-[90%] lg:w-[40%] text-white'>
                  <h2 className='font-bold text-[1.7rem]  mb-4'>Why choose us?</h2>
                  <p>A large part of our role is choosing which particular coffees will be featured in our range. This means working closely with the best coffee growers to give you a more impactful experience on every level.</p>
                </div>
               <div className='flex flex-col md:flex-row md:flex-wrap md:gap-6
                md:items-center md:justify-center space-between items-center relative -top-80
                md:-top-40 md-3:-top-75 lg:-top-40 xl:left-0 px-3'>
                   {
                  WhyChoose.map((item, index) => (
                     <CustomCard key={index} customType={1} data1={item}  />
                  ))
                }
                </div>
           </section>
           <section>
           <section className='flex flex-col justify-start items-start relative -top-50 
           md:top-30 md-3:-top-20 md-2:mb-30 md:mb-10 xl:mb-50 lg:top-30 xl:top-40 2xl:top-10 p-10 '>
              <h2 className='text-[2rem] font-bold lg:text-[3rem] mb-17'>How it works</h2>
              <div className=' flex flex-col md:flex-row md:flex-wrap justify-center items-center my-2 lg:my-0 md:gap-14 xl:gap-6'>
                 {
                  WhiteData.map((item,index) => (
                     <CustomCard key={index} customType={2} data2={item}  />
                  ))
                 }
              </div>
           </section>
           </section>
      </MainWrapper>
      <Container>
       <Footer />
      </Container>
      
    </>
  )
}

export default Home
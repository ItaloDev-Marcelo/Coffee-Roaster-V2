import { useState } from 'react'
import HeroContainer from '../../components/Hero/HeroSection'
import { HeroBank } from '../../components/Hero/utils/HeroBank'
import Steps from '../../assets/images/plan/desktop/bg-steps.png'
import { BlackData } from '../../components/Data/NumData'
import CustomCard from '../../components/Card/CustomCard'
import Accordion from '../../components/OrderSummary-accordion/Accordion'
import AsideMenu from '../../components/OrderSummary-accordion/AsideMenu/AsideMenu'

const CreateYourPlan = () => {
  
  const [accordionOpen, setAccordionOpen] = useState<number|null>(null)
  const handleAccordion = (campo: number | null) => accordionOpen === campo ? setAccordionOpen(null) : setAccordionOpen(campo)
  const title = 'Create a plan'
  const subtitle = 'Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.'

  return ( 
    <>
       <main className='flex flex-col justify-center items-center '>
                <HeroContainer photoType={HeroBank.Plan} type='Plan'
                 title={title} subtitle={subtitle}  btnActive={false} />
                 <section className='relative px-5 lg:p-14.5 lg:left-[-1em]  my-7 text-white'>
                    <img src={Steps} className='w-screen  h-[240vh]  lg:h-[90vh] rounded-lg' />
                     <div className=' flex flex-col lg:flex-row my-2 lg:my-0 gap-14 absolute top-25 left-25 lg:left-30 lg:top-50'>
                                     {
                                      BlackData.map((item,index) => (
                                         <CustomCard key={index} customType={2} data2={item}  />
                                      ))
                                     }
                                  </div>
                 </section>
                 <section className='flex flex-collg:flex-row lg:space-between p-25
                  lg:justify-between w-full'>
                      <div className='hidden lg:block  pt-9'><AsideMenu handleAccordion={handleAccordion} /></div>
                      <div className=' w-full lg:w-[65vw] '><Accordion handleAccordion={handleAccordion} accordionOpen={accordionOpen} /></div>
                 </section>
        </main>
    </>
  )
}

export default CreateYourPlan
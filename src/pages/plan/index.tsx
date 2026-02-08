import { useState } from 'react'
import HeroContainer from '../../components/Hero/HeroSection'
import { HeroBank } from '../../components/Hero/utils/HeroBank'
import Steps from '../../assets/images/plan/desktop/bg-steps.png'
import { BlackData } from '../../components/Data/NumData'
import CustomCard from '../../components/Card/CustomCard'
import Accordion from '../../components/OrderSummary-accordion/Accordion'
import AsideMenu from '../../components/OrderSummary-accordion/AsideMenu/AsideMenu'
import ModalTop from '../../assets/images/plan/desktop/bg-order-summary.png'
import type { SubInfoType } from '../../types/Accordion.types'

const CreateYourPlan = () => {
  
  const [accordionOpen, setAccordionOpen] = useState<number|null>(null)
  const handleAccordion = (campo: number | null) =>
  accordionOpen === campo ? setAccordionOpen(null) : setAccordionOpen(campo)
  const title = 'Create a plan'
  const subtitle = 'Build a subscription plan that best fits your needs. We offer an assortment of the best artisan coffees from around the globe delivered fresh to your door.'
  const [subInfo, setSubInfo] = useState<SubInfoType>({
      item1: '_____',
      item2: '_____',
      item3: '_____',
      item4: '_____',
      item5: '_____'
    })
  const handleInfo = (name: string, title: string) =>  setSubInfo(prev => ({
    ...prev,
    [name]: title
  })) 



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
                   
                 <section className='flex flex-col lg:flex-row lg:space-between p-20 lg:p-25
                  lg:justify-between w-full'>
                      <div className='hidden lg:block  pt-9'><AsideMenu handleAccordion={handleAccordion} /></div>
                      <div className=' w-full lg:w-[65vw] flex flex-col '>
                        <Accordion handleAccordion={handleAccordion} accordionOpen={accordionOpen}
                        handleInfo={handleInfo} subInfo={subInfo}
                        />
                           <div className='relative  my-7 text-white'>
                     <img src={ModalTop} alt='' className=' w-[90vw]  h-[300px] h-[99%] rounded-lg' />
                     <div className='text-white absolute top-10 left-7 lg:left-10 '>
                       <h4 className='font-bold text-2xl mb-4'> Order summary</h4>
                       <p className='text-2xl font-semibold lg:text-3xl w-[85%] lg:w-[80%] leading-12  '>“ I drink my coffee as  <span className='text-[#0E8784] tracking-wide'>{subInfo.item1}</span> , with a  <span className='text-[#0E8784] tracking-wide'>{subInfo.item2}</span>  type of bean.
                         <span className='text-[#0E8784] tracking-wide'>{subInfo.item3}</span>  ground ala <span className='text-[#0E8784] tracking-wide'>{subInfo.item4}</span> , sent to me <span className='text-[#0E8784] tracking-wide'>{subInfo.item5}</span>. ”</p>
                     </div>
                     <p>    </p>
                 </div>
                        </div>
                 </section>
            
        </main>
    </>
  )
}

export default CreateYourPlan
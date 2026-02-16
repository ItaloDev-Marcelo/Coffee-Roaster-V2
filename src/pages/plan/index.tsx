import { useState } from 'react'
import HeroContainer from '../../components/Hero/HeroSection'
import { HeroBank } from '../../components/Hero/utils/HeroBank'
import Steps from '../../assets/images/plan/desktop/bg-steps.png'
import { BlackData } from '../../components/CustomImage/NumData'
import CustomCard from '../../components/Card/CustomCard'
import Accordion from '../../components/OrderSummary-accordion/Accordion'
import AsideMenu from '../../components/OrderSummary-accordion/AsideMenu/AsideMenu'
import ModalTop from '../../assets/images/plan/desktop/bg-order-summary.png'
import type { SubInfoType } from '../../types/Accordion.types'
import Footer from '../../components/Footer/Footer'
import Container from '../../components/Footer/Container'
import MainWrapper from '../../components/wrapper/MainWrapper'
import ModalBlock from '../../components/Modal/Modal'
import BubbleLineBlack from '../../components/bubbleLine/BubbleLineBlack'
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

    const [modal, setModal] = useState(false);

  const handleInfo = (name: string, title: string) =>  setSubInfo(prev => ({
    ...prev,
    [name]: title
  })) 


  
  const Result = subInfo.item1 !== '_____'  && subInfo.item2  !== '_____' && subInfo.item3  !== '_____'
  && subInfo.item4  !== '_____' && subInfo.item5  !== '_____'

  const handelModal = () => {
  setModal(!modal) 
  }


  return ( 
   <>
      <div className={Result && modal ? 'fixed z-1000 inset-0 w-screen h-screen bg-black/40 backdrop-blur-md ' : ''}>
    </div>
     <MainWrapper>
           <HeroContainer photoType={HeroBank.Plan} type='Plan'
                 title={title} subtitle={subtitle}  btnActive={false} />
                 <section className='relative px-5 md:px-10 md:my-20 lg:p-14.5 xl:p-20 lg:left-[-1em] my-7 text-white'>
                    <img src={Steps} className='w-screen  h-[220vh] md:h-125 lg:h-[140vh] xl:h-137.5  rounded-lg' />
                                      
                     <div className=' flex flex-col md:flex-row items-center justify-center  flex-wrap px-2 lg:px-0 lg:flex-row my-2 
                      lg:my-0 gap-2 absolute top-5 lg:gap-x-19 xl:gap-x-15  lg:left-0 xl:left-30 xl:top-50 lg:top-20'>
                          <div className='absolute w-300 left-2 -top-25'><BubbleLineBlack /></div>   
                                     {
                                      BlackData.map((item,index) => (
                                         <CustomCard key={index} customType={2} data2={item}  />
                                      ))
                                     }
                                  </div>
                 </section>        
                 <section className='flex flex-col lg:flex-row lg:space-between p-7 lg:p-15 xl:p-25
                  lg:justify-between w-full relative'>
                      <div className='hidden lg:block  pt-9'><AsideMenu handleAccordion={handleAccordion} /></div>
                      <div className=' w-full md:px-8 lg:w-[65vw] flex flex-col '>
                        <Accordion handleAccordion={handleAccordion} accordionOpen={accordionOpen}
                        handleInfo={handleInfo} subInfo={subInfo}
                        />
                        
                           <div className='relative  my-7 text-white'>
                     <img src={ModalTop} alt='' className=' w-[90vw]   h-75 md:h-65   lg:h-100 xl:h-87.5  rounded-lg' />
                     <div className='text-white absolute top-10 left-7 lg:left-10 '>
                       <div className='relative'>
                           <h4 className='font-bold text-2xl mb-4'> Order summary</h4>
                       <p className='text-1.9xl font-semibold lg:text-3xl w-[86%]
                        lg:w-[80%] leading-9 lg:leading-12 '>“ I drink my coffee as  <span className='text-[#0E8784] tracking-wide'>{subInfo.item1}</span> , with a  <span className='text-[#0E8784] tracking-wide'>{subInfo.item2}</span>  type of bean.
                         <span className='text-[#0E8784] tracking-wide'>{subInfo.item3}</span>  ground ala <span className='text-[#0E8784] tracking-wide'>{subInfo.item4}</span> , sent to me <span className='text-[#0E8784] tracking-wide'>{subInfo.item5}</span>. ”</p>
                     </div>
                     <p>    </p>
                 </div>
                    <ModalBlock modal={modal} handelModal={handelModal} subInfo={subInfo}/>
                    <button disabled={!Result} className={Result ? 'btn w-40 mt-10 text-white bg-cyan-900' : ' btn w-40 mt-10 text-black bg-gray-300'} onClick={handelModal} >Create your Plan</button>
                  
                       </div>
                        </div>
                 </section>
       </MainWrapper>
       <div className='px-5'>
         <Container>
          <Footer/>
        </Container>
       </div>
   </>
  )
}

export default CreateYourPlan
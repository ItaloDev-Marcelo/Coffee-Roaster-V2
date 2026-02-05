import { useState } from 'react'
import AccordionItem from './AccordionItem'
import AccordionOption from './AccordionOption'
import { accordionData0 } from './Data/AccordionData'
import AsideMenu from './AsideMenu/AsideMenu'
import type { SubInfoType } from '../../types/Accordion.types'

const Accordion = () => {


  const [accordionOpen, setAccordionOpen] = useState<number|null>(null)

  const [subInfo, setSubInfo] = useState<SubInfoType>({
    item1: '',
    item2: '',
    item3: '',
    item4: '',
    item5: ''
  })


  const handleAccordion = (campo: number | null) =>
  accordionOpen === campo ? setAccordionOpen(null) : setAccordionOpen(campo)
 
  const handleInfo = (name: string, title: string) =>  setSubInfo(prev => ({
    ...prev,
    [name]: title
  })) 


  return (

    <div>    
      <div>
        <AsideMenu handleAccordion={handleAccordion} />
      </div>
         <AccordionItem handleAccordion={handleAccordion} data={accordionData0[0]} index={0} accordionOpen={accordionOpen}> 
           {
             accordionData0[0].accordionItems.map(item => (
               <AccordionOption data={item} subInfo={subInfo.item1} handleInfo={handleInfo} />
             ))
           }
         </AccordionItem>
         <AccordionItem handleAccordion={handleAccordion} data={accordionData0[1]} index={1} accordionOpen={accordionOpen}> 
           {
             accordionData0[1].accordionItems.map(item => (
               <AccordionOption data={item} subInfo={subInfo.item2} handleInfo={handleInfo} />
             ))
           }
         </AccordionItem>
         <AccordionItem handleAccordion={handleAccordion} data={accordionData0[2]} index={2} accordionOpen={accordionOpen}> 
           {
             accordionData0[2].accordionItems.map(item => (
               <AccordionOption data={item} subInfo={subInfo.item3} handleInfo={handleInfo} />
             ))
           }
         </AccordionItem>
         <AccordionItem handleAccordion={handleAccordion} data={accordionData0[3]} index={3} accordionOpen={accordionOpen}> 
           {
             accordionData0[3].accordionItems.map(item => (
               <AccordionOption data={item} subInfo={subInfo.item4} handleInfo={handleInfo} />
             ))
           }
         </AccordionItem>
         <AccordionItem handleAccordion={handleAccordion} data={accordionData0[4]} index={4} accordionOpen={accordionOpen}> 
           {
             accordionData0[4].accordionItems.map(item => (
               <AccordionOption data={item} subInfo={subInfo.item5} handleInfo={handleInfo} />
             ))
           }
         </AccordionItem>
    </div>
  )
}

export default Accordion
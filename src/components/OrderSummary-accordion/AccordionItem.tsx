import {IconArrow} from '../../assets/images/svgAssetComponents/IconArrow.tsx'
import type { AccordionItemProps } from '../../types/Accordion.types.ts';
const AccordionItem = ({handleAccordion,index,accordionOpen, children, data}:AccordionItemProps) => {

  return (
    <div>
        <div>
            <div className='header flex flex-row   h-10 items-center my-5' onClick={() => handleAccordion(index)}>
             <div className='flex flex-row justify-between items-center  w-full'>
              <div className='cursor-pointer'> <p className='mr-2.5 text-1.7xl text-cyan-900  font-bold'><span className={accordionOpen == index ? ' text-cyan-700' : ''}>{data.accordionTitle}</span></p> </div>

                 <div className={accordionOpen == index ? 
                'rotate-180 delay-50 duration-300 ease-in-out scale-75 ' :
                 'flex delay-50 duration-300 ease-in-out scale-75  '}> 
                 <IconArrow /></div>
            </div> 
             </div>
            <div className={accordionOpen == index ? 'flex  p-5 flex-col lg:flex-row gap-10 space-between h-140  md:h-125 lg:h-70   text-white' : 'hidden'}>
              {children}
            </div>
        </div>
    </div>
  )
}

export default AccordionItem
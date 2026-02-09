import {IconArrow} from '../../assets/images/svgAssetComponents/IconArrow.tsx'
import type { AccordionItemProps } from '../../types/Accordion.types.ts';
const AccordionItem = ({handleAccordion,index,accordionOpen, children, data}:AccordionItemProps) => {

  return (
    <div>
        <div>
            <div className='header flex flex-row   h-10 space-between items-center my-5' onClick={() => handleAccordion(index)}>
             <div className='flex flex-row justify-between items-center  w-full'>
g                <div className='cursor-pointer'> <p className='mr-2.5 text-1.7xl text-gray-500 font-bold'><span className={accordionOpen == index ? 'text-green-700' : ''}>{data.accordionTitle}</span></p> </div>

                 <div className={accordionOpen == index ? 
                'rotate-180 delay-50 duration-300 ease-in-out scale-75 ' :
                 'flex delay-50 duration-300 ease-in-out scale-75  '}> 
                 <IconArrow /></div>
            </div> 
             </div>
            <div className={accordionOpen == index ? 'flex  p-5 flex-col lg:flex-row gap-10 h-125 lg:h-60   text-white' : 'hidden'}>
              {children}
            </div>
        </div>
    </div>
  )
}

export default AccordionItem
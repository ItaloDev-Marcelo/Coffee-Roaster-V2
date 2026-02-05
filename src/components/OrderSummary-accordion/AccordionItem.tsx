import {IconArrow} from '../../assets/images/svgAssetComponents/IconArrow.tsx'
import type { AccordionItemProps } from '../../types/Accordion.types.ts';

const AccordionItem = ({handleAccordion,index,accordionOpen, children, data}:AccordionItemProps) => {

  return (
    <div>
        <div>
            <div className='header flex flex-row space-between items-center' onClick={() => handleAccordion(index)}>
              <p>{data.accordionTitle}</p> <div className={accordionOpen == index ? 
                'rotate-180 delay-50 duration-300 ease-in-out' : 'flex delay-50 duration-300 ease-in-out'}> 
                 <IconArrow /></div></div>
            <div className={accordionOpen == index ? 'flex bg-blue-400 p-4 text-white' : 'hidden'}>
              {children}
            </div>
        </div>
    </div>
  )
}

export default AccordionItem
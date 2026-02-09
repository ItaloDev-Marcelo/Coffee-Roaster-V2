import { render, screen} from '@testing-library/react'
import AccordionItem from '../AccordionItem'
import { vi } from 'vitest';
import { accordionData0 } from '../Data/AccordionData';
import AccordionOption from '../AccordionOption';

describe('AccordionItem era Aparecer', () => {
     it('AccordionItem vai aparecer com o text, How do you drink you coffee?', () => {
          const   handleAccordion = vi.fn();
        render(<AccordionItem handleAccordion={handleAccordion} 
         data={accordionData0[0]} index={0} accordionOpen={1} >o</AccordionItem>)
         expect(screen.getByText('How do you drink you coffee?')).toBeInTheDocument()
     })

     it('AcoordionOption dever aparecer', () => {
            const   handleInfo = vi.fn();
            const   handleAccordion = vi.fn();
        render(<AccordionItem handleAccordion={handleAccordion} 
         data={accordionData0[0]} index={0} accordionOpen={1} >
            {
                        accordionData0[0].accordionItems.map(item => (
                          <AccordionOption data={item} subInfo={'____'} handleInfo={handleInfo} />
                        ))
          }
         </AccordionItem>)


      expect(screen.getByText('Compatible with Nespresso systems and similar brewers')).toBeInTheDocument()
      expect(screen.getByText('For pour over or drip methods like Aeropress, Chemex, and V60')).toBeInTheDocument()
      expect(screen.getByText('Dense and finely ground benas for an intense, flavorful experience')).toBeInTheDocument()

     })
})
import type { AsideProps } from "../../../types/Aside.type"

const AsideMenu = ({handleAccordion}:AsideProps) => {

    const AsideList = ['01 Preferences', '02 Bean type', '03 Quantity', '04 Grind Option', '05 Deliveries']
  
    return (
    <aside>
       <nav>
          <ul>
             {
                AsideList.map((item,index) => (
                      <li key={index} onClick={() => handleAccordion(index)} className='mb-6 flex gap-4 items-center cursor-pointer'>
                        <span className='text-cyan-900 font-bold hover:text-cyan-800'>{item}</span>
                     </li>
                ))
            }
          </ul>
       </nav>
    </aside>
  )
}

export default AsideMenu
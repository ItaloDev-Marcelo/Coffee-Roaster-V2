import type { AccordionOptionProps } from "../../types/Accordion.types"

const AccordionOption = ({handleInfo, data, subInfo}:AccordionOptionProps) => {
  const {title,item,text} = data
  return (
    <div onClick={() => handleInfo( item,title)} 
    className={subInfo === title ? 'bg-teal-700 text-white p-4 rounded-md  cursor-pointer' : 
    'hover:bg-orange-200 text-black cursor-pointer p-4 bg-white shadow-md rounded-md'} >
        <h2 className="text-2xl font-bold mb-2">{title}</h2>
        <p>{text}</p>
    </div>
  )
}

export default AccordionOption
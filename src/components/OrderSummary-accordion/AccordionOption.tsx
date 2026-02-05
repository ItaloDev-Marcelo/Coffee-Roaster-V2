import type { AccordionOptionProps } from "../../types/Accordion.types"

const AccordionOption = ({handleInfo, data, subInfo}:AccordionOptionProps) => {
  const {title,item,text} = data
  return (
    <div onClick={() => handleInfo( item,title)} className={subInfo === title ? 'bg-red-400' : 'bg-pink-400'} >
        <h2>{title}</h2>
        <p>{text}</p>
    </div>
  )
}

export default AccordionOption
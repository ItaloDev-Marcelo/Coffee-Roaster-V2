import type { CardType2Props } from "../../types/Card.types"
import Button from "../Plan-Button/Button"

const CardType2 = ({num, title, description, hasAButton, style}:CardType2Props) => {
  return (
    <article className={`w-70 relative md:w-68 p-2 lg:p-0 lg:w-75  my-4 lg:my-0 lg:mx-0 ${style}`}>
         <h3 className='font-bold text-[7rem] lg:text-[6.5rem]'>{num}</h3>
         <h4 className="text-2xl font-semibold w-37.5 lg:w-75">{title}</h4>
         <p className="my-5">{description}</p>
         {hasAButton && <Button/>}
    </article>
  )
}

export default CardType2
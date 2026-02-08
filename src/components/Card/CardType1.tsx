import type { CardType1Props } from "../../types/Card.types"

const CardType1 = ({style,imgSpace,icon, title,description}:CardType1Props) => {
  return (
    <article className={style}>
         <figure>
              <img src={icon} className={imgSpace} alt='icon' />
         </figure>
         <h3 className="text-2xl font-bold lg:text-2.5xl pb-3">{title}</h3>
         <p>{description}</p>
    </article>
  )
}

export default CardType1
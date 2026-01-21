

export type CardType1Props = {
    style: string;
    space?: boolean;
    imgSpace: string;
    icon: string;
    title: string;
    description: string;
}


const CardType1 = ({style, space, imgSpace,icon, title,description}:CardType1Props) => {

  console.log(space);

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
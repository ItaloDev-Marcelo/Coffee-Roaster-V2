import Button from "../Plan-Button/Button"


export type CardType2Props = {
    num: string | number;
    title: string;
    description: string;
    hasAButton: boolean;
}

const CardType2 = ({num, title, description, hasAButton}:CardType2Props) => {
  return (
    <article className='w-82.5 lg:w-75  my-4 lg:my-0 lg:mx-0'>
         <h3 className='font-bold text-[7rem] lg:text-[6.5rem]'>{num}</h3>
         <h4 className="text-2xl font-semibold w-37.5 lg:w-75">{title}</h4>
         <p className="my-5">{description}</p>
         {hasAButton && <Button/>}
    </article>
  )
}

export default CardType2
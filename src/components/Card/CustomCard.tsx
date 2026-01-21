import CardType1, { type CardType1Props } from './CardType1'
import CardType2, { type CardType2Props } from './CardType2'


type customCardProps = {
    customType: number;
    data1?: CardType1Props ;
    data2?:  CardType2Props ;
}


const CustomCard = ({customType, data1, data2}: customCardProps) => {
    return  (
        <>
          {customType === 1 ? data1 && <CardType1 {...data1} /> : data2 && <CardType2 {...data2} />}
        </>
    )

}

export default CustomCard
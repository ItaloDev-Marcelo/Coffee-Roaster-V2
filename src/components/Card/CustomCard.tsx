import type { customCardProps } from '../../types/Card.types'
import CardType1 from './CardType1'
import CardType2  from './CardType2'

const CustomCard = ({customType, data1, data2}:customCardProps) => {
    return  (
        <>
          {customType === 1 ? data1 && <CardType1 {...data1} /> : data2 && <CardType2 {...data2} />}
        </>
    )

}

export default CustomCard
export type CardType1Props = {
    style: string;
    imgSpace: string;
    icon: string;
    title: string;
    description: string;
}


export type CardType2Props = {
    style?: string;
    num: string | number;
    title: string;
    description: string;
    hasAButton: boolean;
}


export type customCardProps = {
    customType: number;
    data1?: CardType1Props ;
    data2?:  CardType2Props ;
}
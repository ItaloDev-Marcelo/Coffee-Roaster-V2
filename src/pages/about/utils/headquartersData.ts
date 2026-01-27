import UnitedKindomIcon from '../../../assets/images/about/desktop/illustration-uk.svg';
import CanadaIcon from '../../../assets/images/about/desktop/illustration-canada.svg';
import AustraliaIcon from '../../../assets/images/about/desktop/illustration-australia.svg';



type Headquarters = {
    icon: string;
    country: string;
    city: string;
    cityInfo: string;
    address: string;
    phone: string;
}

export const HeadquartersData:Headquarters[] = [
    {
        icon:  UnitedKindomIcon,
        country: 'United Kingdom',
        city:'68 Asfordby Rd',
        cityInfo:'Alcaston',
        address: 'SY6 1YA',
        phone: '+44 1241 918425'
    },
    {
        icon: CanadaIcon,
        country: 'Canada',
        city:'1528 Eglinton Avenue',
        cityInfo:'Toronto',
        address: 'Ontario M4P 1A6',
        phone: '+1 416 485 2997'
    },
    {
        icon:  AustraliaIcon ,
        country: 'Australia',
        city:'36 Swanston Street',
        cityInfo:'Kewell',
        address: 'Victoria',
        phone: '+61 4 9928 3629'
    }
]
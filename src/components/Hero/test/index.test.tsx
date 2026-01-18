import {HeroBank} from '../utils/HeroBank';
import Hero from '../Hero'
import HeroSection from '../HeroSection';
import { render, screen } from '@testing-library/react';

describe('testing if the images files will start or not: ', () => {
   it('should render Hero component with Home images', () => {
    const {mobile, tablet, desk} = HeroBank.Home;
    const {getByRole} = render(<Hero mobile={mobile} tablet={tablet} desk={desk} type='Home' />);
    getByRole('img', { name: /mobile-hero/i });
    getByRole('img', { name: /tablet-hero/i });
    getByRole('img', { name: /desktop-hero/i });
   })
})

describe('render HeroSection', () => {
   it('should render HeroSection with a type:' , () => {
     render(<HeroSection photoType={HeroBank.Home} type='Home' title='Welcome' 
      subtitle='This is the hero section' btn='Get Started' btnActive={true} />);

      screen.getByText('Welcome');
      screen.getByText('This is the hero section');
      screen.getByRole('button', {name: /Get Started/i});
   })
})
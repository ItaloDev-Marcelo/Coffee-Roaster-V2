import HomeHeroDesk from '../../../assets/images/home/desktop/image-hero-coffeepress.jpg';;
import HomeHeroTab from '../../../assets/images/home/tablet/image-hero-coffeepress.jpg';
import HomeHeroMob from '../../../assets/images/home/mobile/image-hero-coffeepress.jpg';
import AboutHeroDesk from '../../../assets/images/about/desktop/image-hero-whitecup.jpg';
import AboutHeroTab from '../../../assets/images/about/tablet/image-hero-whitecup.jpg';
import AboutHeroMob from '../../../assets/images/about/mobile/image-hero-whitecup.jpg';
import CreateHeroDesk from '../../../assets/images/plan/desktop/image-hero-blackcup.jpg';
import CreateHeroTab from '../../../assets/images/plan/tablet/image-hero-blackcup.jpg';
import CreateHeroMob from '../../../assets/images/plan/mobile/image-hero-blackcup.jpg';
import type { HeroBankType } from '../../../types/hero.type';

export const HeroBank:HeroBankType = {
    Home: {
        mobile: HomeHeroMob,
        tablet: HomeHeroTab,
        desk: HomeHeroDesk 
    },
     About: {
        mobile: AboutHeroMob,
        tablet: AboutHeroTab,
        desk: AboutHeroDesk 
    },
    Plan: {
        mobile: CreateHeroMob,
        tablet: CreateHeroTab,
        desk: CreateHeroDesk
    }
}
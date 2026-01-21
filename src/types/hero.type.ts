
export type HeroImages = {
    mobile: string; 
    tablet: string,
    desk: string, 
}

export type HeroType = {
    type: string 
}

export type HeroProps = HeroImages & HeroType

export type HeroContainerProps = {
    photoType: HeroImages,
    title: string,
    subtitle: string,
    btnActive: boolean
} & HeroType

export type HeroBankType = {
    Home: HeroImages,
    About: HeroImages,
    Plan: HeroImages
}
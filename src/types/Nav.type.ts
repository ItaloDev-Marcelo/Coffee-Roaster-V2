export interface NavBarProps {handleNav: () => void, type: boolean}

export interface NavlinkProps {
    path: string,
    name: string,
    handleNav: () => void,
    type: boolean
}
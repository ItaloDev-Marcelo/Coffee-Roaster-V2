import type {ReactElement} from "react";

export type RouteType = {
    path: string,
    element: ReactElement
}

export type LinkRouteType = {
    name: string,
    path: string
}
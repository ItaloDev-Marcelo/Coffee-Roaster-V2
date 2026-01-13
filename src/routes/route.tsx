import Home from '../pages/home/index';
import AboutUs from '../pages/about/index';
import Plan from '../pages/plan/index';
import type { RouteType, LinkRouteType} from '../types/Routes.type';

export const RouteList:RouteType[] = [
    {
      path: '/',
      element: <Home/>
    },
    {
     path: '/About-us',
     element: <AboutUs />
    },
    {
     path: '/Create-Plan',
     element: <Plan/>
    }
]

export const LinkRoutes:LinkRouteType[] = [
    {
        name: 'Home',
        path:  './'
    },
    {
        name: 'About Us',
        path: '/About-us'
    },
    {
        name: 'Create your plan',
        path: '/Create-Plan'
    }
]
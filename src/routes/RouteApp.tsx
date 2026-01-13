import {Route, Routes} from 'react-router-dom';
import {RouteList} from './route'
const RouteApp = () => {
  return (
    <Routes>
        {
            RouteList.map((route, index) => (<Route key={index} path={route.path} element={route.element} />))
        }
    </Routes>
  )
}

export default RouteApp
import {Link} from 'react-router-dom'
import type { NavlinkProps } from '../../../types/Nav.type'

const NavLink = ({path, name, handleNav, type}: NavlinkProps) => {
  return (
    <>
      {type ? <li onClick={handleNav} className='my-3 lg:my-0 lg:mx-2 font-semibold text-gray-400 text-lg cursor-pointer hover:text-gray-600 '><Link to={path}>{name}</Link></li> :
     <li  className='my-2 lg:my-0 lg:mx-4 font-semibold text-gray-400 cursor-pointer hover:text-gray-600'><Link to={path}>{name}</Link></li>}
    </>
  )
}

export default NavLink
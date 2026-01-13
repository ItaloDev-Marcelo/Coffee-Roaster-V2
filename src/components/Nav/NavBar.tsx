import { LinkRoutes } from "../../routes/route"
import NavLink from "./Nav-link/NavLink"
import Logo from '../../assets/images/shared/desktop/logo.svg';
import close from '../../assets/images/shared/mobile/icon-close.svg';
import type { NavBarProps } from "../../types/Nav.type";

const NavBar = ({handleNav, type}:NavBarProps ) => {
  return (
    <nav className='bg-gray-200  lg:bg-transparent w-full h-screen md:h-25 p-5 flex
     fixed top-0 lg:relative flex-col items-start justify-start lg:px-15  md:flex-row md:justify-between md:items-center'>
        <a href='#' className='hidden lg:flex'><img src={Logo} alt='logo' className='w-42.5'/> </a> 

       <div>
         <button onClick={handleNav} className='lg:hidden'><img src={close} alt='close' /></button>
         <ul  className='flex flex-col items-center  justify-center 
           mt-25 lg:mt-0  w-82.5 lg:w-full  md:flex-row md:items-start'>
            {
               LinkRoutes.map((link, index) => (
                 <NavLink key={index} name={link.name} path={link.path} handleNav={handleNav} type={type} />
               ))
            }
        </ul>
       </div>

    </nav>
  )
}

export default NavBar
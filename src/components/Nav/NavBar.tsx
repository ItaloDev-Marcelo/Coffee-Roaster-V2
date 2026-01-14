import { LinkRoutes } from "../../routes/route"
import NavLink from "./Nav-link/NavLink"
import Logo from '../../assets/images/shared/desktop/logo.svg';
import close from '../../assets/images/shared/mobile/icon-close.svg';
import type { NavBarProps } from "../../types/Nav.type";

const NavBar = ({handleNav, type}:NavBarProps ) => {
  return (
    <nav className='bg-gray-200  lg:bg-transparent w-full h-screen md:h-25 p-5 flex
     fixed top-0 lg:relative flex-col items-start justify-start
      lg:px-15 2xl:mt-3 2xl:px-12  md:flex-row md:justify-between md:items-center'>
        <a href='#' className='hidden lg:flex '><img src={Logo} alt='logo' className='w-42.5 2xl:w-50 2xl:pl-3'/> </a> 

       <div className='p-2'>
         <button onClick={handleNav} className='lg:hidden'><img src={close} alt='close' /></button>
         <ul  className='flex flex-col items-center  justify-center w-screen
           mt-25 lg:mt-0  lg:w-90 2xl:w-110 px-2  md:flex-row md:items-center'>
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
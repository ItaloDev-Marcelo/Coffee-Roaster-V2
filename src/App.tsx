import { useState } from "react"
import NavBar from "./components/Nav/NavBar"
import RouteApp from "./routes/RouteApp"
import Logo from './assets/images/shared/desktop/logo.svg';
import humburger from './assets/images/shared/mobile/icon-hamburger.svg';

function App() {

  const [navActive, setNavActive] = useState(true)
  const handleNav = () => setNavActive(!navActive)

  return (
    <>
      <nav className='flex flex-row lg:hidden h-20 justify-between items-center p-5 md-2:px-12'>
            <a href='#'><img src={Logo} alt='logo' className='w-37.5'/> </a> 
            <button onClick={handleNav}><img src={humburger} alt='humburger' /></button> 
      </nav>

      {!navActive ? <div className='lg:hidden'><NavBar handleNav={handleNav} type={true} /></div> : null}
      <div className='hidden lg:flex'><NavBar handleNav={handleNav} type={false} /></div>
      {navActive ? <RouteApp/> : null}
    </>
  )
}

export default App

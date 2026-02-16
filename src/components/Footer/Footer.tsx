
import LogoWhite from '../../assets/images/shared/desktop/logo-white.svg'
import LogoInstagram from '../../assets/images/shared/desktop/icon-instagram.svg'
import LogoTwitter from '../../assets/images/shared/desktop/icon-twitter.svg'
import LogoFacebook from '../../assets/images/shared/desktop/icon-facebook.svg'
import bg from '../../assets/images/plan/desktop/bg-order-summary.png'
const Footer = () => {
    const NavFooter = ['Home', 'About us', 'Create your plan']
    const FooterSocialIcons = [LogoFacebook, LogoTwitter, LogoInstagram]
  return (
    <footer className='relative text-white mb-7'>
           <div className='absolute -top-5 left-0 ' >
             <img src={bg} alt='backgound' className='w-screen h-97 lg:h-25 rounded-md' />
           </div>
     <div className='text-white absolute top-5 lg:top-0  w-full
      flex items-center justify-center lg:justify-between flex-col lg:flex-row px-25'>
         <div className='py-4'>
             <img src={LogoWhite} alt='footerLogo' />
         </div>
       <div>
          <ul className='flex flex-col items-center justify-center  lg:flex-row gap-10 py-4 w-38.75 lg:w-100 '>
           {
            NavFooter.map((item, index) => (
                <li key={index} className='cursor-pointer hover:text-gray-900'>{item}</li>
            ))
           }
         </ul>
       </div>

         <div className='flex flex-row mt-4 lg:mt-0 gap-5 py-4'>
            {
                FooterSocialIcons.map((item, index) => (
                    <div key={index} >
                       <img src={item} alt='' className='cursor-pointer' />
                    </div>
                ))
            }
         </div>
     </div>


    </footer>
  )
}

export default Footer

type CustomImageProps = {
  mobile: string
  tablet: string
  desk: string
}

const CustomImage = ({mobile,tablet,desk}:CustomImageProps) => {
  return (
    <div>
       <img src={mobile} alt='' className='md:hidden w-82.5 rounded-md' />
        <img src={tablet} alt=''className='hidden md:block lg:hidden rounded-md' />
         <img src={desk} alt='' className='hidden lg:block rounded-lg' />
    </div>
  )
}

export default CustomImage
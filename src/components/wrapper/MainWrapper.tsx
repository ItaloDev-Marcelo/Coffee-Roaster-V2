type MainWrapperProp = {
    children: React.ReactNode
}

const MainWrapper = ({children}:MainWrapperProp) => {
  return (
    <main className='flex flex-col justify-center items-center mb-4'>{children}</main>
  )
}

export default MainWrapper
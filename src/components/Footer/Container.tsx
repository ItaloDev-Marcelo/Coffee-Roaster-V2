import type React from "react"

type containerProp = {children: React.ReactNode}

const Container = ({children}:containerProp ) => {
  return (
    <div className='py-5 px-2.5 md:p-10 md-2:p-10  lg:p-20 mb-90 lg:mb-0'>{children}</div>
  )
}

export default Container
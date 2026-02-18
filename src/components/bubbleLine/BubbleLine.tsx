
const BubbleLine = () => {
  return (
   <div className='xl:flex-row hidden xl:flex  justify-between items-center w-[50%] relative my-10'>
     <div className='w-170 h-0.5 bg-[#ffd4b9] absolute top-4 left-2 '></div>
      <div className='w-3.5 h-3.5 border relative  bg-white border-cyan-700 rounded-[50%] p-4'></div>
      <div className='w-3.5 h-3.5 border relative bg-white  left-25 border-cyan-700 rounded-[50%] p-4'></div>
      <div className='w-3.5 h-3.5 border relative  bg-white left-55 border-cyan-700 rounded-[50%] p-4'></div>
    </div>
  )
}

export default BubbleLine

const BubbleLine = () => {
  return (
   <div className='xl:flex-row hidden xl:flex  justify-between items-center w-[50%] relative my-10'>
     <div className='w-170 h-0.5 bg-pink-400 absolute top-5 left-2 '></div>
      <div className='w62.5 h-6.5 border relative  bg-white border-cyan-700 rounded-[50%] p-5'></div>
      <div className='w-6.5 h-6.5 border relative bg-white  left-25 border-cyan-700 rounded-[50%] p-5'></div>
      <div className='w-6.5 h-6.5 border relative  bg-white left-55 border-cyan-700 rounded-[50%] p-5'></div>
    </div>
  )
}

export default BubbleLine
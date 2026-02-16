import type { SubInfoType } from "../../types/Accordion.types"

type moldaProps = {
  modal: boolean, 
  handelModal: () => void,
  subInfo: SubInfoType
}


const ModalBlock = ({modal,handelModal,subInfo}:moldaProps) => {
  return (
 <div  className={modal ? 'absolute top-2 left-2 md:p-10 lg:-left-7 p-5  w-[80vw] md:h-70 h-85 lg:w-[60vw] lg:h-92.5  xl:h-75  z-1000  bg-white rounded-md': 'hidden'} >
  <div className=" text-black ">
    <h3 className="font-bold text-lg">Order Summary</h3>
    <p className='text-1.9xl font-semibold  my-4 lg:text-2xl w-[86%]
                        lg:w-[80%] leading-9 lg:leading-12 '>“ I drink my coffee as  <span className='text-[#0E8784] tracking-wide'>{subInfo.item1}</span> , with a  <span className='text-[#0E8784] tracking-wide'>{subInfo.item2}</span>  type of bean.
                         <span className='text-[#0E8784] tracking-wide'>{subInfo.item3}</span>  ground ala <span className='text-[#0E8784] tracking-wide'>{subInfo.item4}</span> , sent to me <span className='text-[#0E8784] tracking-wide'>{subInfo.item5}</span>. ”</p>
                  
    <div className="">
      <form method="dialog">
        <button className="btn blue-900 mt-2.5 w-30 bg-cyan-900 text-white " onClick={handelModal}>Close</button>
      </form>
    </div>
  </div>
 </div>
  )
}

export default ModalBlock
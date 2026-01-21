import { useNavigate } from "react-router-dom"

const Button = () => {

  const navigate = useNavigate();
 
  return (
   <button className='mt-5 text-white font-bold bg-blue-600 p-2 w-40 rounded-sm'onClick={() => navigate('/Create-Plan')}>create your plan</button>
  )
}

export default Button
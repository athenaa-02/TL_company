import {Menu, X} from 'lucide-react'

function IconButton ({ onClick, children}){
  return(<>
  <button onClick={onClick} className='md:hidden text-fwhite cursor-pointer  hover:scale-112 transition-transform duration-400'>
{children}
  </button>
  </>)
}

export default IconButton
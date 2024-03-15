// import icons
import { FaRegUserCircle } from 'react-icons/fa'
import { LiaNewspaper } from "react-icons/lia"
import { CiSearch } from "react-icons/ci"

const Navbar = () => {
    return (
        <nav className='max-w-[1440px] px-8 py-4 bg-white border-b border-slate-300 mx-auto'>
            <div className='flex items-center justify-between'>
                <div className='flex items-center px-5 py-1 bg-violet-700 text-white rounded-full'>
                    <LiaNewspaper className='text-[40px]' />
                    <span className='font-semibold '>News</span>
                </div>
                <div className='flex items-center gap-x-2'>
                    <input type='text' placeholder='Pesquise por um título' className='border text-gray-400 border-gray-300 rounded-md focus:border-violet-700 w-full py-1 px-2 text-sm outline-none' />
                    <CiSearch className='text-2xl'/>
                </div>
                <div className="flex items-center gap-1 text-[15px]">
                    <button className='font-semibold bg-violet-700 text-white px-4 rounded-md' to="/">Entrar</button>
                    <FaRegUserCircle className='text-[23px]' />
                </div>
            </div>
        </nav>
    )
}

export default Navbar

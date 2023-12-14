import Search from '../assets/Search.svg'
import Frame from '../assets/Frame.svg'
import Fab from '../assets/FAB.svg'
import User from '../assets/User.svg'
export default function SearchBar() {
    return (
        <div className="h-[85px] w-[90vw] mx-4 bg-white rounded-b-3xl shadow-[0px_4px_4px_0px_#00000008] flex justify-between items-center px-7">
            <h1 className="font-sans font-medium text-[22px]  ">Home</h1>
            <span className='flex gap-2 ml-36 rounded-full items-center  bg-gradient-to-r from-[#464FEB1A]/10  to-[#8330E91A]/10 bg-opacity-10 w-[381px] h-[40px] px-4 '>
                <img src={Search} alt="Search" className='h-[24px]' />
                <input type="text" placeholder='Search anything' className='font-light text-base bg-inherit focus:outline-none font-sans' />
            </span>
            <span className='flex gap-3 justify-center items-center h-[44px] w-[252px]'>
                <img src={Frame} alt="Notification Icon" className='cursor-pointer h-6' />
                <img src={Fab} alt="Ask Copilot" className='cursor-pointer mt-2' />
                <img src={User} alt="User Icon" className='cursor-pointer h-11' />
            </span>
        </div>
    )
}
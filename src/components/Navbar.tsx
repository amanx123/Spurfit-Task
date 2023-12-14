import text from '../assets/Text.png'
import home from '../assets/Home.png'
import circle from '../assets/Circle.png'
import briefcase from '../assets/Briefcase.png'

export default function Navbar() {
    return (
        <>
            <div className="h-screen w-[96px] max-w-[96px] bg-white flex flex-col items-center">
                <img src="/Logo.svg" alt="Logo" className='mt-[21px] mb-3 cursor-pointer' />
                <hr className='w-[70px] border-black border-opacity-20' />
                <div className='w-[24px] h-[240px] space-y-12 mt-6'>
                    <img src={home} alt="Home Logo" className='cursor-pointer' />
                    <img src={circle} alt="Circle Logo" className='cursor-pointer' />
                    <img src={briefcase} alt="Briefcase Logo" className='cursor-pointer' />
                    <img src={text} alt="Text Logo" className='cursor-pointer' />
                </div>
            </div>
        </>
    )
}
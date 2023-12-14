import Fab2 from './assets/FAB _2.svg'
import Search2 from './assets/Search2.svg'
import Funnel from './assets/Funnel.svg'
import Dropdown from './assets/Dropdown.svg'
import OverflowButton from './assets/OverflowButton.svg'
import User from './assets/User.svg'
import Unchecked from './assets/Unchecked.svg'
import Shape from './assets/Shape.svg'
export default function Dashboard() {
    return (
        <div className="m-4 bg-white h-[80vh] rounded-3xl w-[90vw] ">
            <span className='flex justify-between items-center p-8 h-[32px] '>
                <div className="flex gap-8 mt-4 items-center justify-center">
                    <button name="Active" className="">
                        <div className='flex gap-1 items-center justify-center mb-2'>
                            <h1>Active</h1>
                            <p className="font-light bg-gradient-to-r from-[#464FEB1A]/20  to-[#8330E91A]/20 rounded-md px-[4px]">
                                16
                            </p>
                        </div>
                        <hr className='bg-gradient-to-r from-[#464FEB] w-20 to-[#8330E9] h-1 rounded-md' />
                    </button>
                    <button name="Pending" className="">
                        <div className='flex gap-1 mb-2 font-light text-neutral-700'>
                            <h1>Pending</h1>
                            <p className="px-[4px] bg-gray-200 rounded-md">16</p>
                        </div>
                        <hr className='hidden bg-gradient-to-r from-[#464FEB] w-20 to-[#8330E9] h-1 rounded-md' />
                    </button>
                    <button name="Archived" className="">
                        <div className='flex gap-1 mb-2 font-light text-neutral-700'>
                            <h1>Archived</h1>
                            <p className="font-light px-[4px] bg-gray-200 rounded-md">8</p>
                        </div>
                        <hr className='hidden bg-gradient-to-r from-[#464FEB] w-20 to-[#8330E9] h-1 rounded-md' />
                    </button>
                </div>
                <div className='divide-x flex items-center justify-center'>
                    <img src={Fab2} alt="Add new" className='cursor-pointer' />
                    <div className='flex'>
                        <span className='gap-2 bg-[#F2F2F2] flex rounded-full p-1 px-4 ml-3 '>
                            <img src={Search2} alt="Search Icon" />
                            <input type="text" placeholder='Search anything' className='font-light placeholder:text-sm focus:outline-none bg-inherit' />
                        </span>
                        <span className='w-[116px] rounded-full bg-gradient-to-r from-[#464FEB] to-[#8330E9] p-[1px] ml-3 cursor-pointer'>
                            <div className='gap-2 rounded-full flex-wrap flex items-center justify-center h-full w-full bg-white'>
                                <img src={Funnel} alt="Funnel Icon" />
                                <p className='text-sm bg-gradient-to-r from-[#464FEB] to-[#8330E9] bg-clip-text text-transparent'>Filter by</p>
                                <img src={Dropdown} alt="Dropdown Icon" />
                            </div>
                        </span>
                    </div>
                </div>
            </span>
            <main className='mt-1'>
                <table className='table-auto w-[90vw]'>
                    <thead className='border-gray-200 border-y bg-[#F3F3F380]'>
                        <tr className='font-sans  h-[43px]  gap-1 text-sm text-[#333333] justify-center items-center'>
                            <th className='px-3 cursor-pointer'>
                                <img src={Unchecked} alt="Unchecked Box" />
                            </th>
                            <th className='flex gap-1 px-3 items-center h-[43px] justify-start'>
                                Trainee
                                <img src={OverflowButton} alt="Sorting Icon" />
                            </th>
                            <th className='font-medium px-3'>
                                Compliance
                            </th>
                            <th className='font-medium px-3'>
                                Last Workout
                            </th>
                            <th className='font-medium px-3'>
                                Workout Plan
                            </th>
                            <th className='font-medium  px-3'>
                                Last Modified
                            </th>
                            <th className='font-medium px-3'>
                                Diet Plan
                            </th>
                            <th className='font-medium  px-3'>
                                Last Modified
                            </th>
                            <th className='font-medium px-3'>
                                Trainer
                            </th>
                            <th className='font-medium px-3'>
                                Actions
                            </th>
                        </tr>
                    </thead>
                    <tbody className='mx-auto text-center'>
                        <tr className='border-gray-200 border-b font-sans h-[43px] gap-1 text-sm text-[#333333] '>
                            <td className='px-3 cursor-pointer'>
                                <img src={Unchecked} alt="Unchecked Box" />
                            </td>
                            <td className='px-3 flex gap-1 h-[43px] items-center'>
                                <img src={User} alt="Trainee Photo" className='h-[28px]' />
                                Rahul Last Name
                            </td>
                            <td className='font-light px-3'>
                                44.5%
                            </td>
                            <td className='font-light px-3'>
                                Jun 10th' 23
                            </td>
                            <td className='font-light px-3 '>
                                <p className='bg-blue-50 p-1 text-blue-600 rounded-sm text-sm'>Plan 2 - Beginner</p>
                            </td>
                            <td className='font-light px-3'>
                                Jun 10th' 23
                            </td>
                            <td className='font-light px-3'>
                                <p className='bg-green-50 p-1 text-green-600 rounded-sm text-sm'>Plan 2 - Beginner</p>
                            </td>
                            <td className='font-light px-3'>
                                Jun 10th' 23
                            </td>
                            <td className='font-light px-3'>
                                Tim Deboar
                            </td>
                            <td className='flex font-light px-3 items-center justify-center gap-2'>
                                <img src={Shape} alt="Shape Icon" className='' />
                                ...
                            </td>
                        </tr>
                        <tr className='border-gray-200 border-b font-sans h-[43px] gap-1 text-sm text-[#333333] '>
                            <td className='px-3 cursor-pointer'>
                                <img src={Unchecked} alt="Unchecked Box" />
                            </td>
                            <td className='px-3 flex gap-1 h-[43px] items-center'>
                                <img src={User} alt="Trainee Photo" className='h-[28px]' />
                                Rahul Last Name
                            </td>
                            <td className='font-light px-3'>
                                44.5%
                            </td>
                            <td className='font-light px-3'>
                                Jun 10th' 23
                            </td>
                            <td className='font-light px-3 '>
                                <p className='bg-blue-50 p-1 text-blue-600 rounded-sm text-sm'>Plan 2 - Beginner</p>
                            </td>
                            <td className='font-light px-3'>
                                Jun 10th' 23
                            </td>
                            <td className='font-light px-3'>
                                <p className='bg-green-50 p-1 text-green-600 rounded-sm text-sm'>Plan 2 - Beginner</p>
                            </td>
                            <td className='font-light px-3'>
                                Jun 10th' 23
                            </td>
                            <td className='font-light px-3'>
                                Tim Deboar
                            </td>
                            <td className='flex font-light px-3 items-center justify-center gap-2'>
                                <img src={Shape} alt="Shape Icon" className='' />
                                ...
                            </td>
                        </tr>
                        <tr className='border-gray-200 border-b font-sans h-[43px] gap-1 text-sm text-[#333333] '>
                            <td className='px-3 cursor-pointer'>
                                <img src={Unchecked} alt="Unchecked Box" />
                            </td>
                            <td className='px-3 flex gap-1 h-[43px] items-center'>
                                <img src={User} alt="Trainee Photo" className='h-[28px]' />
                                Rahul Last Name
                            </td>
                            <td className='font-light px-3'>
                                44.5%
                            </td>
                            <td className='font-light px-3'>
                                Jun 10th' 23
                            </td>
                            <td className='font-light px-3 '>
                                <p className='bg-blue-50 p-1 text-blue-600 rounded-sm text-sm'>Plan 2 - Beginner</p>
                            </td>
                            <td className='font-light px-3'>
                                Jun 10th' 23
                            </td>
                            <td className='font-light px-3'>
                                <p className='bg-green-50 p-1 text-green-600 rounded-sm text-sm'>Plan 2 - Beginner</p>
                            </td>
                            <td className='font-light px-3'>
                                Jun 10th' 23
                            </td>
                            <td className='font-light px-3'>
                                Tim Deboar
                            </td>
                            <td className='flex font-light px-3 items-center justify-center gap-2'>
                                <img src={Shape} alt="Shape Icon" className='' />
                                ...
                            </td>
                        </tr>
                        <tr className='border-gray-200 border-b font-sans h-[43px] gap-1 text-sm text-[#333333] '>
                            <td className='px-3 cursor-pointer'>
                                <img src={Unchecked} alt="Unchecked Box" />
                            </td>
                            <td className='px-3 flex gap-1 h-[43px] items-center'>
                                <img src={User} alt="Trainee Photo" className='h-[28px]' />
                                Rahul Last Name
                            </td>
                            <td className='font-light px-3'>
                                44.5%
                            </td>
                            <td className='font-light px-3'>
                                Jun 10th' 23
                            </td>
                            <td className='font-light px-3 '>
                                <p className='bg-blue-50 p-1 text-blue-600 rounded-sm text-sm'>Plan 2 - Beginner</p>
                            </td>
                            <td className='font-light px-3'>
                                Jun 10th' 23
                            </td>
                            <td className='font-light px-3'>
                                <p className='bg-green-50 p-1 text-green-600 rounded-sm text-sm'>Plan 2 - Beginner</p>
                            </td>
                            <td className='font-light px-3'>
                                Jun 10th' 23
                            </td>
                            <td className='font-light px-3'>
                                Tim Deboar
                            </td>
                            <td className='flex font-light px-3 items-center justify-center gap-2'>
                                <img src={Shape} alt="Shape Icon" className='' />
                                ...
                            </td>
                        </tr>
                        <tr className='border-gray-200 border-b font-sans h-[43px] gap-1 text-sm text-[#333333] '>
                            <td className='px-3 cursor-pointer'>
                                <img src={Unchecked} alt="Unchecked Box" />
                            </td>
                            <td className='px-3 flex gap-1 h-[43px] items-center'>
                                <img src={User} alt="Trainee Photo" className='h-[28px]' />
                                Rahul Last Name
                            </td>
                            <td className='font-light px-3'>
                                44.5%
                            </td>
                            <td className='font-light px-3'>
                                Jun 10th' 23
                            </td>
                            <td className='font-light px-3 '>
                                <p className='bg-blue-50 p-1 text-blue-600 rounded-sm text-sm'>Plan 2 - Beginner</p>
                            </td>
                            <td className='font-light px-3'>
                                Jun 10th' 23
                            </td>
                            <td className='font-light px-3'>
                                <p className='bg-green-50 p-1 text-green-600 rounded-sm text-sm'>Plan 2 - Beginner</p>
                            </td>
                            <td className='font-light px-3'>
                                Jun 10th' 23
                            </td>
                            <td className='font-light px-3'>
                                Tim Deboar
                            </td>
                            <td className='flex font-light px-3 items-center justify-center gap-2'>
                                <img src={Shape} alt="Shape Icon" className='' />
                                ...
                            </td>
                        </tr>
                        <tr className='border-gray-200 border-b font-sans h-[43px] gap-1 text-sm text-[#333333] '>
                            <td className='px-3 cursor-pointer'>
                                <img src={Unchecked} alt="Unchecked Box" />
                            </td>
                            <td className='px-3 flex gap-1 h-[43px] items-center'>
                                <img src={User} alt="Trainee Photo" className='h-[28px]' />
                                Rahul Last Name
                            </td>
                            <td className='font-light px-3'>
                                44.5%
                            </td>
                            <td className='font-light px-3'>
                                Jun 10th' 23
                            </td>
                            <td className='font-light px-3 '>
                                <p className='bg-blue-50 p-1 text-blue-600 rounded-sm text-sm'>Plan 2 - Beginner</p>
                            </td>
                            <td className='font-light px-3'>
                                Jun 10th' 23
                            </td>
                            <td className='font-light px-3'>
                                <p className='bg-green-50 p-1 text-green-600 rounded-sm text-sm'>Plan 2 - Beginner</p>
                            </td>
                            <td className='font-light px-3'>
                                Jun 10th' 23
                            </td>
                            <td className='font-light px-3'>
                                Tim Deboar
                            </td>
                            <td className='flex font-light px-3 items-center justify-center gap-2'>
                                <img src={Shape} alt="Shape Icon" className='' />
                                ...
                            </td>
                        </tr>
                        <tr className='border-gray-200 border-b font-sans h-[43px] gap-1 text-sm text-[#333333] '>
                            <td className='px-3 cursor-pointer'>
                                <img src={Unchecked} alt="Unchecked Box" />
                            </td>
                            <td className='px-3 flex gap-1 h-[43px] items-center'>
                                <img src={User} alt="Trainee Photo" className='h-[28px]' />
                                Rahul Last Name
                            </td>
                            <td className='font-light px-3'>
                                44.5%
                            </td>
                            <td className='font-light px-3'>
                                Jun 10th' 23
                            </td>
                            <td className='font-light px-3 '>
                                <p className='bg-blue-50 p-1 text-blue-600 rounded-sm text-sm'>Plan 2 - Beginner</p>
                            </td>
                            <td className='font-light px-3'>
                                Jun 10th' 23
                            </td>
                            <td className='font-light px-3'>
                                <p className='bg-green-50 p-1 text-green-600 rounded-sm text-sm'>Plan 2 - Beginner</p>
                            </td>
                            <td className='font-light px-3'>
                                Jun 10th' 23
                            </td>
                            <td className='font-light px-3'>
                                Tim Deboar
                            </td>
                            <td className='flex font-light px-3 items-center justify-center gap-2'>
                                <img src={Shape} alt="Shape Icon" className='' />
                                ...
                            </td>
                        </tr>
                        <tr className='border-gray-200 border-b font-sans h-[43px] gap-1 text-sm text-[#333333] '>
                            <td className='px-3 cursor-pointer'>
                                <img src={Unchecked} alt="Unchecked Box" />
                            </td>
                            <td className='px-3 flex gap-1 h-[43px] items-center'>
                                <img src={User} alt="Trainee Photo" className='h-[28px]' />
                                Rahul Last Name
                            </td>
                            <td className='font-light px-3'>
                                44.5%
                            </td>
                            <td className='font-light px-3'>
                                Jun 10th' 23
                            </td>
                            <td className='font-light px-3 '>
                                <p className='bg-blue-50 p-1 text-blue-600 rounded-sm text-sm'>Plan 2 - Beginner</p>
                            </td>
                            <td className='font-light px-3'>
                                Jun 10th' 23
                            </td>
                            <td className='font-light px-3'>
                                <p className='bg-green-50 p-1 text-green-600 rounded-sm text-sm'>Plan 2 - Beginner</p>
                            </td>
                            <td className='font-light px-3'>
                                Jun 10th' 23
                            </td>
                            <td className='font-light px-3'>
                                Tim Deboar
                            </td>
                            <td className='flex font-light px-3 items-center justify-center gap-2'>
                                <img src={Shape} alt="Shape Icon" className='' />
                                ...
                            </td>
                        </tr>
                    </tbody>
                </table>
            </main>

        </div>
    )
}
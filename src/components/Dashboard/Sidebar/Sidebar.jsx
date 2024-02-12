// Icons
import { GrLogout } from 'react-icons/gr'
import { FcSettings } from 'react-icons/fc'
import { AiOutlineBars } from 'react-icons/ai'
// Components
import MenuItem from './MenuItem'
import Logo from '../../Shared/Logo'
import useAuth from '../../../hooks/useAuth'
import AdminMenu from '../Menu/AdminMenu'
import UserMenu from '../Menu/UserMenu'
import { useState } from 'react'
import useRole from '../../../hooks/useRole'

const Sidebar = () => {
    const { logOut } = useAuth();
    const [isActive, setActive] = useState(false)
    const [role] = useRole();

    // Sidebar Responsive Handler
    const handleToggle = () => {
        setActive(!isActive)
    }
    return (
        <>
            {/* Small Screen Navbar */}
            <div className='bg-secondary text-white flex justify-between md:hidden'>
                <div>
                    <div className='block cursor-pointer p-4 font-bold'>
                        <Logo />
                    </div>
                </div>

                <button
                    onClick={handleToggle}
                    className='mobile-menu-button p-4 focus:outline-none focus:bg-tertiary'>
                    <AiOutlineBars className='h-5 w-5' />
                </button>
            </div>

            {/* Sidebar */}
            <div
                className={`z-10 md:fixed flex flex-col justify-between overflow-x-hidden bg-secondary w-64 space-y-6 px-2 py-4 absolute inset-y-0 left-0 transform ${isActive && '-translate-x-full'}  md:translate-x-0  transition duration-200 ease-in-out`}>
                <div>
                    <div>
                        <div className='w-full hidden md:flex px-4 py-2 shadow-lg rounded-lg justify-center items-center bg-quaternary mx-auto'>
                            <Logo />
                        </div>
                    </div>

                    {/* Nav Items */}
                    <div className='flex flex-col justify-between flex-1 mt-6'>
                        <nav>
                            {/* user and admin Menu Items */}
                            {role === "user" && < UserMenu />}
                            {role === "premium-user" && < UserMenu />}
                            {role === "admin" && <AdminMenu />}
                        </nav>
                    </div>
                </div>

                <div>
                    <hr />
                    <MenuItem
                        icon={FcSettings}
                        label='Profile'
                        address='/dashboard/profile'
                        className='text-white'
                    />
                    <button onClick={logOut} className='flex w-full items-center px-4 py-2 mt-5 text-white hover:bg-tertiary  hover:text-white transition-colors duration-300 transform'>
                        <GrLogout className='w-5 h-5' />
                        <span className='mx-4 font-medium'>Logout</span>
                    </button>
                </div>
            </div>
        </>
    )
}

export default Sidebar
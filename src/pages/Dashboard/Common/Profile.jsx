import { HiBadgeCheck } from "react-icons/hi";
import { RiAdminFill } from "react-icons/ri";
import { Helmet } from "react-helmet-async"
import useAuth from "../../../hooks/useAuth"
import useRole from "../../../hooks/useRole"

const Profile = () => {
    const { user } = useAuth()
    const [role] = useRole();
 

    return (
        <div className='flex justify-center items-center h-screen'>
            <Helmet>
                <title>Profile | Dashboard</title>
            </Helmet>
            <div className='bg-white shadow-lg rounded-2xl w-3/5'>
                <img
                    alt='profile'
                    src='https://i.ibb.co/txHP5tt/pexels-steve-johnson-12810660.jpg'
                    className='w-full mb-4 rounded-t-lg h-36'
                />
                <div className='flex flex-col items-center justify-center p-4 -mt-16'>
                    <a href='#' className='relative block'>
                        <img
                            alt='profile'
                            src={user?.photoURL}
                            className='mx-auto object-cover rounded-full h-24 w-24  border-2 border-white'
                        />
                    </a>

                    <p className='flex items-center gap-1 p-2 px-4 text-xs text-white bg-quaternary rounded-full'>
                        {role && role?.toUpperCase()}
                        {role === "premium-user" ? <HiBadgeCheck className="text-lg" /> : ''}
                        {role === "admin" ? <RiAdminFill className="text-lg" /> : ''}
                    </p>
                    <p className='mt-2 text-xl font-medium text-gray-800 '>
                        User Id: {user?.uid}
                    </p>
                    <div className='w-full p-2 mt-4 rounded-lg'>
                        <div className='flex flex-wrap items-center justify-between text-sm text-gray-600 '>
                            <p className='flex flex-col'>
                                Name
                                <span className='font-bold text-black '>
                                    {user?.displayName}
                                </span>
                            </p>
                            <p className='flex flex-col'>
                                Email
                                <span className='font-bold text-black '>{user?.email}</span>
                            </p>

                            <div>
                                <button className='bg-tertiary px-10 py-1 rounded-lg text-white cursor-pointer hover:bg-quaternary block mb-1'>
                                    Update Profile
                                </button>
                                <button className='bg-tertiary px-7 py-1 rounded-lg text-white cursor-pointer hover:bg-quaternary'>
                                    Change Password
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    )
}

export default Profile
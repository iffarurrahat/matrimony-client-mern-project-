/* eslint-disable react/prop-types */

import { useState } from "react";
import { becomePremiumMember } from "../../../../api/auth";
import useAuth from "../../../../hooks/useAuth";
import PremiumUserModal from "../../../Modal/PremiumUserModal";
import { toast } from "react-toastify";
import CandidateInfoUpdate from "../../../Modal/CandidateInfoUpdate";

const ProfileDataRow = ({ profile }) => {

    const { user } = useAuth();
    const [isOpen, setIsOpen] = useState(false);
    const [isOpenUpdateInfo, setIsOpenUpdateInfo] = useState(false)

    const closeModal = () => {
        setIsOpen(false)
        setIsOpenUpdateInfo(false)
    }

    const modalHandler = async () => {
        // Request to be host
        try {
            const data = await becomePremiumMember(user?.email)
            console.log(data);
            if (data.modifiedCount > 0) {
                toast.success('Success!, Please with for admin confirmation.')
            }
            else {
                toast.success('Success!, With for admin approval👊')
            }
        }
        catch (err) {
            console.log(err.message);
        }
        finally {
            setIsOpen(false)
        }
    }

    // Update candidate info
    const modalUpdateInfoHandler = async () => {
        console.log('modalUpdateInfoHandler');
    }

    return (
        <tr>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <div className='flex items-center'>
                    <div className='flex-shrink-0'>
                        <div className='block relative'>
                            <img
                                alt='profile'
                                src={profile?.image}
                                className='mx-auto object-cover rounded h-16 w-16 '
                            />
                            <p className='text-gray-900 whitespace-no-wrap mt-1 text-xs text-center'>{profile?.host?.name}</p>
                        </div>
                    </div>
                    {/* <div className='ml-3'>
                    </div> */}
                </div>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{profile?.host?.email}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <p className='text-gray-900 whitespace-no-wrap'>{profile?.birthDate}</p>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-red-200 opacity-50 rounded-full'
                    ></span>
                    <span className='relative'>Delete</span>
                </span>
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-green-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-green-200 opacity-50 rounded-full'
                    ></span>
                    <span className='relative' onClick={() => setIsOpenUpdateInfo(true)}>Update</span>
                </span>
                <CandidateInfoUpdate closeModal={closeModal} isOpenUpdateInfo={isOpenUpdateInfo} modalUpdateInfoHandler={modalUpdateInfoHandler} />
            </td>
            <td className='px-5 py-5 border-b border-gray-200 bg-white text-sm'>
                <span className='relative cursor-pointer inline-block px-3 py-1 font-semibold text-blue-900 leading-tight'>
                    <span
                        aria-hidden='true'
                        className='absolute inset-0 bg-blue-200 opacity-50 rounded-full'
                    ></span>
                    <span className='relative' onClick={() => setIsOpen(true)}>Premium</span>
                </span>
                <PremiumUserModal closeModal={closeModal} isOpen={isOpen} modalHandler={modalHandler} />
            </td>
        </tr>
    );
};

export default ProfileDataRow;
/* eslint-disable react/prop-types */
import { Dialog, Transition } from '@headlessui/react'
import { Fragment, useState } from 'react';
import { ImSpinner9 } from "react-icons/im";
import ReactDatePicker from "react-datepicker";
import "react-datepicker/dist/react-datepicker.css";
import OccupationSelect from '../Form/EditBiodataForm/OccupationSelect';
import RaceSelect from '../Form/EditBiodataForm/RaceSelect';
import GenderSelect from '../Form/EditBiodataForm/GenderSelect';

const CandidateInfoUpdate = ({ closeModal, isOpenUpdateInfo, modalUpdateInfoHandler }) => {

    const [loading, setLoading] = useState(false);
    const [startDate, setStartDate] = useState(new Date());

    return (
        <Transition appear show={isOpenUpdateInfo} as={Fragment}>
            <Dialog as='div' className='relative z-10' onClose={closeModal}>
                <Transition.Child
                    as={Fragment}
                    enter='ease-out duration-300'
                    enterFrom='opacity-0'
                    enterTo='opacity-100'
                    leave='ease-in duration-200'
                    leaveFrom='opacity-100'
                    leaveTo='opacity-0'
                >
                    <div className='fixed inset-0 bg-black bg-opacity-25' />
                </Transition.Child>

                <div className='fixed inset-0 overflow-y-auto'>
                    <div className='flex min-h-full items-center justify-center p-4 text-center w-full'>
                        <Transition.Child
                            as={Fragment}
                            enter='ease-out duration-300'
                            enterFrom='opacity-0 scale-95'
                            enterTo='opacity-100 scale-100'
                            leave='ease-in duration-200'
                            leaveFrom='opacity-100 scale-100'
                            leaveTo='opacity-0 scale-95'
                        >
                            <Dialog.Panel className='max-w-max transform overflow-hidden rounded-2xl bg-white p-6 text-left align-middle shadow-xl transition-all'>
                                <Dialog.Title
                                    as='h3'
                                    className='text-lg font-medium text-center leading-6 text-gray-900'
                                >
                                    Update baiodata Info
                                </Dialog.Title>
                                <div className='mt-2'>
                                    <p className='text-sm text-gray-500 text-center'>
                                        You are sure to make update biodata
                                    </p>
                                </div>

                                <form className='w-full'  onClick={modalUpdateInfoHandler}>
                                    {/* input field ● name & image */}
                                    <div className="md:flex justify-center gap-5 md:w-4/5 mx-auto">
                                        {/* name */}
                                        <div className="w-full">
                                            <label htmlFor='name' className='block mb-1 text-sm'>Name</label>
                                            <input type='text' name='name' id='name' placeholder='Enter Your Name Here'
                                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-quaternary  text-tertiary' data-temp-mail-org='0' />
                                        </div>
                                        {/* image */}
                                        <div className='mt-5 bg-white m-auto rounded-lg w-full'>
                                            <div className='file_upload px-5 py-1 relative border-4 border-dotted border-gray-300 rounded-lg'>
                                                <div className='flex flex-col w-max mx-auto text-center'>
                                                    <label>
                                                        <input
                                                            // onChange={e => handleImageChange(e.target.files[0])}
                                                            className='text-sm cursor-pointer w-36 hidden'
                                                            type='file'
                                                            name='image'
                                                            id='image'
                                                            accept='image/*'
                                                            hidden
                                                        />
                                                        <div className='bg-secondary text-white border border-gray-200 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-quaternary transition-all text-sm'>
                                                            {/* {uploadButtonText} */} uploaded
                                                        </div>
                                                    </label>
                                                </div>
                                            </div>
                                        </div>
                                    </div>

                                    {/* input field ● father, mother name  */}
                                    <div className="md:flex justify-center gap-5 md:w-4/5 mx-auto mt-3 md:mt-5">
                                        {/* father */}
                                        <div className="w-full">
                                            <label htmlFor='father' className='block mb-1 text-sm'>Father's name</label>
                                            <input type='text' name='father' id='father' placeholder="Father's name"
                                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-quaternary  text-tertiary' data-temp-mail-org='0' />
                                        </div>
                                        {/* mother */}
                                        <div className="w-full">
                                            <label htmlFor='mother' className='block mb-1 text-sm mt-3 md:mt-0'>Mothers's name</label>
                                            <input type='text' name='mother' id='mother' placeholder="Mother's name"
                                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-quaternary  text-tertiary' data-temp-mail-org='0' />
                                        </div>
                                    </div>

                                    {/* input field ● birth & height, weight, age  */}
                                    <div className="grid grid-cols-1 md:grid-cols-4 gap-1 md:gap-5 md:w-4/5 mx-auto mt-3 md:mt-5">
                                        {/* date */}
                                        <div>
                                            <label htmlFor='birthDate' className='mb-1 text-sm'>BirthDate</label><br />
                                            <ReactDatePicker
                                                name="birth"
                                                className="border border-gray-300  rounded-md outline-quaternary"
                                                placeholderText="M-Day-Y"
                                                showIcon
                                                selected={startDate}
                                                onChange={(date) => setStartDate(date)}
                                            />
                                        </div>
                                        {/* height */}
                                        <div className="my-3 md:my-0 ml-0 md:ml-7">
                                            <label htmlFor='height' className='block mb-1 text-sm'>Height</label>
                                            <input type='text' name='height' id='height' placeholder='5f-6inch'
                                                className='w-full px-3 py-2 md:py-[6px] border rounded-md border-gray-300 focus:outline-quaternary  text-tertiary' data-temp-mail-org='0' />
                                        </div>
                                        {/* weight */}
                                        <div className="w-full">
                                            <label htmlFor='weight' className='block mb-1 text-sm'>Weight</label>
                                            <input type='number' name='weight' id='weight' placeholder='Your Weight'
                                                className='w-full px-3 py-2 md:py-[6px] border rounded-md border-gray-300 focus:outline-quaternary  text-tertiary' data-temp-mail-org='0' />
                                        </div>
                                        {/* age */}
                                        <div className="w-full mt-3 md:mt-0">
                                            <label htmlFor='age' className='block mb-1 text-sm'>Age</label>
                                            <input type='number' name='age' id='age' placeholder='Your Age'
                                                className='w-full px-3 py-2 md:py-[6px] border rounded-md border-gray-300 focus:outline-quaternary  text-tertiary' data-temp-mail-org='0' />
                                        </div>
                                    </div>

                                    {/* input field ● occupation & race */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-5 md:w-4/5 mx-auto mt-3 md:mt-5">
                                        {/* occupation and race */}
                                        <div className="w-full">
                                            <label htmlFor='Occupation' className='block mb-1 text-sm'>Occupation</label>
                                            <OccupationSelect />
                                        </div>
                                        {/* race */}
                                        <div className="w-full my-3 md:my-0">
                                            <label htmlFor='Occupation' className='block mb-1 text-sm'>Race</label>
                                            <RaceSelect />
                                        </div>
                                        {/* gender */}
                                        <div className="w-full">
                                            <label htmlFor='gender' className='block mb-1 text-sm'>Gender</label>
                                            <GenderSelect />
                                        </div>
                                    </div>

                                    {/* input field ● permanent, present address, contact number  */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-5 md:w-4/5 mx-auto mt-3 md:mt-5">
                                        {/* father */}
                                        <div className="w-full">
                                            <label htmlFor='permanent' className='block mb-1 text-sm'>Permanent Address</label>
                                            <input type='text' name='permanent' id='permanent' placeholder="Permanent Address"
                                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-quaternary  text-tertiary' data-temp-mail-org='0' />
                                        </div>
                                        {/* mother */}
                                        <div className="w-full">
                                            <label htmlFor='present' className='block mb-1 text-sm mt-3 md:mt-0'>Present Address</label>
                                            <input type='text' name='present' id='present' placeholder="Present Address"
                                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-quaternary  text-tertiary' data-temp-mail-org='0' />
                                        </div>
                                        {/* contact phone */}
                                        <div className="w-full">
                                            <label htmlFor='phone' className='block mb-1 text-sm mt-3 md:mt-0'>Phone</label>
                                            <input type='text' name='phone' id='phone' placeholder="Phone"
                                                className='w-full px-3 py-2 border rounded-md border-gray-300 focus:outline-quaternary  text-tertiary' data-temp-mail-org='0' />
                                        </div>
                                    </div>

                                    {/* input field ● Expected partner height, weight, age  */}
                                    <div className="grid grid-cols-1 md:grid-cols-3 gap-1 md:gap-5 md:w-4/5 mx-auto mt-3 md:mt-5">
                                        {/* height */}
                                        <div>
                                            <label htmlFor='expectedHeight' className='block mb-1 text-sm'>Expected partner height</label>
                                            <input type='text' name='expectedHeight' id='expectedHeight' placeholder='5f-6inch'
                                                className='w-full px-3 py-2 md:py-[6px] border rounded-md border-gray-300 focus:outline-quaternary  text-tertiary' data-temp-mail-org='0' />
                                        </div>
                                        {/* weight */}
                                        <div className="w-full my-3 md:my-0">
                                            <label htmlFor='expectedWeight' className='block mb-1 text-sm'>Expected partner weight</label>
                                            <input type='number' name='expectedWeight' id='expectedWeight' placeholder='his/her weight'
                                                className='w-full px-3 py-2 md:py-[6px] border rounded-md border-gray-300 focus:outline-quaternary  text-tertiary' data-temp-mail-org='0' />
                                        </div>
                                        {/* age */}
                                        <div className="w-full">
                                            <label htmlFor='expectedAge' className='block mb-1 text-sm'>Expected partner age</label>
                                            <input type='number' name='expectedAge' id='expectedAge' placeholder='his/her age'
                                                className='w-full px-3 py-2 md:py-[6px] border rounded-md border-gray-300 focus:outline-quaternary  text-tertiary' data-temp-mail-org='0' />
                                        </div>
                                    </div>
                                    <div className="md:w-4/5 mx-auto">
                                        <button
                                            type='submit'
                                            className='p-3 mt-5 text-center font-medium text-white transition duration-200 rounded shadow-md bg-tertiary text-sm'
                                        >
                                            {loading ? (
                                                <ImSpinner9 className='m-auto animate-spin' size={24} />
                                            ) : (
                                                ' Save And Publish Now Button'
                                            )}
                                        </button>
                                    </div>
                                </form>


                                {/* modal down part */}
                                <hr className='mt-8 ' />
                                <div className='flex mt-2 justify-around'>
                                    <button type='button' className='inline-flex justify-center rounded-md border border-transparent bg-green-100 px-4 py-2 text-sm font-medium text-green-900 hover:bg-green-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-green-500 focus-visible:ring-offset-2'
                                       >
                                        Update Info
                                    </button>
                                    <button onClick={closeModal} type='button' className='inline-flex justify-center rounded-md border border-transparent bg-red-100 px-4 py-2 text-sm font-medium text-red-900 hover:bg-red-200 focus:outline-none focus-visible:ring-2 focus-visible:ring-red-500 focus-visible:ring-offset-2'>
                                        Cancel
                                    </button>
                                </div>
                            </Dialog.Panel>
                        </Transition.Child>
                    </div>
                </div>
            </Dialog>
        </Transition>
    );
};

export default CandidateInfoUpdate;
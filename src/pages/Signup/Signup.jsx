import { useState } from "react";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { Helmet } from "react-helmet-async";
import { imageUpload } from "../../api/utils";
import { getToken, saveUser } from "../../api/auth";
import { toast } from "react-toastify";
import { ImSpinner9 } from "react-icons/im";


const Signup = () => {

    // after login redirect
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const [registerError, setRegisterError] = useState('');
    const [showPassword, setShowPassword] = useState(false);
    const { createUser, updateUserProfile, loading } = useAuth();

    const handleSignup = async event => {
        event.preventDefault();

        const form = event.target;
        const name = form.name.value;
        const email = form.email.value;
        const password = form.password.value;
        const image = form.image.files[0];

        // reset error
        setRegisterError('');

        if (password.length < 6) {
            setRegisterError('Password at least 6 characters');
            return;
        }
        else if (!/(?=.*[A-Z])(?=.*[!@#$&*])(?=.*[0-9])(?=.*[a-z])/.test(password)) {
            setRegisterError('Password at least one uppercase, number, special chr');
            return;
        }



        try {
            //1. upload Image
            const formData = await imageUpload(image);

            //2. User Register 
            const result = await createUser(email, password)

            //3. save username & profile photo
            await updateUserProfile(name, formData.data.display_url)

            // 4. save user data in database 
            await saveUser(result?.user)

            //5. token
            await getToken(result?.user?.email)
            navigate(from, { replace: true });
            toast.success('Signup Successful');


        }
        catch (err) {
            toast.error(err?.message);
        }
    }



    return (
        <>
            {/* <-!----helmet----> */}
            <Helmet>
                <title>Sign Up | Love Birds Matrimony</title>
            </Helmet>
            {/* <-!----form----> */}
            <div className="md:flex md:h-screen">
                <div className="md:flex-1">
                    <div className="flex items-center justify-center h-screen">
                        <div className="font-inter">
                            <h1 className="font-satisfy text-4xl md:text-6xl text-center mb-4 md:mb-6">Lovebirds</h1>
                            <h4 className="text-xl md:text-2xl mb-8 md:mb-12 text-center text-[#696969]">Create Account Lovebirds</h4>
                            <form onSubmit={handleSignup} className="w-full">
                                <div>
                                    <label >
                                        <span className="block mb-1 text-sm">Name</span>
                                    </label>
                                    <input type="text" name="name" placeholder="Your Name" className="w-full md:w-96 p-2 border rounded focus:outline-none placeholder:text-xs" required />
                                </div>
                                <div className="my-4">
                                    <label >
                                        <span className="block mb-1 text-sm">Your Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="User Email" className="w-full md:w-96 p-2 border rounded focus:outline-none placeholder:text-xs" required />
                                </div>
                                <div className="relative">
                                    <label >
                                        <span className="block mb-1 text-sm">Password</span>
                                    </label>
                                    <input type={showPassword ? "text" : "password"}
                                        name="password" placeholder="Password" className="w-full md:w-96 p-2 border rounded focus:outline-none mb-1 placeholder:text-xs" required />
                                    <span className="absolute top-10 right-2 cursor-pointer" onClick={() => setShowPassword(!showPassword)}>
                                        {
                                            showPassword ? <FaEye /> : <FaEyeSlash />
                                        }
                                    </span>
                                </div>
                                <div className='mt-4 bg-white m-auto rounded-lg w-full md:w-96'>
                                    <div className='file_upload px-5 py-1 relative border-4 border-dotted border-gray-300 rounded-lg'>
                                        <div className='flex flex-col w-max mx-auto text-center'>
                                            <label>
                                                <input
                                                    className='text-sm cursor-pointer w-36 hidden'
                                                    type='file'
                                                    name='image'
                                                    id='image'
                                                    accept='image/*'
                                                    hidden
                                                />
                                                <div className='bg-secondary text-white border border-gray-200 rounded font-semibold cursor-pointer p-1 px-3 hover:bg-quaternary transition-all'>
                                                    Upload Image
                                                </div>
                                            </label>
                                        </div>
                                    </div>
                                </div>
                                {
                                    registerError && <p className="text-red-600 text-xs mt-1">{registerError}</p>
                                }
                                <div className="mt-6 text-center">
                                    <button type='submit' className='py-2 w-1/2 rounded-3xl bg-tertiary text-white cursor-pointer'>
                                        {loading ? < ImSpinner9 className='animate-spin m-auto' /> : "Sign UP"}
                                    </button>
                                </div>
                            </form>

                            <div className="flex items-center gap-3 my-5">
                                <span className="border w-full block" />
                                <p className="text-[#696969]">or</p>
                                <span className="border w-full block" />
                            </div>
                            <p className="text-center mt-5">Already have account? <Link className="font-bold text-[#696969]" to="/signin">Sign In</Link></p>
                        </div>
                    </div>
                </div>
                <div className="md:flex-1 hidden md:block">
                    <img src="https://i.ibb.co/9qpL0hr/register.png" className="object-cover h-screen w-full" alt="" />
                </div>
            </div>
        </>
    );
};

export default Signup;
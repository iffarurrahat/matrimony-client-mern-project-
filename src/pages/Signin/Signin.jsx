import { useState } from "react";
import { FcGoogle } from "react-icons/fc";
import { FaEye, FaEyeSlash } from 'react-icons/fa';
import { Link, useLocation, useNavigate } from "react-router-dom";
import useAuth from "../../hooks/useAuth";
import { toast } from "react-toastify";
import { Helmet } from "react-helmet-async";
import { getToken, saveUser } from "../../api/auth";
import { ImSpinner9 } from "react-icons/im";


const Signin = () => {

    // after login redirect
    const location = useLocation();
    const navigate = useNavigate();
    const from = location.state?.from?.pathname || "/";

    const [showPassword, setShowPassword] = useState(false);
    const { signIn, signInWithGoogle, loading } = useAuth();

    const handleSignin = async event => {
        event.preventDefault();
        const form = event.target;
        const email = form.email.value;
        const password = form.password.value;

        try {
            //1. User Login 
            const result = await signIn(email, password)
            // after login
            navigate(from, { replace: true });

            //2. token
            await getToken(result?.user?.email)
            navigate(from, { replace: true });
            toast.success('Signin Successful');
        }
        catch (err) {
            toast.err(err?.message);
        }
    }


    // SignIn With Google
    const handleGoogleSignIn = async () => {
        try {
            //1. User Register using google
            const result = await signInWithGoogle()
            navigate(from, { replace: true });

            //2. save user data in database 
            const dbResponse = await saveUser(result?.user)

            //3. token
            await getToken(result?.user?.email)
            navigate(from, { replace: true })
            toast.success('Signin Successful');
        }
        catch (err) {
            toast.err(err?.message);
        }
    }

    return (
        <>
            {/* <-!----helmet----> */}
            <Helmet>
                <title>Sign In | Love Birds Matrimony</title>
            </Helmet>
            {/* <-!----form----> */}
            <div className="md:flex md:h-screen">
                <div className="md:flex-1 hidden md:block">
                    <img src="https://i.ibb.co/9ZRVb5Y/login.jpg" className="object-cover h-screen w-full" alt="" />
                </div>
                <div className="md:flex-1">
                    <div className="flex items-center justify-center h-screen">
                        <div className="font-inter">
                            <h1 className="font-satisfy text-4xl md:text-6xl text-center mb-10 md:mb-14">Lovebirds</h1>
                            <h4 className="text-xl md:text-2xl mb-8 md:mb-12 text-center text-[#696969]">Welcome to Lovebirds</h4>
                            <form onSubmit={handleSignin} className="w-full">
                                <div>
                                    <label >
                                        <span className="block mb-1 text-sm">Your Email</span>
                                    </label>
                                    <input type="email" name="email" placeholder="User Email" className="w-full md:w-96 p-2 border rounded focus:outline-none placeholder:text-xs" required />
                                </div>
                                <div className="mt-4 relative">
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
                                    <label className="block text-right">
                                        <a href="#" className="text-xs text-[#696969]">Forgot password?</a>
                                    </label>
                                </div>
                                <div className="mt-6 text-center">
                                    <button type='submit' className='py-2 w-1/2 rounded-3xl bg-tertiary text-white cursor-pointer'>
                                        {loading ? < ImSpinner9 className='animate-spin m-auto' /> : "Sign In"}
                                    </button>
                                </div>
                            </form>

                            <div className="flex items-center gap-3 my-8">
                                <span className="border w-full block" />
                                <p className="text-[#696969]">or</p>
                                <span className="border w-full block" />
                            </div>
                            <p onClick={handleGoogleSignIn}
                                className="flex justify-center items-center gap-2 cursor-pointer">
                                <FcGoogle className="text-xl" /><span>Sign In with Google</span>
                            </p>
                            <p className="text-center mt-5">New Lovebirds? <Link className="font-bold text-[#696969]" to="/signup">Create Account</Link></p>
                        </div>
                    </div>
                </div>
            </div>
        </>
    );
};

export default Signin;
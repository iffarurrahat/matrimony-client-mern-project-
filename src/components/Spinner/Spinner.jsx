import Lottie from "lottie-react";
import SpinnerLottie from "./spinner-loader.json";
const Spinner = () => {
    return (
        <div className='h-screen flex justify-center items-center'>
            <Lottie animationData={SpinnerLottie} loop={true} height={50} width={50}></Lottie>
        </div>
    );
};

export default Spinner; 
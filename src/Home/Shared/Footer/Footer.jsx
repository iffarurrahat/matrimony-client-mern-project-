import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";


const Footer = () => {
    return (
        <div>
            {/* <-!----footer top ---->*/}
            <div className="text-white md:flex items-center">
                {/* <-!----footer left_site ----> */}
                <div className="bg-[#1F2937] text-center md:flex-1 py-16">
                    <h3 className="text-3xl mb-6">GET IN TOUCH</h3>
                    <div className="h-32 space-y-2">
                        <p>123 ABS Street, Uni 21, Bangladesh</p>
                        <p> +88 123456789</p>
                        <p>Mon - Fri: 08:00 - 22:00</p>
                        <p>Sat - Sun: 10:00 - 23:00</p>
                    </div>
                </div>
                {/* <-!----footer right_site ----> */}
                <div className="bg-[#111827] text-center md:flex-1 py-16">
                    <h3 className="text-3xl mb-6">Follow US</h3>
                    <div className="h-32">
                        <p>Join us on social media</p>
                        <div className="flex justify-center gap-5 mt-7">
                            <p><FaFacebookF className="text-2xl" /></p>
                            <p><FaInstagram className="text-2xl" /></p>
                            <p><FaXTwitter className="text-2xl" /></p>
                        </div>
                    </div>
                </div>
            </div>
            {/* <-!----footer bottom ---->*/}
            <div className="bg-[#151515]">
                <p className="py-3 text-center text-white">Copyright © 2024 Birds.com All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
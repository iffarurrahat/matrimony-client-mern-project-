import { FaFacebookF, FaInstagram } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

// 
const Footer = () => {
    return (
        <div>
            {/* <-!----footer top ---->*/}
            <div className="text-white md:flex items-center font-inter">
                {/* <-!----footer left_site ----> */}
                <div className="bg-tertiary md:flex-1 py-16">
                    <div className="text-center md:text-right md:pr-[35%] lg:pr-[40%] xl:pr-[25%] 2xl:pr-[10%]">
                        <h3 className="text-3xl mb-6 text-quaternary font-bold">GET IN TOUCH</h3>
                        <div className="h-32 space-y-2">
                            <p>3812 Shankor, West Dhanmondi <br /> Dhaka, Bangladesh.</p>
                            <p> +88 469034789</p>
                            <p>Email: info@example.com</p>
                            <p>Sat - Sun: 10:00 - 23:00</p>
                        </div>
                    </div>
                </div>
                {/* <-!----footer right_site ----> */}
                <div className="bg-secondary md:flex-1 py-16">
                    <div className="text-center md:text-start md:pl-[35%] lg:pl-[40%] xl:pl-[25%] 2xl:pl-[10%]">
                        <h3 className="text-3xl mb-6 text-quaternary font-bold">Follow US</h3>
                        <div className="h-32">
                            <p>Join us on social media</p>
                            <div className="flex justify-center md:justify-start gap-5 mt-7">
                                <a href="#" className="bg-quaternary p-2 rounded-full"><FaFacebookF className="text-2xl" /></a>
                                <a href="#" className="bg-quaternary p-2 rounded-full"><FaInstagram className="text-2xl" /></a>
                                <a href="#" className="bg-quaternary p-2 rounded-full"><FaXTwitter className="text-2xl" /></a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
            {/* <-!----footer bottom ---->*/}
            <div className="bg-[#151515]">
                <p className="py-3 text-center text-white">Copyright © 2024 <span className="font-satisfy">Birds.com</span> All rights reserved.</p>
            </div>
        </div>
    );
};

export default Footer;
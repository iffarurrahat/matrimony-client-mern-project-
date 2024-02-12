import { Parallax } from "react-parallax";
import Container from "../ui/Container";

import PropTypes from 'prop-types';

const CoverSection = ({ img, title, text }) => {
    return (
        <div className="mt-[46px] md:mt-[88px]">
            <Parallax
                blur={{ min: -50, max: 50 }}
                bgImage={img}
                bgImageAlt="small cover"
                strength={-200}
            >
                {/* <-!-----main content-----> */}
                <Container>
                    <div className="h-48 md:h-[400px] w-full flex justify-center items-center">
                        <div className=" border-spacing-4 w-5/6 md:w-2/3">
                            <div className="bg-opacity-60 w-full"></div>
                            <div className="text-center bg-[#15151599] py-5 md:py-10">
                                <div className="">
                                    <h1 className="mb-2 md:mb-5 text-2xl md:text-6xl font-bold uppercase text-quaternary font-inter">{title}</h1>
                                    <p className="text-white font-satisfy text-base md:text-xl">{text}</p>
                                </div>
                            </div>
                        </div>
                    </div>
                </Container>
            </Parallax>
        </div>
    );
};


CoverSection.propTypes = {
    img: PropTypes.string,
    title: PropTypes.string,
    text: PropTypes.string,
};
export default CoverSection;
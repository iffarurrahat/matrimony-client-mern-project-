import PropTypes from 'prop-types';
// import Swiper from 'swiper'
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/free-mode';
import 'swiper/css/navigation';
import 'swiper/css/thumbs';
import 'swiper/css/pagination';

// Import Swiper styles
import 'swiper/css';
import './Slider.css'

import { useState } from 'react';

// import required modules
import { Autoplay, FreeMode, Navigation, Pagination, Thumbs } from 'swiper/modules';
import Container from '../../../components/ui/Container';



const Slider = ({ slides }) => {

    const [thumbsSwiper, setThumbsSwiper] = useState(null);

    return (
        <div className='h-[400px] md:h-screen overflow-hidden font-inter' >
            <Swiper
                style={{
                    '--swiper-navigation-color': '#fff',
                    '--swiper-pagination-color': '#fff',
                }}
                loop={true}
                // spaceBetween={0}
                autoplay={{
                    delay: 3500,
                    disableOnInteraction: false,
                }}
                thumbs={{ swiper: thumbsSwiper && !thumbsSwiper.destroyed ? thumbsSwiper : null }}
                modules={[Autoplay, FreeMode, Thumbs]}
                className="mySwiper2 h-[400px] md:h-screen "
            >

                {
                    slides.map((slide) => <div key={slide.id} className='bg-black'>
                        <SwiperSlide>
                            <>
                                <img className='h-full w-full cursor-pointer relative brightness-50' src={slide.image} />
                                <div className="swiper-slide">
                                    <Container>
                                        <span className="swiper-no-swiping absolute -top-2/3">
                                            <div className='text-white font-bold'>
                                                <h2 className='text-4xl md:text-5xl lg:text-7xl w-4/5 md:w-2/3'>{slide.title}</h2>
                                                <p className='mt-2 md:mt-5 p-3 md:text-lg backdrop-blur-sm border w-4/5 md:w-2/5 font-satisfy tracking-[4px]'>{slide.short_description}</p>
                                            </div>
                                        </span>
                                    </Container>
                                </div>
                            </>
                        </SwiperSlide>
                    </div>)
                }

            </Swiper>

            <Swiper
                onSwiper={setThumbsSwiper}
                loop={true}
                spaceBetween={20}
                slidesPerView={5}
                freeMode={true}
                watchSlidesProgress={true}
                pagination={{
                    clickable: true,
                }}
                modules={[FreeMode, Navigation, Pagination, Thumbs]}
                // className="mySwiper w-40 md:w-60 bottom-12 md:bottom-20 "
                className="mySwiper md:left-1/2 md:-top-3/4  w-60 md:w-full bottom-20 md:bottom-0 backdrop-blur-3xl md:backdrop-blur-0"
            >
                {
                    slides.map((slide, index) => <div key={index}>
                        <SwiperSlide>
                            <img src={slide.image} className='h-10 md:h-72 lg:h-96 w-20 md:w-full object-cover rounded-xl shadow-lg' />
                        </SwiperSlide>
                    </div>)
                }
            </Swiper>
        </div>
    );
};

export default Slider;

Slider.propTypes = {
    slides: PropTypes.array,
}
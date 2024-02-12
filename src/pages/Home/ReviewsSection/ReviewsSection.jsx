import "./ReviewsSection.css"
import { FaQuoteLeft } from "react-icons/fa6";
import { MdDateRange } from "react-icons/md";

// Import Swiper React components
import { Swiper, SwiperSlide } from 'swiper/react';

// Import Swiper styles
import 'swiper/css';
import 'swiper/css/pagination';


// import required modules
import { Autoplay, Pagination, } from 'swiper/modules';
import { useEffect, useState } from 'react';
import Rating from "react-rating";
import Container from "../../../components/ui/Container";
import HeaderTitle from "../../../components/HeaderTitle/HeaderTitle";
import axiosPublic from "../../../api/axiosPublic";


const ReviewsSection = () => {

    const [reviews, setReviews] = useState([]);

    useEffect(() => {
        axiosPublic('/reviews')
            .then(res => {
                setReviews(res.data);
            });
    }, [])

    return (
        <div className='mb-20 mt-20'>
            <HeaderTitle title={'Work Reviews'} subTitle={'Happy Client'} />
            <Container>
                <Swiper
                    // slidesPerView={2}
                    spaceBetween={30}
                    pagination={{
                        clickable: true,
                    }}
                    autoplay={{
                        delay: 2500,
                        // disableOnInteraction: false,
                    }}
                    breakpoints={{
                        // When window width is <= 640px (for mobile devices)
                        768: {
                            slidesPerView: 1,
                        },
                        // When window width is > 640px (for other devices)
                        1024: {
                            slidesPerView: 2,
                        },
                    }}
                    modules={[Pagination, Autoplay]}
                    className="mySwiper"
                >

                    {
                        reviews.map(review => <SwiperSlide key={review._id}>
                            <div className='mb-10 font-inter triangle__wrap'>
                                <div className='shadow-md py-8 lg:py-16 px-8 lg:px-16 text-left rounded-lg triangle lg:h-56 '>
                                    <p>
                                        <FaQuoteLeft className="text-2xl lg:text-5xl text-[#CDD3FF] absolute  left-3 lg:left-3 top-3 lg:top-5" />
                                        {review.details}
                                    </p>
                                </div>
                                <div className='flex justify-center items-center gap-5 mt-14'>
                                    <img src={review.image} className='h-16 w-16 rounded-full' alt="" />
                                    <div>
                                        <p className="font-satisfy text-sm">Marriage Date</p>
                                        <p className="flex gap-1 font-satisfy"><MdDateRange />{review.date}</p>
                                        <p>
                                            <Rating
                                                emptySymbol={
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        fill="none"
                                                        viewBox="0 0 24 24"
                                                        strokeWidth={1.5}
                                                        stroke="currentColor"
                                                        className="w-5 h-5"
                                                    >
                                                        <path
                                                            strokeLinecap="round"
                                                            strokeLinejoin="round"
                                                            d="M11.48 3.499a.562.562 0 011.04 0l2.125 5.111a.563.563 0 00.475.345l5.518.442c.499.04.701.663.321.988l-4.204 3.602a.563.563 0 00-.182.557l1.285 5.385a.562.562 0 01-.84.61l-4.725-2.885a.563.563 0 00-.586 0L6.982 20.54a.562.562 0 01-.84-.61l1.285-5.386a.562.562 0 00-.182-.557l-4.204-3.602a.563.563 0 01.321-.988l5.518-.442a.563.563 0 00.475-.345L11.48 3.5z"
                                                        />
                                                    </svg>
                                                }
                                                fullSymbol={
                                                    <svg
                                                        xmlns="http://www.w3.org/2000/svg"
                                                        viewBox="0 0 24 24"
                                                        fill="currentColor"
                                                        className="w-5 h-5"
                                                    >
                                                        <path
                                                            fillRule="evenodd"
                                                            d="M10.788 3.21c.448-1.077 1.976-1.077 2.424 0l2.082 5.007 5.404.433c1.164.093 1.636 1.545.749 2.305l-4.117 3.527 1.257 5.273c.271 1.136-.964 2.033-1.96 1.425L12 18.354 7.373 21.18c-.996.608-2.231-.29-1.96-1.425l1.257-5.273-4.117-3.527c-.887-.76-.415-2.212.749-2.305l5.404-.433 2.082-5.006z"
                                                            clipRule="evenodd"
                                                        />
                                                    </svg>
                                                }
                                                initialRating={review.rating}
                                                readonly
                                                className="text-primary"
                                            />
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </SwiperSlide>)
                    }
                </Swiper>
            </Container>
        </div>
    );
};

export default ReviewsSection;

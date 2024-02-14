/* eslint-disable react/prop-types */
import { Fragment } from "react";
import HeaderTitle from "../../../components/HeaderTitle/HeaderTitle";
import Container from "../../../components/ui/Container";

const events = [
    {
        _id: "01",
        heading: "Register",
        title: "Join Now",
        subHeading: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "https://i.ibb.co/7KSK5Qn/rings.png",
        direction: "right"
    },
    {
        _id: "02",
        heading: "Find your Match",
        title: "Discover Matches",
        subHeading: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "https://i.ibb.co/TK7KW21/wedding-2.png",
        direction: "left"
    },
    {
        _id: "03",
        heading: "Send Interest",
        title: "Express Interest",
        subHeading: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "https://i.ibb.co/2FqFRYG/love-birds.png",
        direction: "right"
    },
    {
        _id: "04",
        heading: "Get Profile Information",
        title: "View Profiles",
        subHeading: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "https://i.ibb.co/R7RfvbL/network.png",
        direction: "left"
    },
    {
        _id: "05",
        heading: "Start Meetups",
        title: "Arrange Meetups",
        subHeading: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "https://i.ibb.co/0nN8D9k/chat.png",
        direction: "right"
    },
    {
        _id: "06",
        heading: "Getting Marriage",
        title: "Begin Forever",
        subHeading: "Lorem Ipsum is simply dummy text of the printing and typesetting industry.",
        image: "https://i.ibb.co/0f62b8x/wedding-couple.png",
        direction: "left"
    },
]

const Timeline = () => {

    return (
        <div className="mt-28 font-inter">
            <HeaderTitle title={'MOMENTS'} subTitle={'How it works'} />
            <Container>
                <div className="flex flex-col w-full md:w-4/5 mx-auto my-4">
                    <Circle />
                    {
                        events.map((event, key) => {
                            return <Fragment key={key}>
                                <div className="grid grid-cols-[1fr_auto_1fr] gap-x-2 md:gap-x-10 items-start mx-auto">
                                    {
                                        event.direction === 'left' ?
                                            <EventCart
                                                heading={event.heading}
                                                title={event.title}
                                                subHeading={event.subHeading}
                                                direction={event.direction} /> :
                                            <div className="flex items-center h-full">
                                                <img src={event.image} className="h-16 md:h-28 ml-auto" alt="" />
                                            </div>
                                    }
                                    <Pillar />
                                    {
                                        event.direction === 'right' ?
                                            <EventCart
                                                heading={event.heading}
                                                title={event.title}
                                                subHeading={event.subHeading}
                                                direction={event.direction} /> :
                                            <div className="flex items-center h-full">
                                                <img src={event.image} className="h-16 md:h-28" alt="" />
                                            </div>
                                    }
                                </div>
                                {key < (events.length - 1) && <Circle />}
                            </Fragment>
                        })
                    }
                    {/* <Circle /> */}
                </div>
            </Container>
        </div>
    );
};



const Circle = () => {
    return <div className="bg-gradient-to-r from-blue-500 to-teal-500 rounded-full w-4 h-4 mx-auto"></div>
}

const Pillar = () => {
    return <div className="bg-gradient-to-b from-blue-500 to-teal-500 rounded-t-full rounded-b-full w-2 h-full bg-blue-500 mx-auto"></div>
}

const EventCart = ({ heading, title, subHeading, direction }) => {
    return (
        <div className={`transition duration-300 ease-in-out transform hover:-translate-y-1 hover:shadow-2xl flex flex-col gap-y-2 border shadow-md rounded-xl p-4 md:p-6 ${direction === "left" ? 'md:mr-5' : 'md:ml-5'}`}>
            <h1 className="text-tertiary font-bold text-lg md:text-3xl">{heading}</h1>
            <p className="text-sm text-quaternary font-medium font-satisfy md:mb-2">{title}</p>
            <p className="text-gray-700">{subHeading}</p>
        </div>
    )
}

export default Timeline;
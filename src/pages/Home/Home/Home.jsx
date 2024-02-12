import { Helmet } from "react-helmet-async";
import Banner from "../Banner/Banner";
import HowWorkSection from "../HowWorkSection/HowWorkSection";
import Timeline from "../Timeline/Timeline";
import CounterSection from "../CounterSection/CounterSection";
import ReviewsSection from "../ReviewsSection/ReviewsSection";
import MatrimonyProfile from "../MatrimonyProfile/MatrimonyProfile";



const Home = () => {
    return (
        <div>
            <Helmet>
                <title>Love Birds Matrimony | Home</title>
            </Helmet>
            <Banner />
            <MatrimonyProfile/>
            <HowWorkSection />
            <Timeline />
            <CounterSection />
            <ReviewsSection />
        </div>
    );
};

export default Home;
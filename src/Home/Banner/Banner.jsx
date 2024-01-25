import { useEffect, useState } from 'react';
import Slider from './Slider';

const Banner = () => {

    const [slides, setSlides] = useState([])
    useEffect(() => {
        fetch('slidesData.json')
            .then(res => res.json())
            .then(data => setSlides(data))
    }, [])

    return (
        <>
            <Slider slides={slides} />
        </>
    );
};

export default Banner;
import { useEffect, useState } from 'react';
import Slider from './Slider';
import axios from 'axios';

const Banner = () => {

    const [slides, setSlides] = useState([])
    useEffect(() => {
        axios.get('slidesData.json')
            .then(res => setSlides(res.data))
    }, [])

    return (
        <>
            <Slider slides={slides} />
        </>
    );
};

export default Banner;
import { useState } from 'react';
import CountUp from 'react-countup';
import ScrollTrigger from 'react-scroll-trigger';
import { GiSelfLove } from "react-icons/gi";
import { IoIosPeople } from "react-icons/io";
import { SlUserFemale, SlUser } from "react-icons/sl";
import Container from '../../../components/ui/Container';


const CounterSection = () => {

    const [counterOn, setCounterOn] = useState(false);

    return (
        <ScrollTrigger onEnter={() => setCounterOn(true)} onExit={() => setCounterOn(false)}>
            <div className='bg-secondary py-28 mb-10'>
                <Container>
                    <div className='grid grid-cols-2 lg:grid-cols-4 gap-4 md:gap-8'>
                        <div className='text-center py-6 text-white bg-tertiary border-b-8 border-b-quaternary'>
                            <GiSelfLove className='text-5xl md:text-8xl mx-auto mb-2 text-quaternary' />
                            <p className='text-3xl font-bold'>{counterOn && <CountUp start={0} end={2320} duration={2} delay={0} />} +</p>
                            <p className='font-medium mt-2'>Couples Pared</p>
                        </div>
                        <div className='text-center py-6 text-white bg-tertiary border-b-8 border-b-quaternary'>
                            <IoIosPeople className='text-5xl md:text-8xl mx-auto mb-2 text-quaternary' />
                            <p className='text-3xl font-bold'>{counterOn && <CountUp start={0} end={4000} duration={2} delay={0} />} +</p>
                            <p className='font-medium mt-2'>Registrant</p>
                        </div>
                        <div className='text-center py-6 text-white  bg-tertiary border-b-8 border-b-quaternary'>
                            <SlUser className='text-5xl md:text-8xl mx-auto mb-2 text-quaternary' />
                            <p className='text-3xl font-bold'>{counterOn && <CountUp start={0} end={1565} duration={2} delay={0} />} +</p>
                            <p className='font-medium mt-2'>Man</p>
                        </div>
                        <div className='text-center py-6 text-white  bg-tertiary border-b-8 border-b-quaternary'>
                            <SlUserFemale className='text-5xl md:text-8xl mx-auto mb-2 text-quaternary' />
                            <p className='text-3xl font-bold'>{counterOn && <CountUp start={0} end={2179} duration={2} delay={0} />} +</p>
                            <p className='font-medium mt-2'>Women</p>
                        </div>
                    </div>
                </Container>
            </div>
        </ScrollTrigger>
    );
};

export default CounterSection;
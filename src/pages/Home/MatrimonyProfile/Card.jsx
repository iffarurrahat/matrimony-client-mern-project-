import PropTypes from 'prop-types';
import './Card.css'
import { Link } from 'react-router-dom';

const Card = ({ profile }) => {

    const { _id, image, name, permanentAddress, gender, candidateAge, occupation, } = profile || {}

    return (
        <div className="flex flex-col text-gray-700 bg-white shadow-md bg-clip-border rounded-xl">
            <div className="mx-4 mt-4 overflow-hidden bg-clip-border rounded-xl">
                <img src={image} alt="card-image" className="w-full h-96 object-cover hover:brightness-75 custom-style" />
            </div>
            <div className="relative flex items-center gap-4 my-4 overflow-hidden text-gray-700 bg-transparent shadow-none rounded-xl bg-clip-border px-6">
                <div className="flex w-full flex-col gap-0.5">
                    <div className="flex items-center justify-between">
                        <h5 className="block font-sans text-xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900">
                            {name}
                        </h5>
                        <p className='font-light leading-relaxed flex items-center gap-1'>Age {candidateAge}</p>
                    </div>
                    <p className="font-light leading-relaxed text-blue-gray-900 capitalize">
                        Gender {gender}
                    </p>
                </div>
            </div>
            <div className="px-6">
                <p className='capitalize'>Occupation: {occupation}</p>
                <p className="font-light leading-relaxed">
                    Address: {permanentAddress}
                </p>
            </div>
            <div className="p-4">
                <Link to={`/candidate/${_id}`}>
                    <button className="flex justify-center items-center gap-1 font-bold text-xs py-3 px-3 hover:scale-105 transition-all">
                        <span>View Profile</span>
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="2" className="w-4 h-4">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M17.25 8.25L21 12m0 0l-3.75 3.75M21 12H3"></path>
                        </svg>
                    </button>
                </Link>
            </div>
        </div>

    );
};


Card.propTypes = {
    profile: PropTypes.object
}
export default Card;
/* eslint-disable react/prop-types */

const SimpleCart = ({ birthDate, candidateAge, image, occupation, name, race }) => {

    return (
        <div className="relative md:flex bg-clip-border bg-white text-gray-700 shadow-md w-full max-w-[48rem] flex-row">
            <div className="relative md:w-1/2 m-0 overflow-hidden text-gray-700 bg-white rounded-r-none bg-clip-border shrink-0">
                <img src={image} alt="card-image" className="object-cover w-full h-full" />
            </div>
            <div className="p-6 flex items-center">
                <div>
                    <h6 className="font-sans text-sm font-medium leading-relaxed bg-tertiary text-white text-center mb-4">
                        Candidate Information
                    </h6>
                    <h4 className="block font-sans text-2xl antialiased font-semibold leading-snug tracking-normal text-blue-gray-900 mb-1">
                        {name}
                    </h4>
                    <div className="capitalize space-y-1">
                        <p>Age: {candidateAge}</p>
                        <p>Race: {race}</p>
                        <p>Occupation: {occupation}</p>
                        <p>Birth Date: {birthDate}</p>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default SimpleCart;
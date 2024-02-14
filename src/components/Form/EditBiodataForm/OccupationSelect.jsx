/* eslint-disable react/prop-types */
import Select from 'react-select'

const OccupationSelect = ({ info }) => {

    console.log(info);

    // Occupation
    const options = [
        { value: 'student', label: 'Student' },
        { value: 'job', label: 'Job' },
        { value: 'houseWife', label: 'house Wife' },
        { value: 'teacher', label: 'Teacher' },
        { value: 'doctor', label: 'Doctor' },
        { value: 'business', label: 'Business' },
        { value: 'engineer', label: 'Engineer' },
        { value: 'foreigner', label: 'Foreigner' },
        { value: 'others', label: 'Others' },
    ]

    return (
        <>
            <Select
                options={options}
                name="occupation"
                defaultValue={{ label: info, value: info }}
            />
        </>
    );
};

export default OccupationSelect;
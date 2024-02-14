/* eslint-disable react/prop-types */
import Select from 'react-select'

const GenderSelect = ({ info }) => {

    const options = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
    ]

    return (
        <>
            <Select
                options={options}
                name="gender"
                defaultValue={{ label: info, value: info }} />
        </>
    );
};

export default GenderSelect;
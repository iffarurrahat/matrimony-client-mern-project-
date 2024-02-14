/* eslint-disable react/prop-types */
import Select from 'react-select'

const RaceSelect = ({ info }) => {

    // Race
    const options = [
        { value: 'islam', label: 'Islam' },
        { value: 'hinduism', label: 'Hinduism' },
        { value: 'buddhism', label: 'Buddhism' },
        { value: 'christianity', label: 'Christianity' },
        { value: 'others', label: 'Others' },
    ]

    return (
        <>
            <Select
                options={options}
                name="race"
                defaultValue={{ label: info, value: info }} />
        </>
    );
};

export default RaceSelect;
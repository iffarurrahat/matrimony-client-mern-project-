import Select from 'react-select'

const RaceSelect = () => {

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
                name="race" />
        </>
    );
};

export default RaceSelect;
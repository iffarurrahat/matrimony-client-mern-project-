import Select from 'react-select'

const GenderSelect = () => {

    const options = [
        { value: 'male', label: 'Male' },
        { value: 'female', label: 'Female' },
    ]

    return (
        <>
            <Select
                options={options}
                name="gender" />
        </>
    );
};

export default GenderSelect;
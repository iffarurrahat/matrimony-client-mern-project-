/* eslint-disable react/prop-types */
import Select from 'react-select'

const DivisionSelect = ({ setValueDivision, valueDivision }) => {

    const options = [
        { value: 'dhaka', label: 'Dhaka, Bangladesh' },
        { value: 'sylhet', label: 'Sylhet, Bangladesh' },
        { value: 'chittagong', label: 'Chittagong, Bangladesh' },
        { value: 'barisal', label: 'Barisal,  Bangladesh' },
    ]

    return (
        <>
            <Select
                options={options}
                defaultValue={valueDivision}
                onChange={setValueDivision}
            />
        </>
    );
};

export default DivisionSelect;
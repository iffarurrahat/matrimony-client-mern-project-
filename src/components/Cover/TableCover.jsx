/* eslint-disable react/prop-types */

const TableCover = ({ title, text }) => {
    return (
        <div className="flex justify-between items-center w-full h-[350px] md:h-[600px]">
            <div className="text-center mx-auto">
                <p className="text-primary font-satisfy text-base md:text-xl">{text}</p>
                <h1 className="mb-2 md:mb-5 text-xl md:text-3xl font-bold text-secondary font-inter md:w-3/5 mx-auto capitalize">{title}</h1>
            </div>
        </div>
    );
};

export default TableCover;
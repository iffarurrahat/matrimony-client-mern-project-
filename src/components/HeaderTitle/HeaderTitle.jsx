import PropTypes from 'prop-types';

const HeaderTitle = ({ title, subTitle }) => {
    return (
        <div className="text-center mb-8 md:mb-16">
            <h4 className='text-base md:text-lg font-bold font-satisfy text-primary'>{title}</h4>
            <h1 className="text-3xl md:text-5xl font-bold mb-1 md:mb-2 font-inter">{subTitle}</h1>
        </div>
    );
};


HeaderTitle.propTypes = {
    title: PropTypes.string,
    subTitle: PropTypes.string,
};
export default HeaderTitle;
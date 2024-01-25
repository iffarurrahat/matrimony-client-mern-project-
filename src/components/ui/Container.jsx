import PropTypes from 'prop-types';

const Container = ({ children }) => {
  return (
    <div className="w-full max-w-[1280px] px-3 md:px-[20] mx-auto">{children}</div>
  );
};

Container.propTypes = {
  children: PropTypes.node.isRequired
};
export default Container;

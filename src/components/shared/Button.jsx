import PropTypes from 'prop-types';

function Button({ buttonType, children }) {
  return (
    <button
      className={
        buttonType === 'bannerButton'
          ? 'outline-none bg-orange-400 rounded-xl px-5 py-2 text-2xl tracking-wider font-medium  '
          : 'outline-none bg-orange-200 rounded-md px-3 py-1   text-md'
      }
    >
      {children}
    </button>
  );
}

Button.prototype = {
  buttonType: PropTypes.string,
  children: PropTypes.node.isRequired,
};

Button.defaultProps = {
  buttonType: 'normal',
};

export default Button;

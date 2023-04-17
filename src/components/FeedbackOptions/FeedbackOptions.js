import PropTypes from 'prop-types';
import shortid from 'shortid';

const FeedbackOptions = ({ onLeaveFeedback, options }) => {
  return (
    <>
      {options.map(option => (
        <button
          key={shortid.generate()}
          type="button"
          onClick={onLeaveFeedback}
          name={option}
        >
          {option}
        </button>
      ))}
    </>
  );
};

export default FeedbackOptions;

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};

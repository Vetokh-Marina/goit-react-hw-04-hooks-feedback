import PropTypes from 'prop-types';
import shortid from 'shortid';
import s from './Feedback.module.css';

 export default function FeedbackOptions({
  options,
  onLeaveFeedback,
}) {
  return (
    <ul className={s.list}>
      {options.map(option => (
        <li key={shortid.generate()}>
          <button
            onClick={() => onLeaveFeedback(option)}
            className={s.button}
            name={option}
          >
            {option}
          </button>
        </li>
      ))}
    </ul>
  );
}

FeedbackOptions.propTypes = {
  options: PropTypes.array.isRequired,
  onLeaveFeedback: PropTypes.func.isRequired,
};
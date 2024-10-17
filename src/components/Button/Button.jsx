import PropTypes from 'prop-types';
import styles from './Button.module.scss';

export default function Button({ text, onClick, disabled, buttonType, icon, iconPosition }) {
  return (
    <button onClick={onClick} disabled={disabled} className={`${styles.button} ${styles[buttonType]}`}>
      {icon && iconPosition === 'left' && <>{icon}</>}
      {text}
      {icon && iconPosition === 'right' && <>{icon}</>}
    </button>
  );
}

Button.propTypes = {
  text: PropTypes.string.isRequired,
  onClick: PropTypes.func,
  disabled: PropTypes.bool,
  buttonType: PropTypes.oneOf(['primary', 'secondary', 'tertiary']),
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
};

Button.defaultProps = {
  onClick: () => {},
  disabled: false,
  buttonType: 'primary',
  icon: null,
  iconPosition: 'right',
};

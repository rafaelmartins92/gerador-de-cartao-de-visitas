import PropTypes from 'prop-types';
import styles from './ExternalLink.module.scss';

export default function ExternalLink({ text, href, icon, iconPosition }) {
  return (
    <a href={href} target="_blank" rel="noopener noreferrer" className={`${styles.link}`}>
      {icon && iconPosition === 'left' && <>{icon}</>}
      {text}
      {icon && iconPosition === 'right' && <>{icon}</>}
    </a>
  );
}

ExternalLink.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
  icon: PropTypes.node,
  iconPosition: PropTypes.oneOf(['left', 'right']),
};

ExternalLink.defaultProps = {
  icon: null,
  iconPosition: 'right',
};

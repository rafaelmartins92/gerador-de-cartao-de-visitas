import PropTypes from 'prop-types';

export default function ExternalLink({ text, href }) {
  return (
    <a href={href} target="_blank">
      {text}
    </a>
  );
}

ExternalLink.propTypes = {
  text: PropTypes.string.isRequired,
  href: PropTypes.string.isRequired,
};

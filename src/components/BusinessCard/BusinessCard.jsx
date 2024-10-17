import PropTypes from 'prop-types';
import Button from '../Button/Button';
import ExternalLink from '../ExternalLink/ExternalLink';

export default function BusinessCard({ userData }) {
  return (
    <>
      <Button text="Gerar outro cartão" onClick={userData.clearForm} />

      <div className="business-card">
        <p>{userData.name}</p>
        <p>{userData.phone}</p>
        <p>{userData.email}</p>
      </div>

      <Button text="BAIXAR CARTÃO" disabled={true} />

      <ExternalLink text="fazer um teste grátis do RD Station Marketing" href="https://app.rdstation.com.br/signup" />
    </>
  );
}

BusinessCard.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
    clearForm: PropTypes.func.isRequired,
  }).isRequired,
};

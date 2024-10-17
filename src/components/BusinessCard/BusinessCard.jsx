import PropTypes from 'prop-types';
import symbol from '../../assets/symbol-rd-station-default.svg';
import styles from './BusinessCard.module.scss';

export default function BusinessCard({ userData }) {
  return (
    <div className={styles.businessCard}>
      <div className={styles.cardImage}>
        <img src={symbol} alt="Símbolo da RD Station" loading="lazy" className={styles.symbol} />
      </div>
      <span className={styles.divider}></span>
      <div className={styles.fields}>
        <p className="body-lg captitalize">{userData.name}</p>
        <p className="body-lg">{userData.phone}</p>
        <p className="body-lg">{userData.email}</p>
      </div>
    </div>
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

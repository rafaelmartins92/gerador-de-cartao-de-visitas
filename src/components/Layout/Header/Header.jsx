import styles from './Header.module.scss';
import logo from '../../../assets/logo-rd-station-default.svg';

const Header = () => {
  return (
    <header className={`${styles.header}`}>
      <div className={`${styles.headerWrapper} container`}>
        <img src={logo} alt="RD Station Logo" loading="lazy" className={styles.productImage} />
        <h4>Gerador de Cartão de Visita</h4>
      </div>
    </header>
  );
};

export default Header;

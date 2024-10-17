import styles from './Footer.module.scss';

const Footer = () => {
  return (
    <footer className={`${styles.footer}`}>
      <div className={`${styles.footerWrapper} container`}>
        <a
          href="https://legal.rdstation.com/pt/privacy-policy/"
          target="_blank"
          rel="noopener noreferrer"
          className="body-sm bold"
        >
          Política de privacidade.
        </a>
        <a
          href="https://www.orafadev.com.br/"
          target="_blank"
          rel="noopener noreferrer"
          className="body-sm decoration-none"
        >
          © 2024 Rafael Martins
        </a>
      </div>
    </footer>
  );
};

export default Footer;

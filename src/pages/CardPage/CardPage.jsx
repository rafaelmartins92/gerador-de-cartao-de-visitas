import PropTypes from 'prop-types';
import Button from '../../components/Button/Button';
import ExternalLink from '../../components/ExternalLink/ExternalLink';
import BusinessCard from '../../components/BusinessCard/BusinessCard';
import ChevronLeft from '../../assets/chevron-left.svg';
import ArrowDown from '../../assets/downlong.svg';
import ArrowRightWhite from '../../assets/long-arrow-alt-right-white.svg';
import heroImage from '../../assets/img.svg';
import styles from './CardPage.module.scss';

export default function CardPage({ userData, clearForm }) {
  return (
    <div className={`${styles.cardPage}`}>
      <div className={`${styles.pageWrapper} container`}>
        <div className={styles.pageImage}>
          <img
            src={heroImage}
            alt="Ilustração de um homem com fones de ouvido azul pintando uma especíe de quadro com rolo de pintar parede"
            loading="lazy"
            className={styles.heroImage}
          />
        </div>

        <div className={styles.pageContent}>
          <Button
            text="Gerar outro cartão"
            onClick={clearForm}
            icon={<img src={ChevronLeft} alt="Ícone de seta para esquerda" />}
            iconPosition="left"
            buttonType="secondary"
          />

          <BusinessCard userData={userData} />

          <Button
            text="BAIXAR CARTÃO"
            disabled={true}
            icon={<img src={ArrowDown} alt="Ícone de seta para baixo" />}
            iconPosition="left"
          />

          <ExternalLink
            text="fazer um teste grátis do RD Station Marketing"
            href="https://app.rdstation.com.br/signup"
            icon={<img src={ArrowRightWhite} alt="Ícone de seta para direita" />}
            iconPosition="right"
          />
        </div>
      </div>
    </div>
  );
}

CardPage.propTypes = {
  userData: PropTypes.shape({
    name: PropTypes.string.isRequired,
    email: PropTypes.string.isRequired,
    phone: PropTypes.string.isRequired,
  }).isRequired,
  clearForm: PropTypes.func.isRequired,
};

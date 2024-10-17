import PropTypes from 'prop-types';
import Form from '../../components/Form/Form';
import heroImage from '../../assets/img.svg';
import styles from './FormPage.module.scss';

export default function FormPage({ onSubmit }) {
  return (
    <div className={`${styles.hero}`}>
      <div className={`${styles.heroWrapper} container`}>
        <div className={styles.heroText}>
          <h2>Gerador de Cartão de Visita</h2>
          <p className="subtitle-sm">
            Crie grátis seu cartão de visita em passos rápidos! Você o insere no Instagram e demais canais digitais.
          </p>
        </div>
        <div className={styles.heroContent}>
          <img
            src={heroImage}
            alt="Ilustração de um homem com fones de ouvido azul pintando uma especíe de quadro com rolo de pintar parede"
            loading="lazy"
            className={styles.heroImage}
          />
          <Form onSubmit={onSubmit} />
        </div>
      </div>
    </div>
  );
}

FormPage.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

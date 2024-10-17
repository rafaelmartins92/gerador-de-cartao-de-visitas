import { useForm } from 'react-hook-form';
import PropTypes from 'prop-types';
import Button from '../Button/Button';
import ArrowRight from '../../assets/long-arrow-alt-right.svg';
import styles from './Form.module.scss';

export default function Form({ onSubmit }) {
  const {
    register,
    handleSubmit,
    formState: { errors },
  } = useForm();

  const handlePhoneMask = (event) => {
    let value = event.target.value.replace(/\D/g, ''); // Remove all non-digit characters

    if (value.length <= 10) {
      value = value.replace(/^(\d{2})(\d)/g, '($1) $2'); // Apply the area code mask for 10 digits
      value = value.replace(/(\d{4})(\d)/, '$1-$2'); // For residential numbers
    } else {
      value = value.replace(/^(\d{2})(\d)/g, '($1) $2'); // Apply the area code mask for 11 digits
      value = value.replace(/(\d{5})(\d)/, '$1-$2'); // Apply the hyphen for mobile numbers
    }
    event.target.value = value;
  };

  return (
    <form
      onSubmit={handleSubmit(onSubmit)}
      aria-label="Formulário do Gerador de Cartão de Visita"
      className={styles.form}
    >
      <label htmlFor="name" className={errors.name ? `${styles.error}` : ''}>
        Nome*
        <input id="name" type="text" placeholder="Nome" {...register('name', { required: true, minLength: 2 })} />
        {errors.name && <span className="body-xs">Nome deve ter pelo menos 2 caracteres</span>}
      </label>

      <div className={styles.inputsWrapper}>
        <label htmlFor="phone" className={errors.phone ? `${styles.error}` : ''}>
          Telefone*
          <input
            id="phone"
            type="text"
            placeholder="(00) 0 0000-0000"
            {...register('phone', {
              required: true,
              validate: (value) => {
                const digitsOnly = value.replace(/\D/g, ''); // Remove all non-digit characters
                const isValid = digitsOnly.length === 10 || digitsOnly.length === 11; // Validate for 10 or 11 digits
                return isValid;
              },
            })}
            onInput={handlePhoneMask}
            maxLength={15}
            inputMode="numeric"
          />
          {errors.phone && <span className="body-xs">Telefone inválido</span>}
        </label>

        <label htmlFor="email" className={errors.email ? `${styles.error}` : ''}>
          Email*
          <input
            id="email"
            type="email"
            placeholder="nome@email.com"
            {...register('email', {
              required: true,
              pattern: /^[a-z0-9.]+@[a-z0-9]+\.[a-z]+(\.[a-z]+)?$/i,
            })}
          />
          {errors.email && <span className="body-xs">Email inválido</span>}
        </label>
      </div>

      <ul>
        <li>Ao preencher o formulário, concordo * em receber comunicações de acordo com meus interesses.</li>
        <li>
          Ao informar meus dados, eu concordo com a{' '}
          <a href="https://legal.rdstation.com/pt/privacy-policy/" target="_blank" rel="noopener noreferrer">
            Política de privacidade.
          </a>
        </li>
      </ul>
      <small>* Você pode alterar suas permissões de comunicação a qualquer tempo.</small>

      <Button
        type="submit"
        text="Gerar CARTÃO Grátis"
        icon={<img src={ArrowRight} alt="Ícone de seta para direira" />}
        iconPosition="right"
      />
    </form>
  );
}

Form.propTypes = {
  onSubmit: PropTypes.func.isRequired,
};

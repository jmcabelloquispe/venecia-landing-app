import styles from '../../styles/Home.module.css';

const ActivateCardForm  = () => {
  return (
    <form action="" className={styles.form}>
      <input type="text" placeholder="Cod 16 digitos"/>
      <input type="text" placeholder="Cod de Seguridad"/>
      <button>Continuar</button>
    </form>
  )
}

export default ActivateCardForm;
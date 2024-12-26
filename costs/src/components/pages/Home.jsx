import styles from './Home.module.css'
import savings from '../../img/savings.svg'
import LinkButton from '../layout/LinkButton';


function Home() {


    return (
      <section className={styles.home_container}>
        <h1>
          Bienvenido a <span>Costs</span>
        </h1>
        <p>Comienza a gestionar tus proyectos ahora</p>
        <LinkButton to="NewProject" text="Crear Proyecto"/>
        <img src={savings} alt="Costs" />
      </section>
    );
}

export default Home
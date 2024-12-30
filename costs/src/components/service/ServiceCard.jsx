import styles from '../project/ProjectCard.module.css'

import {BsFillTrashFill} from 'react-icons/bs'

function ServiceCard({ id, name, cost, description, handleRemove }) {

    const remove = (e) => {

    }

    return (
      <div className={styles.project_card}>
        <h4>{name}</h4>
        <p>
          <span>Costo Total</span> €{cost}
        </p>
        <p>{description}</p>
        <div className={styles.project_card_actions}>
          <button onClick={remove}>
            <BsFillTrashFill />
            Borrar
            </button>  
        </div>
      </div>
    );
}

export default ServiceCard
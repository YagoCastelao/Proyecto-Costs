import ProjectForm from '../project/ProjectForm';

import styles from './NewProject.module.css'

function NewProject() {
  return (
    <div className={styles.newproject_container}>
      <h1>Crear Proyecto</h1>
      <p>Crea tu proyecto y luego agrega los servicios.</p>
      <ProjectForm />
    </div>
  );
}

export default NewProject
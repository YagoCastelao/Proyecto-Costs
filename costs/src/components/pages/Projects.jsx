import { useLocation } from "react-router-dom";
import styles from "./Projects.module.css";

import Message from "../layout/Message";
import Container from "../layout/Container";
import LinkButton from "../layout/LinkButton";

function Projects() {
  const location = useLocation();
  let message = "";
  if (location.state) {
    message = location.state.message;
  }

  return (
    <div className={styles.project_container}>
      <div className={styles.tittle_container}>
        <h1>Mis Proyectos</h1>
        <LinkButton to="NewProject" text="Crear Proyecto" />
      </div>
      {message && <Message type="success" msg={message} />}
      <Container customClass="start">
        <p>Proyectos...</p>
      </Container>
    </div>
  );
}

export default Projects;

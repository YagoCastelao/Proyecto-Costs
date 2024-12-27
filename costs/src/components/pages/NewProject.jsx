import { useNavigate } from "react-router-dom";

import ProjectForm from "../project/ProjectForm";

import styles from "./NewProject.module.css";

function NewProject() {
  const navigate = useNavigate();

  function createPost(project) {
    // initialize cost and services
    project.cost = 0;
    project.services = [];

    fetch("http://localhost:5000/projects", {
      method: "POST",
      headers: {
        "Content-type": "application/json",
      },
      body: JSON.stringify(project),
    })
      .then((resp) => resp.json())
      .then((data) => {
        console.log(data);
        // redirect
        navigate("/projects", { message: "Proyecto creado exitosamente" });
      })
      .catch((err) => console.log(err));
  }

  return (
    <div className={styles.newproject_container}>
      <h1>Crear Proyecto</h1>
      <p>Crea tu proyecto y luego agrega los servicios.</p>
      <ProjectForm handleSubmit={createPost} btnText="Crear Proyecto" />
    </div>
  );
}

export default NewProject;

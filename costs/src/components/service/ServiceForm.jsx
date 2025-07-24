import { useState } from "react";

import styles from "../project/ProjectForm.module.css";

import Input from "../form/Input";
import SubmitButton from "../form/SubmitButton";

function ServiceForm({ handleSubmit, btnText, projectData }) {
  const [service, setService] = useState({});

  function submit(e) {
    e.preventDefault();
    projectData.services.push(service);
    handleSubmit(projectData);
  }

  function handleChange(e) {
    setService({ ...service, [e.target.name]: e.target.value });
  }

  return (
    <form onSubmit={submit} className={styles.form}>
      <Input
        type="text"
        text="Nombre del servicio"
        name="name"
        placeholder="Ingrese el nombre del servicio"
        handleOnChange={handleChange}
      />
      <Input
        type="number"
        text="Costo del servicio"
        name="cost"
        placeholder="Ingrese el monto total"
        handleOnChange={handleChange}
      />
      <Input
        type="text"
        text="Descripción del servicio"
        name="description"
        placeholder="Describe el servicio"
        handleOnChange={handleChange}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ServiceForm;

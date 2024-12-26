import styles from "./ProjectForm.module.css";

import Input from "../form/input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

function ProjectForm({ btnText }) {
  return (
    <form className={styles.form}>
      <Input
        type="text"
        text="Nombre del proyecto"
        name="name"
        placeholder="Ingrese el nombre del proyecto"
      />
      <Input
        type="Number"
        text="Presupuesto del proyecto"
        name="budget"
        placeholder="Ingrese el presupuesto del proyecto"
      />
      <Select name="category_id" text="Selecciona la categoría" />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;

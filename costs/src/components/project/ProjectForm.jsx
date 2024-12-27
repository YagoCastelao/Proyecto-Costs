import { useEffect, useState } from "react";

import styles from "./ProjectForm.module.css";

import Input from "../form/input";
import Select from "../form/Select";
import SubmitButton from "../form/SubmitButton";

function ProjectForm({ btnText }) {
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    fetch("http://localhost:5000/categories", {
      method: "GET",
      headers: {
        "Content-Type": "aplication/json",
      },
    })
      .then((resp) => resp.json())
      .then((data) => {
        setCategories(data);
      })
      .catch((err) => console.log(err));
  }, []);

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
      <Select
        name="category_id"
        text="Selecciona la categoría"
        options={categories}
      />
      <SubmitButton text={btnText} />
    </form>
  );
}

export default ProjectForm;

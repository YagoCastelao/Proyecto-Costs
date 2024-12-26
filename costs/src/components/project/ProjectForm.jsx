function ProjectForm() {
  return (
    <form>
      <div>
        <input type="text" placeholder="Introduzca el nombre del proyecto" />
      </div>
      <div>
        <input type="number" placeholder="Introduzca el presupuesto total" />
      </div>
      <div>
        <select name="category_id">
          <option disabled selected>
            Selecciona la categoría
        </option>
        </select>
      </div>
      <div>
        <input type="submit" value="Crear Proyecto" />
      </div>
    </form>
  );
}

export default ProjectForm;

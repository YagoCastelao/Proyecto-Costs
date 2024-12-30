# Proyecto-Costos

## Descripción
Este proyecto utiliza las principales funcionalidades de React condensadas para crear un **controlador de costos** o **creador de proyectos**. La idea es permitir que los usuarios ingresen sus proyectos, que se guardan en una base de datos a través de una API local creada con **JSON Server**. La plataforma está orientada a empresas que desean implementar proyectos basados en presupuestos, asignando valores a cada involucrado.

![Imagen del proyecto](https://imgur.com/a/hjTC2cZ)

## Funcionalidades
- **Registro y gestión de proyectos y costos.**
- **Interfaz interactiva** con React.
- **API local** para persistencia de datos con JSON Server.
- **Enrutamiento** para la navegación entre las páginas.

## Tecnologías Utilizadas
- **React**: Biblioteca JavaScript para la construcción de la interfaz.
- **React Router**: Gestión de rutas de la aplicación.
- **Vite**: Herramienta de compilación y desarrollo rápido.
- **JSON Server**: Creación de una API local para persistir los datos de costos y gastos.
- **React Icons**: Íconos para la interfaz.

## Instalación
1. Clona este repositorio:
   ```bash
   git clone https://github.com/YagoCastelao/Proyecto-Costs
   
2. Instala las dependencias:
   ```bash
   npm install

3. Inicia el servidor backend (API local):
   ```bash
   npm run backend

4. Inicia la aplicación:
   ```bash
   npm run dev

## API Local
La API se ejecuta en http://localhost:5000 y ofrece los siguientes endpoints:

- **GET** /costs: Retorna todos los costos.
- **POST** /costs: Agrega un nuevo costo.
- **GET** /costs/:id: Retorna un costo específico.
- **DELETE** /costs/:id: Elimina un costo.

## Contribuyendo
Si deseas contribuir, realiza un fork de este repositorio y envía un pull request.

## Licencia
Este proyecto está bajo la licencia MIT.

## 🎬 GalleryMovies: Full-Stack Movie Manager

A professional fullstack application built with **React, Redux, Express, Sequelize, and PostgreSQL.**
This project demonstrates scalable API design, cinematic UI, reusable components, and deployment, ready architecture ideal for showcasing fullstack skills.

<img width="1862" height="949" alt="image" src="https://github.com/user-attachments/assets/8712a68d-4a72-4644-a9fd-b6939b6efe05" />

---

### 📊 Database Architecture (Many-to-Many Relationships)

```mermaid
erDiagram
    MOVIE ||--o{ GENRE_MOVIES : "belongs to"
    GENRE ||--o{ GENRE_MOVIES : "has"
    
    MOVIE ||--o{ ACTOR_MOVIES : "features"
    ACTOR ||--o{ ACTOR_MOVIES : "stars in"
    
    MOVIE ||--o{ DIRECTOR_MOVIES : "directed by"
    DIRECTOR ||--o{ DIRECTOR_MOVIES : "directs"

    MOVIE {
        string name
        string image
        text synopsis
        int release_year
    }
    ACTOR {
        string first_name
        string last_name
        string nationality
    }
    DIRECTOR {
        string first_name
        string last_name
        string nationality
    }
    GENRE {
        string name
    }
```

---

## 🌐 Deployment

## 🚀 Backend: Server online with Render
🔗 https://moviesapp-lc0z.onrender.com

---

## 📄 MoviesCRUD: Documentation online with Postman
🔗 https://documenter.getpostman.com/view/48309056/2sB3dLUX82

---

## 🎬🌐 FullStack Project: MoviesApp online with Netlify
🔗 https://gallerymovies.netlify.app

---

## 🎯 Project Goals

This project was designed to:

- Design and build a movie API with models for genres, actors, directors, and movies. 
- Implement complex relationships: a movie can have multiple genres, actors, and directors. 
- Develop complete CRUD endpoints for each entity, ensuring create, read, update, and delete operations.  
- Include advanced endpoints to assign genres, actors, and directors to movies through dynamic relationships.
- Deploy the backend on Render and verify functionality with real data (at least two movies created).
- Integrate a React frontend that consumes the API, showcasing a cinematic interface inspired by streaming platforms.
- Document the project professionally with README, `.env.example`, and clear structure for easy cloning and execution.

---

## 🧠 Key Skills Reinforced

- **Fullstack Development:** integrating frontend (React + Redux + Vite) with backend (Express + Sequelize + PostgreSQL).  
- **API Design & RESTful Practices:** building CRUD endpoints and managing entity relationships.  
- **Database Modeling:** using Sequelize ORM to define models and relationships in PostgreSQL.
- **Security & Best Practices:** configuring CORS (for educational and portfolio purposes, CORS is open to all origins. This configuration allows public access from any frontend during development and testing.), Helmet, and handling environment variables.
- **Deployment Skills:** deploying backend on Render and frontend on Vercel/Netlify.
- **Version Control & Collaboration:** GitHub usage with `.gitignore`, `.env.example`, and bilingual documentation.
- **UI/UX Design:** building a cinematic interface with React-Bootstrap and Bootswatch.
- **Professional Presentation:** structured README, bilingual content, clear instructions, and demo links.

---

## 📌 Features

- CRUD operations for **Genres, Actors, Directors, and Movies.**
- **Relationships:** movies can have multiple genres, actors, and directors.
- Secure API with CORS and Helmet.
- Professional UI inspired by streaming platforms.
- Deployment-ready with environment variables and documentation.

---

## 📁 API Endpoints

| Método | Endpoint         | Función |
|--------|------------------|---------|
| GET    | `/movies`        | Returns all movies with all genres, actors, and directors |
| POST   | `/movies`        | Create a new movie |
| GET    | `/movies/:id`    | Return a movie by id searched |
| PUT    | `/movies/:id`    | Update a movie by id |
| DELETE | `/movies/:id`     | Remove a movie by id |

*Note: Standard CRUD enpoints for all models equally applicable for genres, actors and directors.*

---

## 🗂️ API Models

| Model       | Fields   |            
|-------------|----------|
| Genres      | id, name | 
| Actors      | id, first_name, last_name, nationality, image, birthday | 
| Directors   | id, first_name, last_name, nationality, image, birthday | 
| Movies      | id, name, image, synopsis, release_year | 

---

## 💻🚀 Tech Stack

| Frontend      | Backend       | Deployment | Database   |
|---------------|---------------|------------|------------|
| React 18      | Node.js       | Render     | PostgreSQL |
| Redux Toolkit | Express       | Netlify    | 
| React Router  | Sequelize ORM | Postman    |
| Axios         | PostgreSQL    |
| Bootstrap     | Helmet        |
| Vite          | Morgan        |
| Bootswatch    | CORS          |

---

## 🗂️ Project Structure

```bash
📁 MOVIES-APP
|   ├── 📁 movies-app-backend
│   |   └── 📁 node_modules/
│   |   └── 📁 src/
|   │   |    └── 📁 controllers/
│   |   |    |    └── actor.controllers.js
│   |   |    |    └── director.controllers.js
│   |   |    |    └── genre.controllers.js
│   |   |    |    └── movie.controllers.js
|   │   |    └── 📁 db/
│   |   |    |    └── connect.js
|   │   |    └── 📁 env/
│   |   |    |    └── index.js
|   │   |    └── 📁 middlewares/
│   |   |    |    └── catchError.js
│   |   |    |    └── errorHandler.js
|   │   |    └── 📁 models/
│   |   |    |    └── actor.model.js
│   |   |    |    └── director.model.js
│   |   |    |    └── genre.model.js
│   |   |    |    └── movie.model.js
|   │   |    └── 📁 routes/
|   │   |    |    └── 📁 api/
│   |   |    |    |    └── actor.routes.js
│   |   |    |    |    └── director.routes.js
│   |   |    |    |    └── genre.routes.js
│   |   |    |    |    └── index.js
│   |   |    |    |    └── movie.routes.js
│   |   |    |    └── index.js
│   |   |    └── app.js
│   |   |    └── server.js
|   |   └── .env
|   |   └── .env.example
|   |   └── package-lock.json
|   |   └── package.json
|   ├── 📁 movies-app-frontend
│   |    └── 📁 node_modules/
│   |    └── 📁 src/
|   │    |    └── 📁 assets/
|   │    |    └── 📁 components/
|   │    |    |    └── 📁 Actors/
│   |    |    |    |    └── ActorCard.jsx
│   |    |    |    |    └── ActorsForm.jsx
|   │    |    |    └── 📁 Directors/
│   |    |    |    |    └── DirectorCard.jsx
│   |    |    |    |    └── DirectorForm.jsx
|   │    |    |    └── 📁 Genres/
│   |    |    |    |    └── GenreItem.jsx
│   |    |    |    |    └── GenresModal.jsx
|   │    |    |    └── 📁 Movies/
│   |    |    |    |    └── MovieCard.jsx
│   |    |    |    └── ButtonsEditDelete.jsx
│   |    |    |    └── EmptyImg.jsx
│   |    |    |    └── index.js
│   |    |    |    └── ItemsSelect.jsx
│   |    |    |    └── LoadingScreen.jsx
│   |    |    |    └── ModalForm.jsx
│   |    |    |    └── NavBar.jsx
│   |    |    |    └── Notification.jsx
│   |    |    |    └── UniversalPagination.jsx
|   │    |    └── 📁 pages/
|   │    |    |    └── Actors.jsx
|   │    |    |    └── Directors.jsx
|   │    |    |    └── Home.jsx
|   │    |    |    └── index.js
|   │    |    |    └── MovieDetail.jsx
|   │    |    |    └── MovieForm.jsx
|   │    |    └── 📁 store/
|   │    |    |    └── 📁 slices/
│   |    |    |    |    └── actors.slice.js
│   |    |    |    |    └── app.slice.js
│   |    |    |    |    └── directors.slice.js
│   |    |    |    |    └── genres.slice.js
│   |    |    |    |    └── movies.slice.js
|   │    |    |    └── index.js
|   │    |    └── 📁 utils/
|   │    |    |    └── axios.js
|   │    |    |    └── formatDate.js
|   │    |    |    └── getOneProperty.js
|   │    |    |    └── listWithCommas.js
|   │    |    |    └── searchAndFormatMovie.js
|   │    |    └── App.css
|   │    |    └── App.jsx
|   │    |    └── loading-screen.css
|   │    |    └── main.jsx
│   |    └── .env
│   |    └── .env.example
│   |    └── index.html
│   |    └── package-lock.json
│   |    └── package.json
│   |    └── vite.config.js
|   └── .gitignore
```
---

## ⚙️ Setup & Installation

## 🔧 Backend Setup

1. Clone this repository:

```bash
git clone https://github.com/Clic-stack/MoviesApp-FullStack-Project.git
```

2. Change directory movies-app-backend:

```bash
cd movies-app-backend
```

3. Install dependences:

```bash
npm install
```

4. Configure enviroment variables:
- Changes file name `.env.example` to `.env`
- Modify the necessary variable values.
- Example configuration:

```bash
PORT=4000 # -> Change for your server
DATABASE_URL=postgres://user:password@localhost:5432/movies
CORS_ORIGIN=http://localhost:5173 # -> Frontend URL (leave blank if not applicable)
```

5. Run de server in development mode:

```bash
npm run dev
```

*This way, the backend will be available at: `http://localhost:4000`.*

## 🎬 Frontend Setup

1. Change directory to movies-app-frontend:
   
```bash
cd movies-app-frontend
```

2. Install dependencies:

```bash
npm install
```

3. Configure environment variables using `.env.example` file and change name for `.env`:

```bash
VITE_API_URL=http://localhost:4000/api/v1
```
*Note: Ensure this matches your Backend URL.*

4. Run the development server:

```bash
npm run dev
```

The application will be available at: `http://localhost:5173`

---

## 🎨Author
Developed by Clio Salgado as part of the Node.js & Backend module at Academlo, with the goal of consolidating skills in database modeling, REST API design, frontend–backend integration, cloud deployment, and professional documentation as part of a fullstack project.

🔽 **Versión en Español** 🔽

## ## 🎬 MoviesApp Fullstack Project

Aplicación fullstack profesional construida con **React, Redux, Express, Sequelize y PostgreSQL.** 
Este proyecto demuestra el diseño de una API escalable, interfaz cinematográfica, componentes reutilizables y arquitectura lista para despliegue, ideal para mostrar habilidades fullstack.

<img width="1862" height="949" alt="image" src="https://github.com/user-attachments/assets/eb2733b7-9076-44e8-b6a8-c6eaa01fad60" />

---

### 📊 Arquitectura de la Base de Datos (Relación Many-to-Many)

```mermaid
erDiagram
    MOVIE ||--o{ GENRE_MOVIES : "belongs to"
    GENRE ||--o{ GENRE_MOVIES : "has"
    
    MOVIE ||--o{ ACTOR_MOVIES : "features"
    ACTOR ||--o{ ACTOR_MOVIES : "stars in"
    
    MOVIE ||--o{ DIRECTOR_MOVIES : "directed by"
    DIRECTOR ||--o{ DIRECTOR_MOVIES : "directs"

    MOVIE {
        string name
        string image
        text synopsis
        int release_year
    }
    ACTOR {
        string first_name
        string last_name
        string nationality
    }
    DIRECTOR {
        string first_name
        string last_name
        string nationality
    }
    GENRE {
        string name
    }
```

---

## 🌐 Despliegue

## 🚀 Backend: Servidor en línea desplegado con Render
🔗 https://moviesapp-lc0z.onrender.com

---

## 📄 MoviesCRUD: Documentación en línea desplegada con Postman
🔗 https://documenter.getpostman.com/view/48309056/2sB3dLUX82

---

## 🎬🌐 FullStack Project: Aplicación de películas en línea desplegada con Netlify
🔗 https://galerymovies.netlify.app

---

## 🎯 Objetivos del Proyecto

Este proyecto fue diseñado para:

- Diseñar y construir una API de películas con modelos de géneros, actores, directores y películas.
- Implementar relaciones complejas: una película puede tener múltiples géneros, actores y directores.
- Desarrollar endpoints CRUD completos para cada entidad, asegurando operaciones de creación, lectura, actualización y eliminación.  
- Incluir endpoints avanzados para asignar géneros, actores y directores a películas mediante relaciones dinámicas.
- Desplegar el backend en Render y verificar su funcionamiento con datos reales (al menos dos películas creadas).
- Integrar un frontend en React que consuma la API, mostrando una interfaz cinematográfica inspirada en plataformas de streaming.
- Documentar el proyecto profesionalmente con README, `.env.example` y estructura clara para fácil clonación y ejecución.
---

## 🧠 Habilidades Clave Reforzadas

- **Desarrollo Fullstack:** Integración de frontend (React + Redux + Vite) con backend (Express + Sequelize + PostgreSQL). 
- **Diseño de APIs REST:** Construcción de endpoints CRUD y manejo de relaciones entre entidades.
- **Modelado de Bases de Datos:** Uso de Sequelize ORM para definir modelos y relaciones en PostgreSQL.
- **Seguridad y Buenas Prácticas:** Configuración de CORS (por motivos educativos y de portafolio CORS está abierto a todos los orígenes. Esta configuración permite el acceso público desde cualquier frontend durante el desarrollo y pruebas), Helmet y manejo de variables de entorno.
- **Despliegue de Proyectos:** Despliegue de proyectos backend en Render y frontend en Netlify.
- **Control de Versiones y Colaboración:** Uso de GitHub con `.gitignore`, `.env.example` y documentación bilingüe.
- **Diseño UX/UI:** Interfaz cinematográfica con React-Bootstrap y Bootswatch.
- **Presentación Profesional:** README estructurado, bilingüe, instrucciones claras y enlaces de demo.

---

## 📌 Funcionalidades

- CRUD para **Géneros, Actores, Directores y Películas.**
- **Relaciones:** Las películas pueden tener múltiples géneros, actores y directores.
- API segura con CORS y Helmet.
- Interfaz profesional inspirada en plataformas de streaming.
- Proyecto listo para despliegue con variables de entorno y documentación.

---

## 📁 Endpoints de la API

| Método | Endpoint         | Función |
|--------|------------------|---------|
| GET    | `/movies`        | Devuelve todas las películas con sus géneros, actores y directores |
| POST   | `/movies`        | Crea una nueva película |
| GET    | `/movies/:id`    | Regresa la película correspondiente al id solicitado |
| PUT    | `/movies/:id`    | Actualiza la pleícula con el id solicitado |
| DELETE | `/movies/:id`     | Elimina una película con el id solicitado |

*Nota: Endpoints de un CRUD estándar aplicables igualmente para géneros, actores y directores.*

---

## 🗂️ Modelos de la API

| Modelo      | Campos   |            
|-------------|----------|
| Géneros     | id, name | 
| Actores     | id, first_name, last_name, nationality, image, birthday | 
| Directores  | id, first_name, last_name, nationality, image, birthday | 
| Películas   | id, name, image, synopsis, release_year | 

---

## 💻🚀 Tecnologías usadas

| Frontend      | Backend       | Despliegue | Base de Datos |
|---------------|---------------|------------|---------------|
| React 18      | Node.js       | Render     | PostgreSQL |
| Redux Toolkit | Express       | Netlify    | 
| React Router  | Sequelize ORM | Postman    |
| Axios         | PostgreSQL    |
| Bootstrap     | Helmet        |
| Vite          | Morgan        |
| Bootswatch    | CORS          |

---

## 🗂️ Estructura del proyecto

```bash
📁 MOVIES-APP
|   ├── 📁 movies-app-backend
│   |   └── 📁 node_modules/
│   |   └── 📁 src/
|   │   |    └── 📁 controllers/
│   |   |    |    └── actor.controllers.js
│   |   |    |    └── director.controllers.js
│   |   |    |    └── genre.controllers.js
│   |   |    |    └── movie.controllers.js
|   │   |    └── 📁 db/
│   |   |    |    └── connect.js
|   │   |    └── 📁 env/
│   |   |    |    └── index.js
|   │   |    └── 📁 middlewares/
│   |   |    |    └── catchError.js
│   |   |    |    └── errorHandler.js
|   │   |    └── 📁 models/
│   |   |    |    └── actor.model.js
│   |   |    |    └── director.model.js
│   |   |    |    └── genre.model.js
│   |   |    |    └── movie.model.js
|   │   |    └── 📁 routes/
|   │   |    |    └── 📁 api/
│   |   |    |    |    └── actor.routes.js
│   |   |    |    |    └── director.routes.js
│   |   |    |    |    └── genre.routes.js
│   |   |    |    |    └── index.js
│   |   |    |    |    └── movie.routes.js
│   |   |    |    └── index.js
│   |   |    └── app.js
│   |   |    └── server.js
|   |   └── .env
|   |   └── .env.example
|   |   └── package-lock.json
|   |   └── package.json
|   ├── 📁 movies-app-frontend
│   |    └── 📁 node_modules/
│   |    └── 📁 src/
|   │    |    └── 📁 assets/
|   │    |    └── 📁 components/
|   │    |    |    └── 📁 Actors/
│   |    |    |    |    └── ActorCard.jsx
│   |    |    |    |    └── ActorsForm.jsx
|   │    |    |    └── 📁 Directors/
│   |    |    |    |    └── DirectorCard.jsx
│   |    |    |    |    └── DirectorForm.jsx
|   │    |    |    └── 📁 Genres/
│   |    |    |    |    └── GenreItem.jsx
│   |    |    |    |    └── GenresModal.jsx
|   │    |    |    └── 📁 Movies/
│   |    |    |    |    └── MovieCard.jsx
│   |    |    |    └── ButtonsEditDelete.jsx
│   |    |    |    └── EmptyImg.jsx
│   |    |    |    └── index.js
│   |    |    |    └── ItemsSelect.jsx
│   |    |    |    └── LoadingScreen.jsx
│   |    |    |    └── ModalForm.jsx
│   |    |    |    └── NavBar.jsx
│   |    |    |    └── Notification.jsx
│   |    |    |    └── UniversalPagination.jsx
|   │    |    └── 📁 pages/
|   │    |    |    └── Actors.jsx
|   │    |    |    └── Directors.jsx
|   │    |    |    └── Home.jsx
|   │    |    |    └── index.js
|   │    |    |    └── MovieDetail.jsx
|   │    |    |    └── MovieForm.jsx
|   │    |    └── 📁 store/
|   │    |    |    └── 📁 slices/
│   |    |    |    |    └── actors.slice.js
│   |    |    |    |    └── app.slice.js
│   |    |    |    |    └── directors.slice.js
│   |    |    |    |    └── genres.slice.js
│   |    |    |    |    └── movies.slice.js
|   │    |    |    └── index.js
|   │    |    └── 📁 utils/
|   │    |    |    └── axios.js
|   │    |    |    └── formatDate.js
|   │    |    |    └── getOneProperty.js
|   │    |    |    └── listWithCommas.js
|   │    |    |    └── searchAndFormatMovie.js
|   │    |    └── App.css
|   │    |    └── App.jsx
|   │    |    └── loading-screen.css
|   │    |    └── main.jsx
│   |    └── .env
│   |    └── .env.example
│   |    └── index.html
│   |    └── package-lock.json
│   |    └── package.json
│   |    └── vite.config.js
|   └── .gitignore
```
---

## ⚙️ Instalación y Configuración

## 🔧 Backend 

1. Clona este repositorio:

```bash
git clone https://github.com/Clic-stack/MoviesApp-FullStack-Project.git
```

2. Entra a la carpeta movies-app-backend:

```bash
cd movies-app-backend
```

3. Instala dependencias:

```bash
npm install
```

4. Configura las variables de entorno:
- Cambia el nombre del archivo de `.env.example` a `.env`
- Modifica los valores de las variables necesarias.
- Ejemplo de configuración:

```bash
PORT=4000 # -> Cambia este valor por el del servidor que estes implementando
DATABASE_URL=postgres://user:password@localhost:5432/movies
#CORS_ORIGIN=http://localhost:5173 # -> URL del frontend (deja el valor vacio si no aplica)
```

5. Corre el servidor en modo desarrollo:

```bash
npm run dev
```

*De esta forma, el backend queda disponible en: `http://localhost:4000`.*

## 🎬 Instalación Frontend

1. Cambia el directorio o ruta a movies-app-frontend:
   
```bash
cd movies-app-frontend
```

2. Instala dependencias:

```bash
npm install
```

3. Configura las variables de entorno usando el archivo `.env.example` y cambia el nombre de ese archivo por `.env`:

```bash
VITE_API_URL=http://localhost:4000/api/v1
```
*Nota: Asegurate que la URL que coloques sea la tu backend.*

4. Corre el servidor de desarrollo:

```bash
npm run dev
```

La aplicación estará disponible en: `http://localhost:5173`

---

## 🎨Author
Desarrollado por Clio Salgado como parte del módulo de Node.js & Backend en Academlo, con el objetivo de consolidar habilidades en modelado de bases de datos, diseño de APIs REST, integración de frontend y backend, despliegue en la nube y documentación profesional como parte de un proyecto fullstack.

## 🎬 GalleryMovies: Full-Stack Movie Manager & Professional Testing Suite

A professional fullstack application built with `React`, `Redux`, `Express`, `Sequelize`, and `PostgreSQL`. This project features a robust **CI/CD pipeline** and a **comprehensive testing suite**, demonstrating *scalable API design, cinematic UI, and production-ready architecture*.

<img width="1862" height="949" alt="image" src="https://github.com/user-attachments/assets/8712a68d-4a72-4644-a9fd-b6939b6efe05" />

---

## 🌐 Deployment

## 🎬🌐 FullStack Project: MoviesApp online with Netlify
🔗 https://gallerymovies.netlify.app

---

## 🚀 Backend: Server online with Render
🔗 https://moviesapp-lc0z.onrender.com

---

## 📄 MoviesCRUD: Documentation online with Postman
🔗 https://documenter.getpostman.com/view/48309056/2sB3dLUX82

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

## 🎯 Project Goals

- **Complex Modeling:** Implement many-to-many relationships using Sequelize ORM.
- **Advanced Logic:** Dynamic calculation of movie associations and cinematic data filtering.
- **Quality Assurance:** Achieve 100% core business logic coverage through automated integration tests.
- **Seamless Integration:** Connect a React + Redux frontend with a secure Express backend.

---

## 📌 Key Features
- **Cinematic UI:** Interface inspired by top-tier streaming platforms.
- **Smart Relationships:** Assign multiple Actors, Directors, and Genres to any Movie.
- **Security First:** Implementation of Helmet, CORS, and environment variable management.
- **Developer Friendly:** Reproducible test scripts and detailed bilingual documentation.

---

##🧪 Professional Testing Suite (CI/CD)
The reliability of **GalleryMovies** is backed by an automated testing workflow. Using **Jest** and **Supertest**, the project implements 19+ strategic tests covering:

- **Full CRUD Operations:** Actors, Genres, Directors, and Movies.
- **Relationship Integrity:** Validating many-to-many assignments (Actors-to-Movie, Genres-to-Movie).
- **Automated Workflow:** Every `push` or `pull request` triggers the **GitHub Actions** pipeline, ensuring code stability before deployment.

To run the tests locally:
```bash
npm test
```

---

## 💻🚀 Tech Stack

| Frontend      | Backend       | Testing & CI/CD | Database            | Security & Middleware |
|---------------|---------------|-----------------|---------------------|-----------------------|
| React 18      | Node.js       | Jest            | PostgreSQL          | Helmet                |
| Redux Toolkit | Express       | Supertest       | Render (Deployment) | CORS                  |
| React Router  | Sequelize ORM | GitHub Actions  | Netlify (Frontend)  |
| Vite          | Morgan        |                 | NeonDB              |
| Bootstrap     |                                 | Postman             |
| Bootswatch    | 

---

## 📁 API Endpoints

| Method | Endpoint         | Function |
|--------|------------------|----------|
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

## 🧪 Test Coverage

<p align="center">
<img width="263" height="93" alt="image" src="https://github.com/user-attachments/assets/1d5c6173-ce0a-4a8f-afab-1dcf232a7c2b" />
</p>

The following endpoints are tested:
## Actors
- `GET /actors` – Retrieve all actors
- `POST /actors` – Create a new actor
- `DELETE /actors/:id` – Delete an actor by ID
- `PUT /actors/:id` – Update an actor by ID
## Genres
- `GET /genres` – Retrieve all genres
- `POST /genres` – Create a new genre
- `DELETE /genres/:id` – Delete a genre by ID
- `PUT /genres/:id` – Update a genre by ID
## Directors
- `GET /directors` – Retrieve all directors
- `POST /directors` – Create a new director
- `DELETE /directors/:id` – Delete a director by ID
- `PUT /directors/:id` – Update a director by ID
## Movies
- `GET /movies` – Retrieve all movies
- `POST /movies` – Create a new movie
- `DELETE /movies/:id` – Delete a movie by ID
- `PUT /movies/:id` – Update a movie by ID
- `POST /movies/:id/actors` – Assign actors to a movie
- `POST /movies/:id/directors` – Assign directors to a movie
- `POST /movies/:id/genres` – Assign genres to a movie

---

## 📄 Scripts (package.json)
```bash
"scripts": {
  "dev": "node --watch --env-file=.env src/server.js",
  "start": "node src/server.js",
  "test": "node --env-file=.env ./node_modules/jest/bin/jest.js"
}
```

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

## 🗂️ Project Structure

```bash
📁 MOVIES-APP
|   ├── 📁 .github
│   |   └── 📁 workflows/
│   |   |   └── main.yml
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
│   |   └── 📁 tests/
│   |   |    └── actors.test.js
│   |   |    └── directors.test.js
│   |   |    └── genres.test.js
│   |   |    └── movies.test.js
│   |   |    └── setup.js
|   |   └── .env
|   |   └── .env.example
|   |   └── jest.config.js
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
|   └── README.md
```

---

## ⚙️ Setup & Installation

## 🔧 Backend Setup & Testing

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

💡 Quick Setup Note: This project includes enviroment variables and configures instructions into .env.example file (remember all enviroment values is with your credentials) for development and testing environments. This facilitates rapid deployment and ensures the test suite runs out-of-the-box without extra security overhead.

5. Run Tests:

```bash
npm test
```

6. Run Individual Test:

```bash
npm test name_file.test.js
```

7. Run de server in development mode:

```bash
npm run dev
```

## 🎬 Frontend Setup & Installation

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

---

## 🎨Author
Developed by Clio Salgado. Focused on building reliable, data-driven fullstack solutions with professional testing standards.

🔽 **Versión en Español** 🔽

## 🎬 GalleryMovies: Gestor de Películas Full-Stack y Suite de Pruebas Profesional

Aplicación fullstack profesional construída con `React`, `Redux`, `Express`, `Sequelize` y `PostgreSQL`. Este proyecto implementa un **pipeline CI/CD** robusto y una **suite de pruebas integral y completa**, mostrando una *interfaz cinemática,  diseño de APIs escalables y arquitectura lista para producción*.

<img width="1862" height="949" alt="image" src="https://github.com/user-attachments/assets/8712a68d-4a72-4644-a9fd-b6939b6efe05" />

---

## 🌐 Deployment

## 🎬🌐 Proyecto FullStack: Frontend en línea con Netlify
🔗 https://gallerymovies.netlify.app

---

## 🚀 Backend: Servidor en línea con Render
🔗 https://moviesapp-lc0z.onrender.com

---

## 📄 MoviesCRUD: Documentación en línea con Postman
🔗 https://documenter.getpostman.com/view/48309056/2sB3dLUX82

---

### 📊 Arquitectura de Base de Datos (Base de Datos Relacional Muchos a Muchos)

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

## 🎯 Objetivos de Proyecto

- **Modelado complejo de datos:** Implementación de bases de datos relacionales muchos a muchos usando el ORM de Sequelize.
- **Lógica de negocio avanzada:** Cálculo dinámico de asociaciones de películas y filtrado de datos cinematográficos.
- **Aseguramiento de la Calidad:** Logró total de una cobertura del 100% de la lógica de negocio principal mediante pruebas de integración automatizadas.
- **Integración fluida y sin fisuras:** Conexión de frontend en React + Redux con backend seguro en Express.

---

## 📌 Funcionalidades Clave
- **Interfaz Cinemática:** Interfaz inspirada en las principales plataformas de streaming.
- **Relaciones Inteligentes:** Asignación de múltiples Actores, Directores y Géneros a cualquier Película.
- **Seguridad ante todo:** Implementación de Helmet, CORS y gestión de variables de entorno.
- **Optimizado para Desarrolladores:** Scripts de prueba reproducibles y documentación bilingüe detallada.

---

##🧪 Suite de Pruebas Profesional (CI/CD)
La confiabilidad de **GalleryMovies** está respaldada por un flujo de trabajo de pruebas automatizadas. Utilizando **Jest** y **Supertest**, el proyecto implementa más de 19 pruebas estratégicas que cubren:

- **Operaciones CRUD Completas:** Actores, Géneros, Directores y Películas.
- **Integridad de Relaciones:** Validación de asignaciones muchos-a-muchos (Actores a Película, Géneros a Película).
- **Flujo de Trabajo Automatizado:** Cada `push` o `pull request` activa el pipeline de GitHub Actions, garantizando la estabilidad del código antes del despliegue.

Para correr los test localmente copia y pega el siguiente comando:
```bash
npm test
```

---

## 💻🚀 Tech Stack

| Frontend      | Backend       | Testing e Integración Continua (CI/CD) | Base de Datos       | Seguridad y Middlewares |
|---------------|---------------|----------------------------------------|---------------------|-------------------------|
| React 18      | Node.js       | Jest                                   | PostgreSQL          | Helmet                  |
| Redux Toolkit | Express       | Supertest                              | Render (Deployment) | CORS                    |
| React Router  | Sequelize ORM | GitHub Actions                         | Netlify (Frontend)  |
| Vite          | Morgan        |                                        | NeonDB              |
| Bootstrap     |               |                                        | Postman             |
| Bootswatch    |               |

---

## 📁 Endpoints de la API

| Método | Endpoint         | Función |
|--------|------------------|---------|
| GET    | `/movies`        | Devuelve todas las películas con todos los géneros, actores y directores |
| POST   | `/movies`        | Crea una nueva película |
| GET    | `/movies/:id`    | Devuelve una película por id |
| PUT    | `/movies/:id`    | Actualiza una película por id |
| DELETE | `/movies/:id`    | Elimina una película por id |

*Nota: Los endpoints CRUD estándar para todos los modelos son igualmente aplicables a géneros (genres), actores (actors) y directores (directors).*

---

## 🗂️ Modelos de la API

| Modelo      | Campos   |            
|-------------|----------|
| Genres      | id, name | 
| Actors      | id, first_name, last_name, nationality, image, birthday | 
| Directors   | id, first_name, last_name, nationality, image, birthday | 
| Movies      | id, name, image, synopsis, release_year | 

---

## 🧪 Cobertura de tests

<p align="center">
<img width="263" height="93" alt="image" src="https://github.com/user-attachments/assets/1d5c6173-ce0a-4a8f-afab-1dcf232a7c2b" />
</p>

Se testearon los siguientes endpoints:
## Actores
- `GET /actors` – Obtener todos los actores
- `POST /actors` – Crear un nuevo actor
- `DELETE /actors/:id` – Eliminar un actor por ID
- `PUT /actors/:id` – Actualizar un actor por ID
## Géneros
- `GET /genres` – Obtener todos los géneros
- `POST /genres` – Crear un nuevo género
- `DELETE /genres/:id` – Eliminar un género por ID
- `PUT /genres/:id` – Actualizar un género por ID
## Directores
- `GET /directors` – Obtener todos los directores
- `POST /directors` – Crear un nuevo director
- `DELETE /directors/:id` – Eliminar un director por ID
- `PUT /directors/:id` – Actualizar un director por ID
## Películas
- `GET /movies` – Obtener todas las películas
- `POST /movies` – Crear una nueva película
- `DELETE /movies/:id` – Eliminar una película por ID
- `PUT /movies/:id` – Actualizar una película por ID
- `POST /movies/:id/actors` – Asiganr actores a una película
- `POST /movies/:id/directors` – Asignar directores a una película
- `POST /movies/:id/genres` – Asignar géneros a una película
  
---

## 📄 Scripts (package.json)
```bash
"scripts": {
  "dev": "node --watch --env-file=.env src/server.js",
  "start": "node src/server.js",
  "test": "node --env-file=.env ./node_modules/jest/bin/jest.js"
}
```

---

## 🧠 Habilidades Clave Reforzadas

- **Desarrollo Full-Stack:** Integración de frontend (React + Redux + Vite) con un backend robusto (Express + Sequelize + PostgreSQL).
- **Diseño de APIs y Prácticas RESTful:** Construcción de endpoints CRUD y gestión avanzada de relaciones entre entidades.  
- **Modelado de Bases de Datos:** Uso de Sequelize ORM para definir modelos relacionales y asociaciones complejas en PostgreSQL.
- **Seguridad y Mejores Prácticas:** Configuración de Helmet, gestión de variables de entorno y control de CORS (configurado para permitir acceso público durante la fase de desarrollo y pruebas en el portafolio).
- **Habilidades de Despliegue (Deployment):** Despliegue del backend en Render y del frontend en plataformas como Vercel o Netlify.
- **Control de Versiones y Colaboración:** Uso profesional de GitHub con archivos `.gitignore`, `.env.example`, y documentación técnica bilingüe.
- **Diseño UI/UX:** Creación de una interfaz cinematográfica fluida utilizando React-Bootstrap y Bootswatch.
- **Presentación Profesional:** Estructuración de un README detallado, contenido bilingüe, instrucciones claras y enlaces directos a la demo.

---

## 🗂️ Estructura del Proyecto

```bash
📁 MOVIES-APP
|   ├── 📁 .github
│   |   └── 📁 workflows/
│   |   |   └── main.yml
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
│   |   └── 📁 tests/
│   |   |    └── actors.test.js
│   |   |    └── directors.test.js
│   |   |    └── genres.test.js
│   |   |    └── movies.test.js
│   |   |    └── setup.js
|   |   └── .env
|   |   └── .env.example
|   |   └── jest.config.js
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
|   └── README.md
```

---

## ⚙️ Configuración e Instalación
## 🔧 Configuración del backend y testing

1. Clona este repositorio:

```bash
git clone https://github.com/Clic-stack/MoviesApp-FullStack-Project.git
```

2. Cambia a la carpeta movies-app-backend:

```bash
cd movies-app-backend
```

3. Instala dependencias:

```bash
npm install
```

4. Configura variables de entorno:
- Cambia el nombre del archivo `.env.example` a `.env`
- Modifica los valores de las variables.
- Ejemplo de configuración:

```bash
PORT=4000 # -> Change for your server
DATABASE_URL=postgres://user:password@localhost:5432/movies
CORS_ORIGIN=http://localhost:5173 # -> Frontend URL (leave blank if not applicable)
```

💡 Nota para Configuración Rápida: Este proyecto incluye variables de entorno e instrucciones de configuración en el archivo `.env.example` (recuerda que todos los valores deben corresponder a tus propias credenciales) para entornos de desarrollo y pruebas. Esto facilita un despliegue rápido y garantiza que la suite de pruebas funcione de inmediato (out-of-the-box) sin configuraciones de seguridad adicionales.

5. Corre los tests:

```bash
npm test
```

6. Corre el test individualmente:

```bash
npm test name_file.test.js
```

7. Corre el servidor:

```bash
npm run dev
```

## 🎬 Configuración e Instalación del Frontend

1. Cambia la terminal a la ruta movies-app-frontend:
   
```bash
cd movies-app-frontend
```

2. Instala dependencias:

```bash
npm install
```

3. Configura las variables de entorno usando el archivo `.env.example` y cambia el nombre del archivo a `.env`:

```bash
VITE_API_URL=http://localhost:4000/api/v1
```
*Nota: Asegúrate de colocar correctamente la URL de tu backend*

4. Corre el servidor:

```bash
npm run dev
```

---

## 🎨Author
Desarrollado por Clio Salgado. Enfocado en la construcción de soluciones full-stack confiables y basadas en datos, con estándares profesionales de testing.

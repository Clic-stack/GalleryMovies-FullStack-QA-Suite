## <p align="center">🎬 GalleryMovies: Full-Stack QA & Management Suite </p> <br/>  <p align="center">[![SecOps: CodeQL Analysis](https://img.shields.io/badge/Analysis-CodeQL--SecOps-F5F5F5?style=for-the-badge&logo=github&logoColor=black&labelColor=A9A9A9)](https://github.com/Clic-stack/MoviesApp-FullStack-Project/actions)[![SecOps: DAST Dynamic Scan](https://img.shields.io/badge/Scan-DAST%20Dynamic--SecOps-003366?style=for-the-badge&logo=github&logoColor=FFFFFF&labelColor=000033)](https://github.com/Clic-stack/MoviesApp-FullStack-Project/actions)[![API Contract: Postman Validation](https://img.shields.io/badge/Validation-API%20Contract--Postman-50C878?style=for-the-badge&logo=postman&logoColor=E5E5E5&labelColor=006400)](https://github.com/Clic-stack/MoviesApp-FullStack-Project/actions)[![Continuous Integration (CI/CD) Tests](https://img.shields.io/badge/Tests-CI--Continuous%20Integration-FFFFFF?style=for-the-badge&logo=jest&logoColor=003366&labelColor=FFFDD0)](https://github.com/Clic-stack/MoviesApp-FullStack-Project/actions)</p>
> [!TIP] <p align="justify">
>  Quick Setup Note: This project includes enviroment variables and configures instructions into .env.example file for development and testing environments, (remember all enviroment values is with your credentials). This facilitates rapid deployment and ensures the test suite runs out-of-the-box without extra security overhead.
[![Node.js CI - Movies App](https://github.com/Clic-stack/MoviesApp-FullStack-Project/actions/workflows/main.yml/badge.svg?branch=main&event=push)](https://github.com/Clic-stack/MoviesApp-FullStack-Project/actions/workflows/main.yml)[![SecOps: CodeQL Analysis](https://github.com/Clic-stack/GalleryMovies-FullStack-QA-Suite/actions/workflows/codeql.yml/badge.svg?branch=main&event=push)](https://github.com/Clic-stack/GalleryMovies-FullStack-QA-Suite/actions/workflows/codeql.yml)[![SecOps: DAST Dynamic Scan](https://github.com/Clic-stack/GalleryMovies-FullStack-QA-Suite/actions/workflows/dast.yml/badge.svg?branch=main&event=push)](https://github.com/Clic-stack/GalleryMovies-FullStack-QA-Suite/actions/workflows/dast.yml)[![API Contract: Postman Validation](https://github.com/Clic-stack/GalleryMovies-FullStack-QA-Suite/actions/workflows/postman-validation.yml/badge.svg?branch=main&event=push)](https://github.com/Clic-stack/GalleryMovies-FullStack-QA-Suite/actions/workflows/postman-validation.yml)

This project is the result of a strategic unification. What began as **Movies Testing**—a focused environment for mastering backend integration tests—has evolved into **GalleryMovies**, a comprehensive Full-Stack QA Suite. 

By merging the rigorous testing logic with a cinematic frontend, I’ve created a production-ready ecosystem where code quality, security, and user experience coexist. This transition represents the shift from "just making it work" to **"making it secure, scalable, and verifiable."**

<img width="1862" height="949" alt="image" src="https://github.com/user-attachments/assets/8712a68d-4a72-4644-a9fd-b6939b6efe05" />

---
</p>

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

## 🟢 Technical Quality Assurance

<p align="justify">**What does the "passing" badge at the beginning of this project mean?**
GalleryMovies is backed by four specialized automated pipelines that guarantee professional standards. This means that every time a code change is made, an automated system executes 19+ security and functional tests:

1.  **Continuous Integration (CI):** 19+ automated tests using **Jest** and **Supertest** validate every push to ensure the core logic remains unbroken.
2.  **API Contract Validation:** Automated **Postman/Newman** runs verify that the API responses match the expected structure, preventing breaking changes.
3.  **Static Security (CodeQL):** Deep analysis of the source code to detect potential vulnerabilities before they are even deployed.
4.  **Dynamic Security (DAST):** Active scanning of the running application to identify real-world security threats.

- **Green Badge (Passing):** The code is stable, secure, and production-ready.
- **Red Badge (Failing):** Indicates an error was detected before it could affect the end user.

This ensures that GalleryMovies consistently maintains professional quality standards.

---
</p>

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

## 🧪 Professional Testing Suite 
The reliability of **GalleryMovies** is backed by an automated testing workflow. Using **Jest** and **Supertest**, the project implements 19+ strategic tests covering:

- **Full CRUD Operations:** Actors, Genres, Directors, and Movies.
- **Relationship Integrity:** Validating many-to-many assignments (Actors-to-Movie, Genres-to-Movie).
- **Automated Workflow:** Every `push` or `pull request` triggers the **GitHub Actions** pipeline, ensuring code stability before deployment.

To run the tests locally:
```bash
cd movies-app-backend
npm test
```

---

## 💻🚀 Tech Stack
</br>
<div align=center> 
    
| Frontend      | Backend       | QA & DevOps     | Database            | Security & Middleware |
|---------------|---------------|-----------------|---------------------|-----------------------|
| React 18      | Node.js       | Jest            | PostgreSQL          | Helmet                |
| Redux Toolkit | Express       | Supertest       | Render (Deployment) | CORS                  |
| React Router  | Sequelize ORM | GitHub Actions  | Netlify (Frontend)  |
| Vite          | Morgan        | Postman         | NeonDB              |
| Bootstrap     |               | Newman          |              
| Bootswatch    | 

</br>
</div>

## 📁 API Endpoints
</br>
<div align=center> 

| Method | Endpoint         | Function |
|--------|------------------|----------|
| GET    | `/movies`        | Returns all movies with all genres, actors, and directors |
| POST   | `/movies`        | Create a new movie |
| GET    | `/movies/:id`    | Return a movie by id searched |
| PUT    | `/movies/:id`    | Update a movie by id |
| DELETE | `/movies/:id`     | Remove a movie by id |

*Note: Standard CRUD enpoints for all models equally applicable for genres, actors and directors.*

</br>
</div>

## 🗂️ API Models
</br>
<div align=center> 

| Model       | Fields   |            
|-------------|----------|
| Genres      | id, name | 
| Actors      | id, first_name, last_name, nationality, image, birthday | 
| Directors   | id, first_name, last_name, nationality, image, birthday | 
| Movies      | id, name, image, synopsis, release_year | 

</br>
</div>

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
│   |   |   └── codeql.yml
│   |   |   └── dast.yml
│   |   |   └── main.yml
│   |   |   └── postman-validation.yml
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
|   |   └── movies-app.json
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

## 🚀 Future Roadmap

* E2E Testing: Implementation of Playwright for browser-level automation.

---

## 🎨Author
Developed by Clio Salgado. A data-driven fullstack developer focused on reliability, security, and automated excellence.
</br>
</br>

🔽 **Versión en Español** 🔽
</br>
</br>

## <p align="center">🎬 GalleryMovies: Suite de Gestión y Calidad (QA) Full-Stack</p> <br/> <p align="center">[![SecOps: Análisis CodeQL](https://img.shields.io/badge/Análisis-CodeQL--SecOps-F5F5F5?style=for-the-badge&logo=github&logoColor=black&labelColor=A9A9A9)](https://github.com/Clic-stack/MoviesApp-FullStack-Project/actions)[![SecOps: Escaneo Dinámico DAST](https://img.shields.io/badge/Escaneo-DAST%20Dinámico--SecOps-003366?style=for-the-badge&logo=github&logoColor=FFFFFF&labelColor=000033)](https://github.com/Clic-stack/MoviesApp-FullStack-Project/actions)[![Contrato API: Validación Postman](https://img.shields.io/badge/Validación-Contrato%20API--Postman-50C878?style=for-the-badge&logo=postman&logoColor=E5E5E5&labelColor=006400)](https://github.com/Clic-stack/MoviesApp-FullStack-Project/actions)[![Pruebas de Integración Continua (CI/CD)](https://img.shields.io/badge/Pruebas-CI--Integración%20Continua-FFFFFF?style=for-the-badge&logo=jest&logoColor=003366&labelColor=FFFDD0)](https://github.com/Clic-stack/MoviesApp-FullStack-Project/actions)</p>

> [!TIP] <p align="justify">
>  Nota para Configuración Rápida: Este proyecto incluye variables de entorno e instrucciones de configuración en el archivo `.env.example` para entornos de desarrollo y pruebas, (recuerda que todos los valores deben corresponder a tus propias credenciales). Esto facilita un despliegue rápido y garantiza que la suite de pruebas funcione de inmediato (out-of-the-box) sin configuraciones de seguridad adicionales.
[![Node.js CI - Movies App](https://github.com/Clic-stack/MoviesApp-FullStack-Project/actions/workflows/main.yml/badge.svg?branch=main&event=push)](https://github.com/Clic-stack/MoviesApp-FullStack-Project/actions/workflows/main.yml)[![SecOps: CodeQL Analysis](https://github.com/Clic-stack/GalleryMovies-FullStack-QA-Suite/actions/workflows/codeql.yml/badge.svg?branch=main&event=push)](https://github.com/Clic-stack/GalleryMovies-FullStack-QA-Suite/actions/workflows/codeql.yml)[![SecOps: DAST Dynamic Scan](https://github.com/Clic-stack/GalleryMovies-FullStack-QA-Suite/actions/workflows/dast.yml/badge.svg?branch=main&event=push)](https://github.com/Clic-stack/GalleryMovies-FullStack-QA-Suite/actions/workflows/dast.yml)[![API Contract: Postman Validation](https://github.com/Clic-stack/GalleryMovies-FullStack-QA-Suite/actions/workflows/postman-validation.yml/badge.svg?branch=main&event=push)](https://github.com/Clic-stack/GalleryMovies-FullStack-QA-Suite/actions/workflows/postman-validation.yml)

Este proyecto es el resultado de una unificación estratégica. Lo que comenzó como **Movies Testing** un entorno enfocado en el dominio de pruebas de integración para el backend ha evolucionado hasta convertirse en **GalleryMovies**, una suite integral de QA Full-Stack.

Al fusionar una lógica de pruebas rigurosa con una interfaz cinematográfica, he creado un ecosistema listo para producción donde la calidad del código, la seguridad y la experiencia del usuario coexisten. Esta transición representa el cambio de "simplemente hacer que funcione" a **"hacer que sea seguro, escalable y verificable".**

<img width="1862" height="949" alt="image" src="https://github.com/user-attachments/assets/8712a68d-4a72-4644-a9fd-b6939b6efe05" />

---
</p>

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

## 🟢 Garantía de Calidad Técnica
**¿Qué significa el distintivo "passing" al inicio de este proyecto?**
<p align="justify">GalleryMovies está respaldado por cuatro flujos de trabajo (pipelines) automatizados y especializados que garantizan estándares profesionales. Esto significa que cada vez que se realiza un cambio en el código, un sistema automatizado ejecuta más de 19 pruebas de seguridad y funcionales:

1. **Integración Continua (CI):** Más de 19 pruebas automatizadas utilizando **Jest** y **Supertest** validan cada actualización para asegurar que la lógica central permanezca intacta.
2. **Validación de Contrato API:** Ejecuciones automatizadas con **Postman/Newman** verifican que las respuestas de la API coincidan con la estructura esperada, evitando cambios que rompan la compatibilidad.
3. **Seguridad Estática (CodeQL):** Análisis profundo del código fuente para detectar vulnerabilidades potenciales incluso antes de que sean desplegadas.
4. **Seguridad Dinámica (DAST):** Escaneo activo de la aplicación en ejecución para identificar amenazas de seguridad en el mundo real.

* **Badge Verde (Passing):** El código es estable, seguro y está listo para producción.
* **Badge Rojo (Failing):** Indica que se detectó un error antes de que pudiera afectar al usuario final.

Esto garantiza que GalleryMovies mantenga consistentemente estándares de calidad profesional.

---
</p>

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

## 🧪 Suite de Pruebas Profesional
La confiabilidad de **GalleryMovies** está respaldada por un flujo de trabajo de pruebas automatizadas. Utilizando **Jest** y **Supertest**, el proyecto implementa más de 19 pruebas estratégicas que cubren:

- **Operaciones CRUD Completas:** Actores, Géneros, Directores y Películas.
- **Integridad de Relaciones:** Validación de asignaciones muchos-a-muchos (Actores a Película, Géneros a Película).
- **Flujo de Trabajo Automatizado:** Cada `push` o `pull request` activa el pipeline de GitHub Actions, garantizando la estabilidad del código antes del despliegue.

Para correr los test localmente copia y pega el siguiente comando:
```bash
cd movies-app-backend
npm test
```
---

## 💻🚀 Tech Stack
</br>
<div align=center> 

| Frontend      | Backend       | QA & DevOps     | Database            | Security & Middleware |
|---------------|---------------|-----------------|---------------------|-----------------------|
| React 18      | Node.js       | Jest            | PostgreSQL          | Helmet                |
| Redux Toolkit | Express       | Supertest       | Render (Deployment) | CORS                  |
| React Router  | Sequelize ORM | GitHub Actions  | Netlify (Frontend)  |
| Vite          | Morgan        | Postman         | NeonDB              |
| Bootstrap     |               | Newman          |              
| Bootswatch    | 

</br>
</div> 
    
## 📁 Endpoints de la API
</br>
<div align=center> 
    
| Método | Endpoint         | Función |
|--------|------------------|---------|
| GET    | `/movies`        | Devuelve todas las películas con todos los géneros, actores y directores |
| POST   | `/movies`        | Crea una nueva película |
| GET    | `/movies/:id`    | Devuelve una película por id |
| PUT    | `/movies/:id`    | Actualiza una película por id |
| DELETE | `/movies/:id`    | Elimina una película por id |

*Nota: Los endpoints CRUD estándar para todos los modelos son igualmente aplicables a géneros (genres), actores (actors) y directores (directors).*

</br>
</div> 

## 🗂️ Modelos de la API
</br>
<div align=center> 
    
| Modelo      | Campos   |            
|-------------|----------|
| Genres      | id, name | 
| Actors      | id, first_name, last_name, nationality, image, birthday | 
| Directors   | id, first_name, last_name, nationality, image, birthday | 
| Movies      | id, name, image, synopsis, release_year | 

</br>
</div> 

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
│   |   |   └── codeql.yml
│   |   |   └── dast.yml
│   |   |   └── main.yml
│   |   |   └── postman-validation.yml
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
|   |   └── movies-app.json
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

## 🚀 Hoja de Ruta

* **Pruebas E2E:** Implementación de **Playwright** para la automatización a nivel de navegador.


## 🎨Autora
Desarrollado por Clio Salgado. Desarrolladora Fullstack orientada a datos, enfocada en la confiabilidad, la seguridad y la excelencia a través de la automatización.

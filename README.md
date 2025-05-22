# FurEver friends

## Table of Contents

-   [General Information](#general-information)
-   [Built with](#built-with)
-   [Architecture Overview](#architecture-overview)
-   [Getting Started](#getting-started)
-   [Running the Application](#running-the-application)
-   [API Documentation](#API-documentation)
-   [Contact](#contact)
-   [License](#license)

## 🐾 General Information

_FurEver Friends_ is a web and mobile platform designed to bring pet owners together in one digital space. The app helps users find pet services nearby, connect with other animal lovers, participate in local events, adopt pets and even match with pet sitters. Whether you're a new pet parent or a long-time animal enthusiast, FurEver Friends offers a supportive community and practical tools to make pet ownership easier and more joyful.

## 🛠️ Built with

-   ⚛️ [React.js](https://reactjs.org/) --> frontend
-   🌀 [Tailwind](https://tailwindcss.com/) --> styling
-   🧱 [ASP.NET Core Web API](https://learn.microsoft.com/en-us/aspnet/core/web-api/?view=aspnetcore-9.0) --> backend
-   🗄️ MySQL --> database
-   🔐 JWT --> authentication
-   🗺️ [Leaflet](https://leafletjs.com/) --> maps
-   🌍 [Nominatim](https://nominatim.org/) --> Geolocation Search

## 🌐 Architecture Overview

-   Frontend runs on http://localhost:5173
-   Backend runs on https://localhost:7187 (HTTPS) or http://localhost:5178 (HTTP)
-   Database runs on port 3306:
    -   Host: 127.0.0.1
    -   Port: 3306
    -   Name: furever-friends
    -   User: furever-friends
    -   Password: Qwerty1234!
-   The frontend communicates with the backend through RESTful API endpoints.
-   JWT tokens are used for secure user authentication across both ends.

## 🚀 Getting Started

### Prerequisites

-   NET 8 or 9
-   Node.js & npm
-   MySQL (running on 127.0.0.1:3306):
    -   You can use MAMP if configured to run MySQL on port 3306, or any other MySQL server.

### 🐘 Database Setup (MySQL)

1. Start your MySQL server.
2. Create the database and user.
3. Confirm the connection string in backend/appsettings.json.

### 📦 Clone the Repository

    ```sh
    git clone git@github.com:HeidiDragomir/furever-friends.git
    ```

### 🖥️ Running the Application

#### ⚙️ Backend

    ```sh
    cd backend
    dotnet ef database update
    dotnet run
    ```

#### 🎨 Frontend

```sh
cd frontend
npm install
npm run dev
```

The application should now be available at [http://localhost:5173](http://localhost:5173) in your browser.

### 📬 API Documentation

🔗 [Postman documentation](https://documenter.getpostman.com/view/22983418/2sB2qaiMas)

### 👩‍💻 Contact

Email: [@HeidiDragomir](https://github.com/HeidiDragomir)

LinkedIn: [Marinela-Adelheid Dragomir](https://www.linkedin.com/in/heidi-dragomir/)

### 📄 License

Distributed under the MIT License. See [LICENSE](https://choosealicense.com/licenses/mit/) for more information.

```

```

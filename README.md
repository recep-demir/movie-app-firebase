# Movie App
[Live Demo](https://movie-app-reacct.netlify.app/)
## Screenshots

![App Screenshot](./public/movie.gif)

## Description
The Movie App is a React-based web application that allows users to explore and discover movies. Users can search for movies, view details, and manage authentication using Firebase.

## Features
- User authentication with Firebase (Email/Password & Google Sign-In)
- Browse popular movies using The Movie Database (TMDB) API
- Search functionality to find specific movies
- Responsive design with Tailwind CSS
- Interactive movie details page

## Technologies Used
- React.js
- Firebase Authentication
- The Movie Database (TMDB) API
- Tailwind CSS
- React Router

## Project Skeleton

```
Movie App (folder)
|
├── public
│     └── index.html
├── src
│    ├── auth
│    │     └── firebase.js
│    ├── components
│    │     ├── MovieCard.js
│    │     └── Navbar.js
│    ├── context
│    │     └── AuthContext.js
│    ├── pages
│    │     ├── Login.js
│    │     ├── Register.js
│    │     ├── Main.js
│    │     └── MovieDetail.js
│    ├── router
│    │     └── Router.js
│    ├── App.js
│    ├── App.css
│    ├── index.js
│    └── index.css
├── package.json
├── .env
└── yarn.lock
```

## Installation & Setup

1. Clone the repository:
   ```bash
   git clone https://github.com/recep-demir/movie-app-firebase.git
   cd movie-app
   ```

2. Install dependencies:
   ```bash
   npm install
   ```

3. Create a `.env` file in the root directory and add your Firebase and TMDB API keys:
   ```env
   REACT_APP_FIREBASE_API_KEY=your_firebase_api_key
   REACT_APP_FIREBASE_AUTH_DOMAIN=your_firebase_auth_domain
   REACT_APP_TMDB_API_KEY=your_tmdb_api_key
   ```

4. Start the development server:
   ```bash
   npm start
   ```

## Usage
- Register or log in using email/password or Google authentication.
- Browse popular movies on the homepage.
- Search for movies using the search bar.
- Click on a movie to view details.
- Logout when finished.


## License
This project is licensed under the MIT License.

---

**Happy Coding!**


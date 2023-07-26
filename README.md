
**Project Name: News App**

This project is a simple news application that allows users to browse the latest news articles, view article details, and sign up/log in to their accounts.

**Installation and Setup**
1. Clone the repository to your local machine.
2. Navigate to the project directory in your terminal.
3. Run `npm install` to install the required dependencies.

**Running the App**
1. After installing the dependencies, run `npm start` in the terminal to start the development server.
2. The app should open automatically in your default web browser. If it doesn't, you can access it at `http://localhost:3000`.

**Project Structure**
- `src/components`: Contains all the React components used in the app.
- `src/context`: Contains the `NewsContext` and `NewsContextProvider` used for managing the app's state related to news data and user authentication.
- `src/firebase`: Contains the Firebase configuration for authentication.
- `src/utils`: Contains utility functions for error mapping.
- `src/App.jsx`: The main entry point of the application, where routing and the main layout are defined.
- `src/Routes/AllRoutes.jsx`: Defines all the routes used in the app.
- `src/components/Home.jsx`: Represents the home page of the app that displays the news articles.
- `src/components/DetailsPage.jsx`: Represents the page displaying details of a specific news article.
- `src/components/NewsSection.jsx`: Represents the section on the home page that displays news articles in a grid.
- `src/components/NewsGrid.jsx`: Represents the grid of news articles on the home page.
- `src/components/NavBar.jsx`: Represents the navigation bar at the top of the app, allowing users to log in/sign up and log out if authenticated.
- `src/components/Login.jsx`: Represents the login form used for user authentication.
- `src/components/Signup.jsx`: Represents the signup form for new users to create an account.

**Features**
1. Browse Latest News: Users can view the latest news articles on the home page.
2. View Article Details: Clicking on a news article in the grid will redirect users to a page displaying detailed information about that article.
3. User Authentication: Users can sign up and log in to their accounts using the login and signup forms.
4. Logout: Authenticated users can log out from their accounts by clicking the logout button in the navigation bar.

**Dependencies**
- react-router-dom: Used for handling client-side routing.
- react-toastify: Used for displaying notifications to users.
- axios: Used for making HTTP requests to the News API.
- firebase: Used for user authentication.

**Note**
- The project requires an active internet connection to fetch the latest news from the News API.

**API Key**
- The app uses the News API to fetch news data. The API key is hardcoded in the `NewsContext.jsx` file. In a real production app, it's recommended to store sensitive data like API keys in environment variables and use a server to fetch data to keep the API key secure.

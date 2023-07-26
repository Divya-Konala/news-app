import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import "./App.css";
import { NavBar } from "./components/NavBar";
import AllRoutes from "./Routes/AllRoutes";
import LoginSignup from "./components/LoginSignup"
import { useNews } from "./context/NewsContext";

function App() {
  const { openModal} = useNews();
  return (
    <>
      <ToastContainer />
      <header>
        <NavBar/>
      </header>
      {openModal ? (
          <LoginSignup/>
        ) : (
          ""
        )}
      <main>
        <AllRoutes />
      </main>
    </>
  );
}

export default App;

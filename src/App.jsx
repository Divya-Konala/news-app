import { useState } from "react";
import {ToastContainer} from "react-toastify"
import 'react-toastify/dist/ReactToastify.css';
import "./App.css";
import LoginSignup from "./components/LoginSignup";
import { NavBar } from "./components/NavBar";

function App() {
  const [openModal, setOpenModal] = useState(false);
  const handleCloseOutside = (event) => {
    if (event.target === event.currentTarget) {
      setOpenModal(false);
    }
  };
  const handleClose=()=>{
    setOpenModal(false);
  }
  const handleOpen=()=>{
    setOpenModal(true);
  }
  return (
    <>
    <ToastContainer/>
      <header>
        <NavBar handleOpen={handleOpen} />
      </header>
      <main>
        {openModal ? (
          <LoginSignup handleCloseOutside={handleCloseOutside} handleClose={handleClose}/>
        ) : (
          ""
        )}
      </main>
    </>
  );
}

export default App;

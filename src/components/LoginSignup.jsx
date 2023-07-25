import { useState } from "react";
import GoogleButton from "react-google-button";
import { signInWithPopup, GoogleAuthProvider, signOut } from "firebase/auth";
import { auth } from "../firebase/FirebaseConfig";
import { toast } from "react-toastify";
import { ErrorMapping } from "../utils/ErrorMapping";
import Login from "./Login";
import SignUp from "./Signup";

const LoginSignup = ({ handleCloseOutside, handleClose }) => {
  const [isLogin, setIsLogin] = useState(true);
  const provider = new GoogleAuthProvider();

  const signInWithGoogle = () => {
    signInWithPopup(auth, provider)
      .then((result) => {
        toast.success("google login successful!", {
          position: "top-right",
          theme: "dark",
        });
        handleClose();
      })
      .catch((error) => {
        toast.error(ErrorMapping[error.code] || error.message, {
          position: "top-right",
          theme: "dark",
        });
      });
  };
  return (
    <div className="modal-overlay" onClick={handleCloseOutside}>
      <div id="myModal" className="modal">
        <div className="modal-content">
          <div className="tabs">
            <button
              className="tablinks"
              onClick={() => setIsLogin(true)}
              style={{
                backgroundColor: isLogin ? "#000000" : "#999999",
                color: isLogin ? "#ffffff" : "#000000",
              }}
            >
              Login
            </button>
            <button
              className="tablinks"
              onClick={() => setIsLogin(false)}
              style={{
                backgroundColor: isLogin ? "#999999" : "#000000",
                color: isLogin ? "#000000" : "#ffffff",
              }}
            >
              Signup
            </button>
          </div>
          {isLogin ? (
            <div id="loginTab" className="tabcontent">
              <Login handleClose={handleClose} />
            </div>
          ) : (
            <div id="signupTab" className="tabcontent">
              <SignUp handleClose={handleClose} />
            </div>
          )}
          <div style={{ padding: "1rem", textAlign: "center" }}>
            <span>OR</span>
            <GoogleButton
              style={{ width: "100%", marginTop: "1rem" }}
              onClick={signInWithGoogle}
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default LoginSignup;

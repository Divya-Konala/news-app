import { useState } from "react";
import { signInWithEmailAndPassword } from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";
import { ErrorMapping } from "../utils/ErrorMapping";

const Login = ({handleClose}) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password) {
      toast.warning("please fill all the details", {
        position: "top-right",
        theme: "dark",
      });
      return;
    }

    signInWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        console.log("user logged in");
        toast.success("user logged in!", {
          position: "top-right",
          theme: "dark",
        });
        handleClose();
      })
      .catch((error) => {
        console.log(error);
        toast.error(ErrorMapping[error.code] || error.message, {
          position: "top-right",
          theme: "dark",
        });
      });
  };
  return (
    <form className="loginForm" onSubmit={handleSubmit}>
      <input
        type="email"
        placeholder="Enter Email"
        value={email}
        onChange={(e) => setEmail(e.target.value)}
      />
      <input
        type="password"
        placeholder="Password"
        value={password}
        onChange={(e) => setPassword(e.target.value)}
      />
      <button type="submit">Login</button>
    </form>
  );
};

export default Login;

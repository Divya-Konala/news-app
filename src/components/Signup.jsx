import { useState } from "react";
import { createUserWithEmailAndPassword} from "firebase/auth";
import { auth } from "../firebase/firebaseConfig";
import { toast } from "react-toastify";
import { ErrorMapping } from "../utils/ErrorMapping";

const SignUp = ({ handleClose }) => {
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [confirmPassword, setConfirmPassword] = useState("");

  const handleSubmit = (e) => {
    e.preventDefault();
    if (!email || !password || !confirmPassword) {
      toast.warning("please fill all the details", {
        position: "top-right",
        theme: "dark",
      });
      return;
    }

    if (password !== confirmPassword) {
      toast.warning("password - confirm password mismatch", {
        position: "top-right",
        theme: "dark",
      });
      return;
    }
    createUserWithEmailAndPassword(auth, email, password)
      .then((userCredential) => {
        toast.success("user created!", {
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
      <input
        type="password"
        placeholder="Password"
        value={confirmPassword}
        onChange={(e) => setConfirmPassword(e.target.value)}
      />
      <button type="submit">Signup</button>
    </form>
  );
};

export default SignUp;

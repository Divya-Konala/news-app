import { useAuthState } from "react-firebase-hooks/auth";
import { toast } from "react-toastify";
import { signOut } from "firebase/auth";
import { auth } from "../firebase/FirebaseConfig";
import { useNews } from "../context/NewsContext";

import {Link} from 'react-router-dom'

export const NavBar = () => {
  const [user] = useAuthState(auth);

  const {handleOpen}=useNews();

  const logout = () => {
    signOut(auth)
      .then(() => {
        toast.success("logged out", {
          position: "top-right",
          theme: "dark",
        });
      })
      .catch((error) => {
        toast.success("unable to logout", {
          position: "top-right",
          theme: "dark",
        });
      });
  };

  return (
    <nav> 
      <Link to='/'><h2>NEWS</h2></Link>
      {user ? (
        <a onClick={logout}>
          <img src="./images/logout.png" width="30px!important"/>
        </a>
      ) : (
        <a onClick={handleOpen}>
          <img src="./images/profile.png" alt="user" width="40px!important" />
        </a>
      )}
    </nav>
  );
};

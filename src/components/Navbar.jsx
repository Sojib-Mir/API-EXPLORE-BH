import { onAuthStateChanged, signOut } from "firebase/auth";
import { Link, NavLink, useNavigate } from "react-router";
import { auth } from "../firebase/firebase";
import { toast } from "react-toastify";
import { useEffect, useState } from "react";
import Loading from "./Loading";

const Navbar = () => {
  const navigate = useNavigate();
  const [user, setUser] = useState(null);
  const [loading, setLoading] = useState(true);

  console.log("current user=======>", user?.email);

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (current) => {
      setUser(current);
      setLoading(false);
    });

    return () => unsubscribe();
  }, []);

  const handleLogOut = () => {
    signOut(auth)
      .then(() => {
        toast.success("Signed out successfully!");
        navigate("/login");
      })
      .catch((error) => {
        toast.error(error.message);
      });
  };

  if (loading) return <Loading />;

  return (
    <div className="navbar bg-base-100 shadow-sm px-4 border-b border-b-amber-400 rounded">
      <div className="navbar-start">
        <NavLink to="/" className="btn btn-ghost text-xl">
          daisyUI
        </NavLink>
      </div>

      <div className="navbar-center hidden lg:flex">
        <ul className="menu menu-horizontal px-1">
          {user ? (
            <>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/profile">Profile</NavLink>
              </li>
              <li>
                <NavLink to="/add-product">Add Product</NavLink>
              </li>
              <li>
                <NavLink to="/my-product">My Product</NavLink>
              </li>
            </>
          ) : (
            <>
              <li>
                <NavLink to="/">Home</NavLink>
              </li>
              <li>
                <NavLink to="/login">Login</NavLink>
              </li>
              <li>
                <NavLink to="/register">Register</NavLink>
              </li>
            </>
          )}
        </ul>
      </div>

      <div className="navbar-end">
        {user ? (
          <div className="flex items-center gap-4">
            <p onClick={handleLogOut} className="btn btn-error btn-sm">
              Log Out
            </p>
          </div>
        ) : (
          <NavLink className="btn btn-primary btn-sm" to="/login">
            Login
          </NavLink>
        )}
      </div>
    </div>
  );
};

export default Navbar;

import React, { useEffect, useState } from "react";
import { onAuthStateChanged, signOut } from "firebase/auth";
import { auth } from "../firebase/firebase"; // Adjust path as needed
import { useNavigate } from "react-router";
import { toast } from "react-toastify";
import Loading from "./Loading";

const Profile = () => {
  const [user, setUser] = useState(null);
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (currentUser) => {
      if (currentUser) {
        setUser(currentUser);
      } else {
        navigate("/login");
      }
    });
    return () => unsubscribe();
  }, [navigate]);

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

  if (!user) return <Loading />;

  return (
    <div className="flex justify-center items-center min-h-[70vh]">
      <div className="card w-96 bg-base-100 shadow-xl border border-base-300">
        <figure className="px-10 pt-10">
          {/* Avatar Placeholder */}
          <div className="avatar placeholder">
            <div className="bg-neutral text-neutral-content rounded-full w-24">
              <span className="text-3xl uppercase">
                <img
                  src={user.photoURL}
                  alt="Profile"
                  onError={(e) => {
                    e.target.src = "https://via.placeholder.com/150";
                  }}
                />
              </span>
            </div>
          </div>
        </figure>

        <div className="card-body items-center text-center">
          <h2 className="card-title text-2xl font-bold">
            {user.displayName || "Anonymous User"}
          </h2>
          <p className="text-gray-500">{user.email}</p>

          <div className="card-actions mt-4 w-full">
            <button
              onClick={handleLogOut}
              className="btn btn-error btn-outline w-full"
            >
              Logout
            </button>
          </div>
        </div>
      </div>
    </div>
  );
};

export default Profile;

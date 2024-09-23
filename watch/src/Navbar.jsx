import React from 'react';
import { useNavigate } from "react-router-dom";
import { toast } from "react-toastify";

function Navbar() {
  const navigate = useNavigate();

  const handleLogout = () => {
    localStorage.removeItem("token"); 
    navigate("/login"); 
    toast.success("Logged out successfully");
  };

  const isLoggedIn = !!localStorage.getItem("token");

  return (
    <nav>
      {/* Other nav items */}
      {isLoggedIn ? (
        <button onClick={handleLogout} className="logout-button">
          Logout
        </button>
      ) : (
        <button onClick={() => navigate("/login")} className="login-button">
          Login
        </button>
      )}
    </nav>
  );
}

export default Navbar;

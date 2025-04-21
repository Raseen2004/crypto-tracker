import React from "react";
import { logout } from "../AuthService";
import { useNavigate } from "react-router-dom";
import "./Navbar.css";

function Navbar({ user }) {
  const navigate = useNavigate();

  const handleLogout = async () => {
    await logout();
    navigate("/login");
  };

  return (
    <div className="navbar">
      {user && (
        <div className="welcome-bar">
          <span>Welcome, {user.email}</span>
          <button onClick={handleLogout}>Logout</button>
        </div>
      )}
    </div>
  );
}

export default Navbar;

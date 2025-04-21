// src/components/Logout.js
import React from "react";
import { logout } from "../AuthService";

export default function Logout() {
  return <button onClick={logout}>Logout</button>;
}

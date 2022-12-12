import React from "react";
import { useNavigate } from "react-router-dom";

export default function Navbar() {
  const navigate = useNavigate();
  return (
    <div>
      <div style={{ cursor: "pointer" }} onClick={navigate("/")}>
        Home
      </div>
      <div style={{ cursor: "pointer" }} onClick={navigate("/signup")}>
        Signup
      </div>
      <div style={{ cursor: "pointer" }} onClick={navigate("/signin")}>
        Signin
      </div>
    </div>
  );
}

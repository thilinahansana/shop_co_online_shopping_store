import React, { useContext, useEffect, useState } from "react";
import axios from "axios";
import { AuthContext } from "../../../context/AuthContext";
import { comma } from "postcss/lib/list";
import { useNavigate } from "react-router-dom";

const Login = () => {
  const { isAuthenticated, login } = useContext(AuthContext);
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [error, setError] = useState("");
  const navigate = useNavigate();


   useEffect(() => {
     if (isAuthenticated) {
       navigate("/home");
     }
   }, [isAuthenticated, navigate]);



  const handleLogin = async () => {
    console.log("hellloooooo");
    setError(""); // Clear previous errors
    try {
      const response = await axios.post(
        "http://localhost:5137/api/v1/login",
        {
          email: email, // string as per schema
          password: password, // string as per schema
        },
        {
          headers: { "Content-Type": "application/json" },
        }
      );

      

      const data = response.data;
     

      if (data.token) {
        login(data.token);
      } else {
        setError("Invalid email or password. Please try again.");
      }
    } catch (err) {
      setError("An error occurred. Please try again later.");
      console.error("Login error:", err);
    }
  };

  return (
    <div className="flex items-center justify-center min-h-screen bg-gray-100">
      <div className="bg-white p-8 rounded-lg shadow-lg w-full max-w-md">
        <h2 className="text-2xl font-semibold text-center mb-6 text-gray-800">
          Login
        </h2>

        {error && (
          <div className="bg-red-100 text-red-700 p-3 mb-4 rounded">
            {error}
          </div>
        )}

        <input
          type="email"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          placeholder="Email"
          className="w-full p-3 mb-4 border rounded border-gray-300 focus:outline-none focus:border-indigo-500"
        />

        <input
          type="password"
          value={password}
          onChange={(e) => setPassword(e.target.value)}
          placeholder="Password"
          className="w-full p-3 mb-6 border rounded border-gray-300 focus:outline-none focus:border-indigo-500"
        />

        <button
          onClick={handleLogin}
          className="w-full py-3 bg-indigo-500 text-white rounded hover:bg-indigo-600 focus:outline-none transition-colors duration-150"
        >
          Login
        </button>
      </div>
    </div>
  );
};

export default Login;

import React from "react";
import { BrowserRouter as Router, Routes, Route } from "react-router-dom";
import { AuthProvider } from "./context/AuthContext";
import ProtectedRoute from "./pages/Auth/Protect/ProtectedRoute";
import Login from "./pages/Auth/Login/Login";
import SignUp from "./pages/Auth/SignUp/SignUp";
import { Main } from "./pages/Main/Main";

function App() {
  return (
    <AuthProvider>
      <Router>
        <Routes>
          <Route path="/" element={<Login />} />
          {/* Protect the dashboard route */}
          <Route element={<ProtectedRoute />}>
            <Route path="/home" element={<Main />} />
          </Route>
        </Routes>
      </Router>
    </AuthProvider>
  );
}

export default App;

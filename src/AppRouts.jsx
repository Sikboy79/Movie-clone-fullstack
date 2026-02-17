import React, { useEffect } from "react";
import { Routes, Route, useNavigate } from "react-router-dom";
import Home from "./pages/Home/Home";
import Login from "./pages/Login/Login";
import Player from "./pages/Player/Player";
import { onAuthStateChanged } from "firebase/auth";
import { auth } from "./firebase";
import { ToastContainer } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";

const AppRoutes = () => {
  const navigate = useNavigate();

  useEffect(() => {
    const unsubscribe = onAuthStateChanged(auth, (user) => {
      if (user) navigate("/");
      else navigate("/login");
    });

    return () => unsubscribe();
  }, [navigate]);

  return (
    <>
      <ToastContainer theme="dark" />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/login" element={<Login />} />
        <Route path="/player/:id" element={<Player />} />
      </Routes>
    </>
  );
};

export default AppRoutes;
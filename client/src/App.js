import React from "react";
import { Routes, Route } from "react-router-dom";
import Home from './pages/Home';
import About from './pages/About';
import Contact from './pages/Contact';
import Pagenotfound from './pages/Pagenotfound';
import Policy from './pages/Policy';
import Register from "./pages/auth/Register";
import Login from "./pages/auth/Login";
import Dashboard from "./pages/user/Dashboard";
import PrivateRoute from "./component/Layouts/routes/Private";

function App() {
  return (
    <>
      <Routes>x

        <Route path="/" element={<Home />} />
        <Route path="/dashboard" element={<PrivateRoute/>} />
            <Route path="" element={<Dashboard />}> 
        </Route>
        <Route path="/about" element={<About />} />
        <Route path="/register" element={<Register />} />
        <Route path="/login" element={<Login />} />
        <Route path="/contact" element={<Contact />} />
        <Route path="/policy" element={<Policy />} />
        <Route path="*" element={<Pagenotfound />} />

    </Routes>
    </>
  );
}

export default App;
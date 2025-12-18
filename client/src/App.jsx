
import React, { useState } from "react";
import "./index.css";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import { DetailWarungUniversal } from "./pages/DetailWarungUniversal";

import { LandingPage } from "./pages/LandingPage";
import { Login } from "./pages/Login";
import { Register } from "./pages/Register";
import { Beranda } from "./pages/Beranda";
import { DetailTelusuri } from "./pages/Telusuri";
import { Favorite } from "./pages/Favorites";
import { Ulasan } from "./pages/Ulasan";
import { TambahWarung } from "./pages/TambahWarung";
import { AdminDashboard } from "./pages/AdminDashboard";


import { DetailWarungMuaz } from "./pages/WarungMuaz";
import { DetailWarungCello } from "./pages/WarungCello";
import { DetailWarungNaswa } from "./pages/WarungNaswa";
import { DetailWarungRifki } from "./pages/WarungRifki";
import { DetailWarungSlamet } from "./pages/WarungSlamet";
import { DetailWarungBudi } from "./pages/WarungBudi";
import { DetailWarungIntan } from "./pages/WarungIntan";
import { DetailWarungFikri } from "./pages/WarungFikri";

const PrivateRoute = ({ children }) => {
  const isAuthenticated = !!localStorage.getItem("authUser");
  return isAuthenticated ? children : <Navigate to="/login" replace />;
};

function App() {
  const [, setIsAuthenticated] = useState(false);

  const handleLogin = (user) => {
    localStorage.setItem("authUser", JSON.stringify(user));
    setIsAuthenticated(true);
  };

  const handleLogout = () => {
    localStorage.removeItem("authUser");
    setIsAuthenticated(false);
  };

  const bgImage = "https://images.unsplash.com/photo-1555396273-367ea4eb4db5?q=80&w=1974&auto=format&fit=crop";

  return (
    <BrowserRouter>
      <div
        className="min-h-screen overflow-x-hidden bg-cover bg-center bg-no-repeat bg-fixed"
        style={{ backgroundImage: `url(${bgImage})` }}
      >
        <div className="min-h-screen bg-black/40">
          <Routes>
            <Route path="/" element={<LandingPage />} />
            
            <Route path="/login" element={<Login onLogin={handleLogin} />} />
            <Route path="/register" element={<Register onLogin={handleLogin} />} />

            {/* Halaman Utama */}
            <Route path="/beranda" element={<PrivateRoute><Beranda onLogout={handleLogout} /></PrivateRoute>} />
            <Route path="/telusuri" element={<PrivateRoute><DetailTelusuri /></PrivateRoute>} />
            <Route path="/favorite" element={<PrivateRoute><Favorite /></PrivateRoute>} />
            <Route path="/ulasan" element={<PrivateRoute><Ulasan /></PrivateRoute>} />
            
            {/* Fitur Baru */}
            <Route path="/tambah-warung" element={<PrivateRoute><TambahWarung /></PrivateRoute>} />
            <Route path="/admin" element={<AdminDashboard />} />

            {/* Detail Warung */}
            <Route path="/warung/muaz" element={<PrivateRoute><DetailWarungMuaz /></PrivateRoute>} />
            <Route path="/warung/1" element={<PrivateRoute><DetailWarungMuaz /></PrivateRoute>} />

            <Route path="/warung/:slug" element={<PrivateRoute><DetailWarungUniversal /></PrivateRoute>} />
            
            <Route path="/warung/cello" element={<PrivateRoute><DetailWarungCello /></PrivateRoute>} />
            <Route path="/warung/2" element={<PrivateRoute><DetailWarungCello /></PrivateRoute>} />
            
            <Route path="/warung/naswa" element={<PrivateRoute><DetailWarungNaswa /></PrivateRoute>} />
            <Route path="/warung/3" element={<PrivateRoute><DetailWarungNaswa /></PrivateRoute>} />

            <Route path="/warung/rifki" element={<PrivateRoute><DetailWarungRifki /></PrivateRoute>} />
            <Route path="/warung/slamet" element={<PrivateRoute><DetailWarungSlamet /></PrivateRoute>} />
            <Route path="/warung/budi" element={<PrivateRoute><DetailWarungBudi /></PrivateRoute>} />
            <Route path="/warung/intan" element={<PrivateRoute><DetailWarungIntan /></PrivateRoute>} />
            <Route path="/warung/fikri" element={<PrivateRoute><DetailWarungFikri /></PrivateRoute>} />

            <Route path="*" element={<Navigate to="/" replace />} />
          </Routes>
        </div>
      </div>
    </BrowserRouter>
  );
}

export default App;
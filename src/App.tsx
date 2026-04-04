import { useState } from "react";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";
import LandingPage from './pages/LandingPage';
import DashboardPage from './pages/DashboardPage';
import RegisterPage from './pages/RegisterPage'
import MenuBar from './components/MenuBar';
import Sidebar from "./components/Sidebar";

const PrivateRoute = ({ children, token }: { children: React.ReactNode, token: string | null }) => {
  return token ? <>{children}</> : <Navigate to="/" replace />;
};

export default function App() {
  const [token] = useState<string | null>(localStorage.getItem('token'));
  const [username] = useState<string>(localStorage.getItem('username') || '');

  return (
    <BrowserRouter>
      <Routes>
        <Route
          path="/"
          element={token ? <Navigate to="/dashboard" replace /> : <LandingPage />}
        />
        <Route
          path="/dashboard"
          element={
            <PrivateRoute token={token}>
              <div className="min-h-screen bg-gray-50">
                <MenuBar username={username} />
                <div className="flex flex-1">
                  <Sidebar />
                  <DashboardPage />
                </div>
              </div>
            </PrivateRoute>
          }
        />
        <Route path="/register" element={<RegisterPage />} />
      </Routes>
    </BrowserRouter>
  );
}
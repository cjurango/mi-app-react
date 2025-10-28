import { Route, Routes } from "react-router-dom";

import Navbar from "../../components/Navbar";
import Home from "../../pages/Home";
import About from "../../pages/About";
import Dashboard from "../../pages/Dashboard";
import Stats from "../../pages/Stats";
import Settings from "../../pages/Settings";
import Producto from "../../components/Producto";
import NotFound from "../../pages/NotFound";
import ProtectedRoute from "../../components/ProtectedRoute";

function AppRouter() {
  return (
    <>
      <Navbar />
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="about" element={<About />} />
        <Route path="/dashboard" element={<Dashboard />}>
          <Route path="stats" element={<Stats />} />
          <Route
            path="settings"
            element={
              <ProtectedRoute requiredRole="admin">
                <Settings />
              </ProtectedRoute>
            }
          />
        </Route>
        <Route path="/productos/:categoria/:producto" element={<Producto />} />
        <Route path="*" element={<NotFound />} />
      </Routes>
    </>
  );
}

export default AppRouter;

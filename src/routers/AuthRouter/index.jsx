import { Navigate, Route, Routes } from "react-router-dom";

import Login from "../../pages/Login";

function AuthRouter() {
  return (
    <Routes>
      <Route path="/login" element={<Login />} />
      <Route path="*" element={<Navigate to="/login" replace />} />
    </Routes>
  );
}

export default AuthRouter;

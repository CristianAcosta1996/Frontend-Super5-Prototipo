import { Navigate, Route, Routes } from "react-router-dom";
import { LoginPage } from "../pages/LoginPage";

export const AuthRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<LoginPage />} />
      {/* agregar sign in route */}
      <Route path="/*" element={<Navigate to="/" />} />
    </Routes>
  );
};

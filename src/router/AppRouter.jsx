import { Navigate, Route, Routes } from "react-router-dom";
import { AuthRoutes } from "../auth/router/AuthRoutes";
import { Super5Routes } from "../super5/router/Super5Routes";

export const AppRouter = () => {
  return (
    <Routes>
      <Route path="/" element={<Super5Routes />} />
      <Route path="auth" element={<AuthRoutes />} />
      <Route path="/*" element={<Navigate to="/auth" />} />
    </Routes>
  );
};

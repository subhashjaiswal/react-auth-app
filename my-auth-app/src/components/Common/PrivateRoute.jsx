import { Outlet, Navigate } from "react-router-dom";

const PrivateRoute = () => {
  const token = localStorage.getItem("pb_token");
  return token ? <Outlet /> : <Navigate to="/login" />;
};

export default PrivateRoute;

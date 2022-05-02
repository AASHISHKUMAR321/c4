import { Navigate } from "react-router-dom";
import { useSelector } from "react-redux";

// /orders and /neworder are protected routes
export const ProtectedRoute = ({ children }) => {
  const auth = useSelector((store) => store.isLoggedIn);
  if (auth) {
    return children;
  }

  return <Navigate to={"/login"} />;
};

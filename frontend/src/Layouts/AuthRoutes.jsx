// AuthRoute.jsx
import { Navigate } from "react-router-dom";
import { useUser } from "../contexts/UserContext";

const AuthRoute = ({ children }) => {
  const { user } = useUser();

   if (location.pathname === "/google-success") {
    return children;
  }

  if (!user) {
    // User not logged in, redirect to home page or login
    return <Navigate to="/" replace />;
  }

  // User is logged in, show the protected page
  return children;
};

export default AuthRoute;

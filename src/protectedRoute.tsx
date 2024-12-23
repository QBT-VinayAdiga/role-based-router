import { Navigate, Outlet } from "react-router";
import { useUserProfileContext } from "./context/userProfile.context";

const ProtectedRoute = ({ allowedRoles }: { allowedRoles: string[] }) => {
  const { role } = useUserProfileContext();

  return allowedRoles.includes(role) ? (
    <Outlet />
  ) : (
    <Navigate to="/unauthorized" replace />
  );
};

export default ProtectedRoute;

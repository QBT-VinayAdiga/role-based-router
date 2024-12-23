import { Navigate, Route, Routes } from "react-router";
import Home from "./pages/home";
import ProtectedRoute from "./protectedRoute";
import Admin from "./pages/admin";
import About from "./pages/about";
import PlannerRoutes from "./routes/plannerRoutes";

const Navigation = () => {
  return (
    <Routes>
      <Route path="/" element={<Navigate replace to={"/home"} />} />
      <Route path="/home" element={<Home />} />
      <Route path="/about" element={<About />} />

      <Route element={<ProtectedRoute allowedRoles={["Admin", "Planner"]} />}>
        <Route path="/planner/*" Component={PlannerRoutes} />
      </Route>

      <Route element={<ProtectedRoute allowedRoles={["Admin"]} />}>
        <Route path="/admin" element={<Admin />} />
      </Route>
    </Routes>
  );
};

export default Navigation;

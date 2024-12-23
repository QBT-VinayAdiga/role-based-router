import { Route, Routes } from "react-router";
import Planner from "../pages/planner";
import PlannerDetail from "../pages/plannerDetail";

const PlannerRoutes = () => {
  return (
    <Routes>
      <Route path="/" element={<Planner />} />
      <Route path=":id" element={<PlannerDetail />} />
    </Routes>
  );
};

export default PlannerRoutes;

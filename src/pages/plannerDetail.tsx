import { useParams } from "react-router";

const PlannerDetail = () => {
  const { id } = useParams();
  return (
    <div className="p-6 max-w-sm mx-auto bg-white rounded-xl shadow-md space-y-4">
      <h1 className="text-2xl font-bold text-center">Planner Detail: {id}</h1>
      <p className="text-gray-500">
        This is a detailed view of your planner. Here you can see all the tasks
        and events you have planned for the day.
      </p>
      <ul className="list-disc list-inside">
        <li className="text-gray-700">Task 1: Complete the project report</li>
        <li className="text-gray-700">Task 2: Attend the team meeting</li>
        <li className="text-gray-700">Task 3: Review the codebase</li>
      </ul>
    </div>
  );
};

export default PlannerDetail;

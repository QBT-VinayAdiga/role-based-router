import { Link } from "react-router";

const Planner = () => {
  return (
    <div className="flex items-center justify-center">
      <div className="flex flex-col gap-6">
        Planner Page
        <div>
          {[1, 2, 3].map((item) => (
            <Link
              to={`/planner/${item}`}
              key={item}
              className="p-2 m-2 bg-blue-500 text-white rounded-md"
            >
              Planner {item}
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
};

export default Planner;

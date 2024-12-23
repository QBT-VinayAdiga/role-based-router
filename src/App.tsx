import { useNavigate } from "react-router";
import "./App.css";
import Navigation from "./route";
import { useUserProfileContext } from "./context/userProfile.context";
import { useState } from "react";

function App() {
  const navigate = useNavigate();
  const { setRole } = useUserProfileContext();
  const [value, setValue] = useState("");
  return (
    <>
      <div className="flex p-4 gap-6">
        <div className="w-1/12 flex-col gap-6 flex ">
          {["Home", "Admin", "About", "Planner"].map((item) => (
            <button
              key={item}
              onClick={() => {
                navigate("/" + item.toLowerCase());
              }}
              className="bg-white p-2 rounded-md"
            >
              <div className="p-2 border rounmded-md">{item}</div>
            </button>
          ))}
        </div>
        <div className="w-11/12 bg-gray-50">
          <Navigation />
        </div>
      </div>
      <div className="flex items-center  justify-center gap-2 p-6">
        <input
          value={value}
          onChange={(e) => setValue(e.target.value)}
          className="border rounded-md p-2"
        />
        <button
          onClick={() => {
            setRole(value);
          }}
          className="border rounded-md p-2"
        >
          Update Role
        </button>
      </div>
    </>
  );
}

export default App;

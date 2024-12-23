import { ReactNode, useEffect, useState } from "react";
import { LoggedInUserProfileContext } from "../context/loggedInUser.context";

interface UserProfileProviderProperties {
  children: ReactNode;
}

const LoggedInUserProfileProvider: React.FC<UserProfileProviderProperties> = (
  props: UserProfileProviderProperties
) => {
  const [role, setRole] = useState("Admin");

  useEffect(() => {
    setRole("Admin");
  }, []);

  return (
    <LoggedInUserProfileContext.Provider value={{ role, setRole }}>
      {role ? props.children : <div>Loading...</div>}
    </LoggedInUserProfileContext.Provider>
  );
};

export default LoggedInUserProfileProvider;

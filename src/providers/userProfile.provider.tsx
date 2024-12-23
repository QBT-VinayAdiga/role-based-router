import { ReactNode, useEffect, useState } from "react";
import { UserProfileContext } from "../context/userProfile.context";
import { useLoggedInUserProfileContext } from "../context/loggedInUser.context";

interface UserProfileProviderProperties {
  children: ReactNode;
}

const UserProfileProvider: React.FC<UserProfileProviderProperties> = (
  props: UserProfileProviderProperties
) => {
  const { role } = useLoggedInUserProfileContext();
  const [currentRole, setCurrentRole] = useState<string>("");

  useEffect(() => {
    if (role) {
      setCurrentRole(role);
    }
  }, [role]);

  const setRole = (value: string) => {
    setCurrentRole(value);
  };

  return (
    <UserProfileContext.Provider
      value={{ role: currentRole, setRole: setRole }}
    >
      {currentRole !== "" && currentRole ? (
        props.children
      ) : (
        <div>Loading...</div>
      )}
    </UserProfileContext.Provider>
  );
};

export default UserProfileProvider;

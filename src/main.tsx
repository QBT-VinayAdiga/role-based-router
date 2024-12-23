import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.tsx";
import { BrowserRouter } from "react-router";
import LoggedInUserProfileProvider from "./providers/loggedInUser.provider";
import UserProfileProvider from "./providers/userProfile.provider.tsx";

createRoot(document.getElementById("root")!).render(
  <StrictMode>
    <BrowserRouter>
      <LoggedInUserProfileProvider>
        <UserProfileProvider>
          <App />
        </UserProfileProvider>
      </LoggedInUserProfileProvider>
    </BrowserRouter>
  </StrictMode>
);

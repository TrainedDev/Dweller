import { StrictMode } from "react";
import { createRoot } from "react-dom/client";
import "./index.css";
import App from "./App.jsx";
import { SideBarProvider } from "./Context/SideBarProvider";

createRoot(document.getElementById("root")).render(
  <StrictMode>
    <SideBarProvider>
      <App />
    </SideBarProvider>
  </StrictMode>,
);

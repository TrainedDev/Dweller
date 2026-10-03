import { useState } from "react";
import { SideBarContext } from "./contexts";

export const SideBarProvider = ({ children }) => {
  const [sideBar, setSidebar] = useState(false);

  return (
    <SideBarContext.Provider value={{ sideBar, setSidebar }}>
      {children}
    </SideBarContext.Provider>
  );
};

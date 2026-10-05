import { useState } from "react";
import { SideBarContext } from "./contexts";

export const SideBarProvider = ({ children }) => {
  const [sidebar, setSidebar] = useState(false);

  return (
    <SideBarContext.Provider value={{ sidebar, setSidebar }}>
      {children}
    </SideBarContext.Provider>
  );
};

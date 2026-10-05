import { SidebarClose } from "lucide-react";
import { useContext } from "react";
import { SideBarContext } from "../Context/contexts";

const Sidebar = () => {
  const { sidebar, setSidebar } = useContext(SideBarContext);

  return (
    <div
      className={`sidebar w-[60%] min-h-dvh absolute top-0 transition-transform ease-in duration-1000 capitalize z-30 ${!sidebar ? "-translate-x-100" : "translate-x-0 backdrop-blur-2xl"}`}
    >
      <div
        onClick={() => setSidebar((prev) => !prev)}
        className="flex justify-end"
      >
        <SidebarClose />
      </div>
      <ul>
        <li>home</li>
        <li>buy</li>
        <li>sell</li>
        <li>luxury homes</li>
        <li>contact</li>

        <li>get a quote</li>
      </ul>
    </div>
  );
};

export default Sidebar;

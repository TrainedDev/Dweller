import { useContext } from "react";
import Button from "./Button";
import { Menu } from "lucide-react";
import { SideBarContext } from "../Context/contexts";

const Navbar = () => {
  const { setSidebar } = useContext(SideBarContext);

  return (
    <nav className="flex-row justify-between w-screen h-20 bg-transparent">
      <h2>Brighthome</h2>

      <Menu onClick={() => setSidebar(prev => !prev)} className="cursor-pointer xl:hidden" />

      <div className="hidden justify-evenly w-[90%] xl:flex xl:flex-row">
        <div className="flex-row justify-evenly w-[50%]">
          <Button btnName={"home"} />
          <Button btnName={"buy"} />
          <Button btnName={"sell"} />
          <Button btnName={"luxuryhomes"} />
          <Button btnName={"contact"} />
        </div>

        <Button btnName={"get a quote"} style={"rounded rounded-0 bg-white  w-full text-red"} />
      </div>
    </nav>
  );
};

export default Navbar;

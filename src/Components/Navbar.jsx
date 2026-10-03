import { useContext } from "react";
import Button from "./Button";
import { Menu } from "lucide-react";
import { SideBarContext } from "../Context/contexts";

const Navbar = () => {
  const { setSidebar } = useContext(SideBarContext);

  return (
    <nav className="flex-row justify-between w-screen h-20 bg-transparent">
      <Button btnName={"brighthome"} />

      <Menu onClick={() => setSidebar(prev => !prev)} className="cursor-pointer xl:hidden" />

      <div className="hidden justify-evenly w-[90%] xl:flex xl:flex-row">
        <div className="flex-row justify-evenly w-[50%]">
          <Button btnName={"home"} />
          <Button btnName={"buy"} />
          <Button btnName={"sell"} />
          <Button btnName={"luxuryhomes"} />
          <Button btnName={"contact"} />
        </div>

        <Button btnName={"get a quote"} />
      </div>
    </nav>
  );
};

export default Navbar;

import { useContext } from "react";
import { Menu } from "lucide-react";
import { SideBarContext } from "../Context/contexts";

const Navbar = () => {
  const { setSidebar } = useContext(SideBarContext);

  return (
    <nav className="flex-row justify-between w-screen capitalize p-2 absolute z-20 h-20 items-center">
      <h2>Dweller</h2>

      <Menu
        onClick={() => setSidebar((prev) => !prev)}
        className="cursor-pointer sm:hidden"
      />

      <div className="hidden justify-evenly w-[90%] gap-2 sm:flex sm:flex-row">
        <ul className="flex-row justify-evenly w-[80%]">
          <li className="relative group">
            <a href="">home</a>
            {/* The custom underline */}
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-current scale-x-0 transition-transform duration-300 ease-in-out origin-center group-hover:scale-x-100 " />
          </li>
          <li className="relative group">
            <a href="">buy</a>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-current scale-x-0 transition-transform duration-300 ease-in-out origin-center group-hover:scale-x-100 " />
          </li>
          <li className="relative group">
            <a href="">sell</a>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-current scale-x-0 transition-transform duration-300 ease-in-out origin-center group-hover:scale-x-100 " />
          </li>
          <li className="relative group">
            <a href="">luxuryhomes</a>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-current scale-x-0 transition-transform duration-300 ease-in-out origin-center group-hover:scale-x-100 " />
          </li>
          <li className="relative group">
            <a href="">contact</a>
            <span className="absolute -bottom-1 left-0 w-full h-0.5 bg-current scale-x-0 transition-transform duration-300 ease-in-out origin-center group-hover:scale-x-100 " />
          </li>
        </ul>
        {/* 
        <li
          className={"get a quote"}
          style={"rounded rounded-0 bg-white  w-full text-red"}
        /> */}
      </div>
    </nav>
  );
};

export default Navbar;

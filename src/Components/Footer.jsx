import { contactInfo, navLinks, socialLinks } from "../Constants";

const Footer = () => {
  return (
    <footer className="w-full bg-white text-zinc-900 font-light tracking-wide pt-16 pb-8 px-6 md:px-16 border-t border-zinc-200">
      <div className="max-w-7xl mx-auto flex flex-col gap-12">
        {/* Main Content Grid: Description vs Links */}
        <div className="grid grid-cols-1 md:grid-cols-12 gap-8 md:gap-16">
          {/* Brand Identity Column */}
          <div className="md:col-span-6 flex flex-col gap-4 text-start">
            <h2 className="text-2xl font-semibold text-zinc-900 tracking-widest uppercase">
              Dweller
            </h2>
            <p className="text-sm text-zinc-600 leading-relaxed max-w-md normal-case">
              Dweller helps you explore premium homes, access expert
              guidance, and make real-estate decisions with confidence. From
              selling to buying to long-term investment strategy, we are here to
              support your goals.
            </p>
          </div>

          <div className="md:col-span-3 flex flex-col gap-4 text-start">
            <h3 className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
              Navigation
            </h3>
            <ul className="flex flex-wrap gap-3">
              {navLinks.map((ele, i) => (
                <li
                  key={i}
                  className="relative group w-fit capitalize text-sm text-zinc-700 hover:text-zinc-950 transition-colors duration-200"
                >
                  <a href={`#${ele.id}`}>{ele.name}</a>
                  {/* Animated underline mapped to dark theme */}
                  <span className="absolute bottom-[-2px] left-0 w-full h-[1px] bg-zinc-900 scale-x-0 transition-transform duration-300 ease-in-out origin-left group-hover:scale-x-100" />
                </li>
              ))}
            </ul>
          </div>

          <div className="md:col-span-3 flex flex-col gap-4 text-start">
            <h3 className="text-xs font-semibold tracking-wider text-zinc-400 uppercase">
              Connect With Us
            </h3>
            <ul className="flex flex-wrap gap-4 items-center">
              {socialLinks.map((ele, i) => (
                <li
                  key={i}
                  className="transition-transform duration-300  hover:scale-110"
                >
                  <a
                    href={ele.url}
                    className="flex justify-center items-center w-9 h-9 rounded-full bg-zinc-100 border border-zinc-200 hover:border-zinc-400 text-zinc-600 hover:text-zinc-900 transition-colors"
                  >
                    <img
                      src={ele.icon}
                      alt={ele.name}
                      className="w-4 h-4 opacity-70 hover:opacity-100 transition-opacity"
                    />
                  </a>
                </li>
              ))}
            </ul>
          </div>
        </div>
        <hr className="border-zinc-200 my-2" />

        <div className="flex flex-row justify-between items-center gap-4  text-zinc-500 tracking-wider w-full">
          <div className="flex flex-row  gap-8 text-start normal-case">
            <p className="hover:text-zinc-800 transition-colors text-xs">
              📍 {contactInfo.address}
            </p>
            <p className="hover:text-zinc-800 transition-colors text-xs">
              📞 {contactInfo.phone}
            </p>
          </div>
          <p className="text-right text-xs">
            © {new Date().getFullYear()} BRIGHTHOME. ALL RIGHTS RESERVED.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

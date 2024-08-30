import { appleImg, bagImg, searchImg } from "../utils";
import { navLists } from "../constants";
import { Link } from "react-router-dom";

const Navbar = () => {
  return (
    <header className="w-full py-4 sm:px-10 px-5 flex justify-between items-center bg-black">
      <nav className="flex w-full max-w-screen-lg items-center mx-auto">
        <Link to="/">
          <img
            src={appleImg}
            alt="Apple logo"
            width={20}
            height={24}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />
        </Link>

        <div className="flex flex-1 justify-center hidden sm:flex space-x-8">
          {navLists.map((nav) => {
            if (typeof nav === "string") {
              return (
                <Link
                  key={nav}
                  to={`/${nav.toLowerCase()}`}
                  className="text-sm font-medium cursor-pointer text-gray-300 hover:text-white transition-colors"
                >
                  {nav}
                </Link>
              );
            } else if (typeof nav === "object" && nav.name) {
              return (
                <div key={nav.name} className="relative group">
                  <Link
                    to={
                      nav.name === "Store"
                        ? "/store"
                        : `/${nav.name.toLowerCase()}`
                    }
                    className="text-sm font-medium cursor-pointer text-gray-300 hover:text-white transition-colors"
                  >
                    {nav.name}
                  </Link>
                  {nav.subMenu && (
                    <div className="absolute left-0 mt-2 w-48 bg-gray-800 p-2 rounded-lg opacity-0 group-hover:opacity-100 transition-opacity">
                      {nav.subMenu.map((subNav) => (
                        <Link
                          key={subNav.name}
                          to={subNav.link}
                          className="block px-4 py-2 text-sm text-gray-300 hover:text-white"
                        >
                          {subNav.name}
                        </Link>
                      ))}
                    </div>
                  )}
                </div>
              );
            } else {
              return null;
            }
          })}
        </div>

        <div className="flex items-center gap-5 sm:justify-end flex-1">
          <img
            src={searchImg}
            alt="Search"
            width={20}
            height={20}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />
          <img
            src={bagImg}
            alt="Bag"
            width={20}
            height={20}
            className="cursor-pointer hover:opacity-80 transition-opacity"
          />
        </div>
      </nav>
    </header>
  );
};

export default Navbar;

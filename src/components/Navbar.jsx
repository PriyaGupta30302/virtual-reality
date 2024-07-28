import { Menu, X } from "lucide-react";
import { useState } from "react";
import { Link } from "react-scroll";
import { NavLink } from "react-router-dom";
import logo from "../assets/logo.png";
import { navItems } from "../constants";

const Navbar = () => {
  const [mobileDrawerOpen, setMobileDrawerOpen] = useState(false);

  const toggleNavbar = () => {
    setMobileDrawerOpen(!mobileDrawerOpen);
  };

  return (
    <nav className="sticky top-0 z-50 py-3 backdrop-blur-lg border-b border-neutral-700/80">
      <div className="container px-4 mx-auto relative text-sm">
        <div className="flex justify-between items-center">
          <Link
            to="top"
            smooth={true}
            duration={500}
            className="flex items-center flex-shrink-0 cursor-pointer text-neutral-300 hover:text-white"
          >
            <img className="h-10 w-10 mr-2 hover:scale-110" src={logo} alt="logo" />
            <span className="text-xl tracking-tight hover:scale-110 text-white ">VirtualR</span>
          </Link>
          <ul className="hidden lg:flex ml-14 space-x-12">
            {navItems.map((item, index) => (
              <li key={index}>
                <Link
                  to={item.href}
                  smooth={true}
                  duration={500}
                  offset={-70}
                  className="cursor-pointer text-neutral-300 hover:text-white" 
                >
                  {item.label}
                </Link>
              </li>
            ))}
          </ul>
          <div className="hidden lg:flex justify-center space-x-12 items-center">
            <NavLink to="/signin" className="py-2 px-3 border rounded-md hover:scale-110">
              Sign In
            </NavLink>
            <NavLink to="/create-account" className="bg-gradient-to-r from-orange-500 to-orange-800 py-2 px-3 rounded-md hover:scale-110">
              Create an account
            </NavLink>
          </div>
          <div className="lg:hidden md:flex flex-col justify-end">
            <button onClick={toggleNavbar}>
              {mobileDrawerOpen ? <X /> : <Menu />}
            </button>
          </div>
        </div>
        {mobileDrawerOpen && (
          <div className="fixed right-0 z-20 bg-neutral-900 w-full p-12 flex flex-col justify-center items-center lg:hidden">
            <ul>
              {navItems.map((item, index) => (
                <li key={index} className="py-4">
                  <Link
                    to={item.href}
                    smooth={true}
                    duration={500}
                    offset={-70}
                    className="cursor-pointer text-neutral-300 hover:text-white"
                    onClick={toggleNavbar}
                  >
                    {item.label}
                  </Link>
                </li>
              ))}
            </ul>
            <div className="flex space-x-6">
              <NavLink to="/signin" className="py-2 px-3 border rounded-md hover:scale-110 " >
                Sign In
              </NavLink>
              <NavLink to="/create-account" className="py-2 px-3 rounded-md bg-gradient-to-r from-orange-500 to-orange-800 hover:scale-110">
                Create an account
              </NavLink>
            </div>
          </div>
        )}
    </div>
    </nav>
  );
};

export default Navbar;

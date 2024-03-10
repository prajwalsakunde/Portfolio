import { NavLink, Link } from "react-router-dom";
import { useState } from "react";
import { FiChevronDown} from "react-icons/fi";
import prajwals from '../assets/prajwals.png';
import { SiBuymeacoffee } from "react-icons/si";
import './navbar.css';

function NavBar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [activeTab, setActiveTab] = useState();

  const handleMenuToggle = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  const handleNavLinkClick = (tab) => {
    if (activeTab === tab) {
      window.location.reload();
    } else {
      setActiveTab(tab);
    }
  };

  return (
    <nav className="bg-white px-10 py-4 flex flex-col items-center sm:flex-row justify-between">
      <div className="flex items-center"> 
        <Link to="/" className="flex items-center">
          <img src={prajwals} className="w-26 h-8" alt="Logo" />
          <div className="font-black px-2 pt-4">.</div>
        </Link>
      </div>
    
      <div  className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col sm:flex-row mt- sm:flex bg-black lg:w-24 xl:w-32 2xl:w-56 h-0.5  `}>

      </div>
      <div className="sm:hidden">
        <button
          onClick={handleMenuToggle}
          className="block text-gray-600 focus:outline-none"
        >
          <FiChevronDown />
        </button>
      </div>
      <div
        className={`${
          isMenuOpen ? "flex" : "hidden"
        } flex-col sm:flex-row px-1 items-center space-y-1 sm:space-y-0 gap-x-4 sm:flex `}
      > 
        <div className="mr-0 sm:ml-10 sm:mr-20">
          <NavLink
            to="/resume"
            className={`text-lg font-extralight hover:font-semibold ${
              activeTab === "event" ? "text-black font-semibold" : "text-lg font-extralight text-black"
            }`}
            onClick={() => handleNavLinkClick("event")}
            style={{ marginRight: '10px' }} 
          >
            Resume
          </NavLink>
        </div>
        <div className="mr-0 sm:ml-10 sm:mr-20">
          <NavLink
            to="/projects"
            className={`text-lg font-extralight hover:font-semibold hover:text-black ${
              activeTab === "members" ? "text-black font-semibold" : "text-lg font-extralight text-black"
            }`}
            onClick={() => handleNavLinkClick("members")}
            style={{ marginRight: '10px' }} 
          >
            Projects
          </NavLink>
        </div>
        <div className="mr-0 sm:mx-10">
          <NavLink
            to="/contact"
            className={`text-lg gap-3 font-extralight hover:font-semibold flex flex-row hover:text-black ${
              activeTab === "contact" ? "text-black font-semibold" : "text-lg font-extralight text-black"
            }`}
            onClick={() => handleNavLinkClick("contact")}
          >
            <SiBuymeacoffee className="w-10 h-10 rotating-icon" />
            Hire me
          </NavLink>
        </div>
      </div>
    </nav>
  );
}

export default NavBar;

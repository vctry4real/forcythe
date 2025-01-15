import { useState, useEffect } from "react";
import logo from "../assets/logo.svg";
import Button from "./Button";
import { FaPlay } from "react-icons/fa6";
import { GiHamburgerMenu } from "react-icons/gi";
import { IoClose } from "react-icons/io5";

export default function Navbar() {
  const [openNav, setOpenNav] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const handleClick = () => {
    setOpenNav(!openNav);
  };

  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 10) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`w-full ${
        isScrolled
          ? "bg-white bg-opacity-10 backdrop-blur-lg shadow-md"
          : "bg-primary"
      } py-[1.8rem] px-[22px] fixed top-0 left-0 z-50 transition-all duration-300 md:px-[120px]`}
    >
      <div className="w-full flex items-center justify-between">
        <div className="flex items-center gap-x-20">
          <div>
            <img
              src={logo}
              alt="forcythe logo"
              className="md:w-[156px]"
            />
          </div>

          {/* Large Screen  */}
          <div className="hidden md:flex">
            <ul className="flex items-start justify-start gap-x-[12px]">
              {["About", "Services", "Portfolio", "Studio", "Careers", "Blog"].map(
                (item, index) => (
                  <li
                    key={index}
                    className="text-lg text-primaryColor hover:underline cursor-pointer"
                  >
                    {item}
                  </li>
                )
              )}
            </ul>
          </div>
        </div>

        {/* Book Now Button */}
        <div className=" hidden md:block">
          <Button
            className="w-fit bg-primaryColor text-xl font-bold rounded-3xl flex items-center px-3 py-3"
            text="Book a call"
            Icon={FaPlay}
          />
        </div>

        {/* Mobile Navbar Toggle */}
        <div className="flex items-center md:hidden">
          <button
            onClick={handleClick}
            className="bg-white bg-opacity-10 px-4 z-20 py-2 rounded transition-colors duration-200 hover:bg-opacity-20"
          >
            {openNav ? <IoClose /> : <GiHamburgerMenu />}
          </button>
        </div>
      </div>

      {/* Mobile Navbar Links */}
      {openNav && (
        <div className="w-2/4 bg-custom-gradient absolute z-30 top-full right-0 m-[22px] rounded-3xl transition-all duration-300 overflow-hidden">
          <ul className="flex flex-col items-start justify-start gap-y-[12px] py-8 px-4">
            {["About", "Services", "Portfolio", "Studio", "Careers", "Blog"].map(
              (item, index) => (
                <li
                  key={index}
                  className="text-lg text-primaryColor hover:underline cursor-pointer"
                >
                  {item}
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </nav>
  );
}

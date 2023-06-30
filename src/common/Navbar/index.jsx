import { useEffect, useState } from "react";
import tw from "twin.macro";
import clsx from "clsx";

import { useLocation } from "react-router-dom";
import { Link, NavLink } from "react-router-dom";

import { CiDark, CiLight } from "react-icons/ci";
import { FaBars, FaTimes } from "react-icons/fa";

import Container from "../../common/Container";
import Button, { NavLinkButton } from "../../common/Button";
import Dropdown from "../../common/Dropdown";

const ButtonContainer = tw.div`flex items-center space-x-1 xl:space-x-4`;

const dropdownLinks = [
  { to: "/about", label: "About Page" },
  { to: "/contact", label: "Contact Page" },
  { to: "/", label: "Blog Grid Page" },
];

const Navbar = () => {
  const [toggleNav, setToggleNav] = useState(false);
  const [isSticky, setIsSticky] = useState(false);
  const [isLightMode, setIsLightMode] = useState(false);

  const handleToggleNav = () => {
    return setToggleNav((value) => !value);
  };

  const handleDarkMode = () => {
    setIsLightMode((prevMode) => !prevMode);
  };

  const { hash } = useLocation();

  //handling Navigation if url contains id
  useEffect(() => {
    const handleNavigation = () => {
      if (hash) {
        const element = document.querySelector(hash);

        if (element) {
          element.scrollIntoView({ behavior: "smooth" });
        }
      }
    };

    handleNavigation();
  }, [hash]);

  // handling scroll
  useEffect(() => {
    const handleScroll = () => {
      const navbarHeight = document.querySelector("nav").clientHeight;

      scrollY >= navbarHeight ? setIsSticky(true) : setIsSticky(false);
    };

    window.addEventListener("scroll", handleScroll);

    () => {
      return window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  // adding the classlist "dark" to the root whenever the darkMode is toggled
  useEffect(() => {
    const root = document.querySelector("#root");

    isLightMode
      ? root.classList.remove("dark") || root.classList.add("light")
      : root.classList.remove("light") || root.classList.add("dark");
  }, [isLightMode]);

  return (
    <nav
      className={`
        ${isSticky ? "sticky top-0 z-50" : ""}
        ${
          isSticky
            ? "bg-[#ffffffcc] drop-shadow-lg backdrop-blur dark:bg-black"
            : "bg-transparent dark:bg-darkblue"
        }
         duration-200 ease-linear
`}
    >
      <Container
        className={`
            flex items-center justify-between gap-4
            py-4 px-4
            sm:px-8`}
      >
        {/* logo */}
        <NavLink
          to="/"
          className={`
                 inline-flex items-center
                 font-medium text-gray-900
                dark:text-amber-500`}
        >
          <span className="text-xl">Exsaverse</span>
        </NavLink>

        {/* logo */}

        <div
          className={clsx(
            "fixed z-[99] md:static",
            `inset-0 ${toggleNav ? "left-0" : "left-[-250px]"}`,
            "h-screen w-[250px] bg-blue-500 py-[48px] px-[24px] md:h-full",
            "duration-300 ease-in-out",
            "text-amber-500 dark:text-amber-500 md:bg-transparent md:py-0 md:px-0 md:text-black"
          )}
        >
          <ul className="space-y-4 md:flex md:space-y-0 md:space-x-2 lg:space-x-4">
            <li>
              <Link to="/#hero" tabIndex={toggleNav ? 0 : -1}>
                Home
              </Link>
            </li>

            <li>
              <Link to="/#about" tabIndex={toggleNav ? 0 : -1}>
                About
              </Link>
            </li>

            <li>
              <Link to="/#pricing" tabIndex={toggleNav ? 0 : -1}>
                Pricing
              </Link>
            </li>

            <li>
              <Link to="/#team" tabIndex={toggleNav ? 0 : -1}>
                Team
              </Link>
            </li>
            <li>
              <Link to="/#" tabIndex={toggleNav ? 0 : -1}>
                Market
              </Link>
            </li>

            <li>
              <Link to="/#" tabIndex={toggleNav ? 0 : -1}>
                Raffle
              </Link>
            </li>
            <li>
              <Link to="/#" tabIndex={toggleNav ? 0 : -1}>
                Discord
              </Link>
            </li>

          </ul>
        </div>

        <ButtonContainer>
          

          <Button
            onClick={handleDarkMode}
            className="bg-white text-2xl font-bold text-black shadow-lg"
            rounded="lg"
            size="sm"
          >
            {isLightMode ? <CiDark /> : <CiLight /> }
          </Button>

          <Button
            size="sm"
            rounded="lg"
            className="shadow-lg md:hidden"
            onClick={handleToggleNav}
          >
            {toggleNav ? <FaTimes /> : <FaBars />}
          </Button>
        </ButtonContainer>
      </Container>
    </nav>
  );
};

export default Navbar;

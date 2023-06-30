import tw from "twin.macro";

import { useState, useEffect } from "react";

import { NavLink, Link } from "react-router-dom";

import {
  FaFacebookF,
  FaTwitter,
  FaYoutube,
  FaLinkedin,
  FaChevronUp,
} from "react-icons/fa";

import Container from "../../common/Container";
import Row, { RowItem } from "../../common/Row";
import Button from "../../common/Button";

const footerLinksHoverClass =
  "transition-colors duration-300 hover:text-[#4A6CF7]";

const FooterLinkTitle = tw.h5`mb-4 text-[1.25rem] font-bold text-black dark:text-amber-500 md:mb-8`;

const CopyrightContainer = tw.div`bg-[#4A6CF71a] dark:bg-[#141C51]`;

const Footer = () => {
  const [isVisible, setIsVisible] = useState(false);

  const handleScrollToTop = () => {
    window.scrollTo({
      top: 0,
      behavior: "smooth",
    });
  };

  useEffect(() => {
    //toggleVisibility handler for scrollToTopButton
    const toggleVisibiltiy = () => {
      if (window.scrollY > 150) {
        setIsVisible(true);
      } else {
        setIsVisible(false);
      }
    };

    window.addEventListener("scroll", toggleVisibiltiy);

    return () => {
      window.removeEventListener("scroll", toggleVisibiltiy);
    };
  }, []);

  return (
    <footer className="bg-black dark:bg-black">
      <Container
        className={`
         overflow-hidden
         py-[40px] px-4 
         text-base font-medium text-[#959cb1]
         sm:px-8`}
      >
        <Row
          className="flex-col gap-8 md:flex-row md:gap-0"
          data-aos="fade-up"
          data-aos-once="true"
        >
          {/* social-links */}

          <RowItem className="w-full sm:mb-6 sm:w-6/12 lg:mb-0 lg:w-3/12">
            <NavLink
              to="/"
              className="mb-4 inline-block text-black dark:text-amber-500 md:mb-8"
            >
              <span>Exsaverse</span>
            </NavLink>

            <p className="mb-9 font-medium">
            Exsaverse is safest marketplace for buying and selling any whitelist, we always put transparecy in every trade.
            </p>

            <ul className="flex space-x-4">
              <li>
                <Link
                  className={`${footerLinksHoverClass}`}
                  to="/"
                  target="_blank"
                >
                  <FaFacebookF />
                </Link>
              </li>
              <li>
                <Link
                  className={`${footerLinksHoverClass}`}
                  to="/"
                  target="_blank"
                >
                  <FaTwitter />
                </Link>
              </li>
              <li>
                <Link
                  className={`${footerLinksHoverClass}`}
                  to="/"
                  target="_blank"
                >
                  <FaYoutube />
                </Link>
              </li>
              <li>
                <Link
                  className={`${footerLinksHoverClass}`}
                  to="/"
                  target="_blank"
                >
                  <FaLinkedin />
                </Link>
              </li>
            </ul>
          </RowItem>

          {/* social-links */}

          {/* useful-links */}

          <RowItem className="w-full sm:w-6/12  lg:w-3/12 ">
            <FooterLinkTitle>Useful Links</FooterLinkTitle>

            <ul className="space-y-2">
              <li>
                <NavLink to="https://twitter.com/evetixx" className={`${footerLinksHoverClass}`}>
                  Twitter
                </NavLink>
              </li>
              <li>
                <NavLink to="https://discord.gg/exsaverse" className={`${footerLinksHoverClass}`}>
                  Discord
                </NavLink>
              </li>
              <li>
                <NavLink to="https://github.com/kdelia12" className={`${footerLinksHoverClass}`}>
                  Github
                </NavLink>
              </li>
            </ul>
          </RowItem>

          {/* useful-links */}

          {/* terms */}

          {/* <RowItem className="w-full sm:w-6/12  lg:w-3/12">
            <FooterLinkTitle>Terms</FooterLinkTitle>

            <ul className="space-y-2">
              <li>
                <NavLink to="tos" className={`${footerLinksHoverClass}`}>
                  TOS
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="privacypolicy"
                  className={`${footerLinksHoverClass}`}
                >
                  Privacy Policy
                </NavLink>
              </li>
              <li>
                <NavLink
                  to="refundpolicy"
                  className={`${footerLinksHoverClass}`}
                >
                  Refund Policy
                </NavLink>
              </li>
            </ul>
          </RowItem> */}

          {/* terms */}

          {/* support & help */}

          <RowItem className="w-full sm:w-6/12  lg:w-3/12">
            <FooterLinkTitle>Support & Help</FooterLinkTitle>

            <ul className="space-y-2">
              <li>
                <NavLink
                  to="https://discord.com/channels/870332854721212416/952533896854143019/1097877325439320094"
                  className={`${footerLinksHoverClass}`}
                >
                  Open Support Ticket
                </NavLink>
              </li>
              <li>
                <NavLink to="termsofuse" className={`${footerLinksHoverClass}`}>
                  Terms of Use
                </NavLink>
              </li>
              <li>
                <NavLink to="about" className={`${footerLinksHoverClass}`}>
                  About
                </NavLink>
              </li>
            </ul>
          </RowItem>

          {/* support & help */}
        </Row>
      </Container>

      {/* scroll to top button */}

      {isVisible && (
        <Button
          onClick={handleScrollToTop}
          className="z-98 fixed right-4 bottom-4"
          size="sm"
          rounded="lg"
          variant="primary"
        >
          <FaChevronUp />
        </Button>
      )}

      {/* scroll to top button */}
    </footer>
  );
};

export default Footer;

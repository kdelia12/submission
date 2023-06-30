import Hero from "../components/Hero";
import MainFeatures from "../components/MainFeatures";
import Lastsales from "../components/lastsales";
import HelpVideo from "../components/HelpVideo";
import Companies from "../components/Companies";
import About from "../components/About";
import Info from "../components/Info";
import Reviews from "../components/Reviews";
import Blog from "../components/Blog";
import Pricing from "../components/Pricing";
import Support from "../components/Support";
import Teams from "../components/Team";
// import Totalholding from "../common/Totalholding";

const Home = () => {
  return (
    <>
      <Hero />
      <HelpVideo />
      <Companies />
      <MainFeatures />
      {/* <Totalholding /> */}
      <About />
      <Info />
      {/* <Reviews />
      <Lastsales />
      <Pricing />
      <Teams /> */}
      <Support />
    </>
  );
};

export default Home;

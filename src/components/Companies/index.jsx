import React from "react";
import { Link } from "react-router-dom";
import SectionTitleContainer from "../../common/SectionTitleContainer";

import Container from "../../common/Container";

import CompanyImage1 from "../../assets/partnership/eogold.png";
import CompanyImage2 from "../../assets/partnership/ineargold.png";
import CompanyImage3 from "../../assets/partnership/linkedgold.png";
import CompanyImage4 from "../../assets/partnership/segsdao.png";
import CompanyImage5 from "../../assets/partnership/stressgold.png";
import CompanyImage6 from "../../assets/partnership/unitygold.png";

const imageLinkHoverClass =
  "object-cover grayscale transition-all duration-300 ease-in-out hover:grayscale-0 lg:max-w-[130px]";
const Companies = () => {
  return (
    <section className="companies section-spacing dark:bg-black">
      <Container>
        <SectionTitleContainer>
          <h2 className="section-title mb-2">Partners</h2>
        </SectionTitleContainer>

        {/* wrapper */}
        <div
          data-aos="fade-up"
          data-aos-once="true"
          className="flex flex-wrap items-center justify-center gap-8 rounded-lg p-8"
        >
          <Link
            to="https://twitter.com/eocommunity_"
            target="_blank"
            className={`w-22 h-32 flex items-center justify-center ${imageLinkHoverClass}`}
          >
            <img src={`${CompanyImage1}`} alt="uideck" />
          </Link>
          <Link
            to="https://twitter.com/ineardao"
            target="_blank"
            className={`w-22 h-32 flex items-center justify-center ${imageLinkHoverClass}`}
          >
            <img src={`${CompanyImage2}`} alt="tailgrids" />
          </Link>
          <Link
            to="https://twitter.com/LinkedCo"
            target="_blank"
            className={`w-22 h-32 flex items-center justify-center ${imageLinkHoverClass}`}
          >
            <img src={`${CompanyImage3}`} alt="lineicons" />
          </Link>
          <Link
            to="https://twitter.com/segs_dao"
            target="_blank"
            className={`w-22 h-32 flex items-center justify-center ${imageLinkHoverClass}`}
          >
            <img src={`${CompanyImage4}`} alt="ayroui" />
          </Link>
          <Link
            to="hhttps://twitter.com/StressCapitals"
            target="_blank"
            className={`w-22 h-32 flex items-center justify-center ${imageLinkHoverClass}`}
          >
            <img src={`${CompanyImage5}`} alt="plainadmin" />
          </Link>
          <Link
            to="https://twitter.com/unityacademy__?s=21"
            target="_blank"
            className={`w-20 h-32 flex items-center justify-center ${imageLinkHoverClass}`}
          >
            <img src={`${CompanyImage6}`} alt="plainadmin" />
          </Link>
        </div>
        {/* end wrapper */}
      </Container>
    </section>
  );
};
export default Companies;
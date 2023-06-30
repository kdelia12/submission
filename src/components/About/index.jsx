import { TiTick } from "react-icons/ti";

import Container from "../../common/Container";
import Row, { RowItem } from "../../common/Row";

import AboutImage from "../../assets/images/about-image.svg";

const aboutInfo = [
  { desc: "Fast Learner" },
  { desc: "Secure" },
  { desc: "Worker" },
  { desc: "Never gonna give you up" },
  { desc: "Experienced Web3 Builder" },
  { desc: "Community Friendly" },
];

const About = () => {
  return (
    <section id="about" className="section-spacing dark:bg-black">
      <Container>
        <Row>
          <RowItem
            data-aos="fade-up"
            data-aos-duration="700"
            data-aos-once="true"
            className="mb-10 w-full sm:mb-0 md:w-6/12"
          >
            <h2 className="mb-4 text-[1.953rem] font-bold dark:text-amber-500">
              Building for trust, and the community.
            </h2>

            <p className="mb-10 font-medium">
              Lorem Ipsum balk bla bla
            </p>

            <ul className="space-y-2 sm:columns-2">
              {aboutInfo.map((info, index) => (
                <li
                  className="flex items-center font-medium text-[#959cb1]"
                  key={index}
                >
                  <span className="mr-4 rounded-md bg-blue-200 p-2 text-blue-500">
                    <TiTick />
                  </span>
                  {info.desc}
                </li>
              ))}
            </ul>
          </RowItem>

          <RowItem
            data-aos="fade-up"
            data-aos-once="true"
            data-aos-duration="700"
            className="w-full md:w-6/12"
          >
            <picture>
              <img src={`https://storage.googleapis.com/gweh/photo_2023-05-28_08-32-51.jpg`} alt="about-image" />
            </picture>
          </RowItem>
        </Row>
      </Container>
    </section>
  );
};

export default About;

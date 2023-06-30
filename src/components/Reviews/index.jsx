import tw from "twin.macro";

import { AiFillStar } from "react-icons/ai";

import Container from "../../common/Container";
import SectionTitleContainer from "../../common/SectionTitleContainer";
import Row, { RowItem } from "../../common/Row";

import AuthorImage1 from "../../assets/images/author-01.png";
import AuthorImage2 from "../../assets/images/author-02.png";
import AuthorImage3 from "../../assets/images/author-03.png";

const starFillColor = "text-yellow-400";

const TeamsInfo = [
  {
    ratings: (
      <>
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
      </>
    ),
    desc: "@EXSAVERSE is a godly mm. you can trust him with your networth. don,t worry you in safe hands",
    authorName: "Vilgax#8804",
  },
  {
    ratings: (
      <>
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
      </>
    ),
    desc: "Thanks for the smooth and secured transaction 🤝 highly recommended @EXSAVERSE",
    authorName: "WAR#0597",
  },
  {
    ratings: (
      <>
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
      </>
    ),
    desc: "Always 🐐 @EXSAVERSE and he gives me reward 0.1 solana extra love you broo ❤❤ and tq @Milufie💫 too",
    authorName: "stuward#6393",
  },
  {
    ratings: (
      <>
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
      </>
    ),
    desc: "Thanks for the smooth and secured transaction 🤝 highly recommended @EXSAVERSE",
    authorName: "@CryptoTraderRai",
  },
  {
    ratings: (
      <>
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
      </>
    ),
    desc: "For exsaverse - The discord is organized and i <3 main prob is lack of sellers since the competitor still having like 60-70% of market share.",
    authorName: "@JonnyyFake",
    authorPosition: "Founder @UIdeck",
  },
  {
    ratings: (
      <>
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
      </>
    ),
    desc: "I rented a node for mint on @exsaverse(the best WL Marketplace🔥)",
    authorName: "@kxngan1",
    authorPosition: "Founder @Lineicons",
  },{
    ratings: (
      <>
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
      </>
    ),
    desc: "Shout out to @exsaverse for the easy WL purchasing they did - my first time buying WL in a while",
    authorName: "@CryptoTraderRai",
  },
  {
    ratings: (
      <>
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
      </>
    ),
    desc: "Zeeeb Mhanxxx",
    authorName: "Asep Bensin",
    authorPosition: "Founder @UIdeck",
  },
  {
    ratings: (
      <>
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
        <AiFillStar className={`${starFillColor}`} />
      </>
    ),
    desc: "Zeeeb Mhanxxx",
    authorName: "Dimas Solar",
    authorPosition: "Founder @Lineicons",
  },
];

const AuthorName = tw.h5`
  pl-1 text-[1 rem] font-bold text-black dark:text-amber-500`;

const AuthorPosition = tw.span`block text-[0.8rem] font-normal text-[#959CB1]`;

const AuthorWrapper = tw.div`flex`;

const ReviewRating = tw.div`mb-6 inline-flex gap-2`;

const TeamsDesc = tw.div`dark:text-amber-500`;

const Divider = tw.span`my-4 block h-[0.5px] bg-[#959cb1]`;

const Teams = () => {
  return (
    <section className="section-spacing bg-[#F9FAFF] dark:bg-black">
  <Container>
    <SectionTitleContainer className="mb-14 text-center">
      <h2 className="section-title mb-2">What Our Users Says</h2>
      <p>
        Lorem ipsum bla bla bla
      </p>
    </SectionTitleContainer>

    <Row>
      {TeamsInfo.map((review, index) => (
        <RowItem
          key={index}
          className="mb-8 w-full sm:w-1/2 lg:w-1/4 px-4"
        >
          <article
            className={`
              h-full rounded-md bg-white py-8 px-4 pt-4
              text-[#959CB1] shadow-lg
              dark:bg-[#1d2144]`}
          >
            <ReviewRating>{review.ratings}</ReviewRating>

            <TeamsDesc>{review.desc}</TeamsDesc>

            <Divider></Divider>

            <AuthorWrapper>
              <picture>
                <img src={review.authorImg} alt="" />
              </picture>

              <AuthorName>
                {review.authorName}
                <AuthorPosition>{review.authorPosition}</AuthorPosition>
              </AuthorName>
            </AuthorWrapper>
          </article>
        </RowItem>
      ))}
    </Row>
  </Container>
</section>

  );
};

export default Teams;

  import tw from "twin.macro";

  import { NavLinkButton } from "../../common/Button";
  import Container from "../../common/Container";
  import Row, { RowItem } from "../../common/Row";
  import SectionTitleContainer from "../../common/SectionTitleContainer";

  const PricingInfo = [
    {
      plan: "Basic",
      pricing: "$50/mo",
      desc: "Use our marketplace bots 1 month in your dao discord server.",
      features: [
        "All Functional",
        "Use with Unlimited Quota",
        "Commercial Use",
        "24/7 Support",
      ],
    },
    {
      plan: "Plus",
      pricing: "$125/3mo",
      desc: "Use our marketplace bots 3 months in your discord server.",
      features: [
        "All Functional",
        "Use with Unlimited Quota",
        "Commercial Use",
        "24/7 Support",
      ],
    },
  ];

  const Header = tw.div`mb-4 flex justify-between font-bold dark:text-amber-500`;

  const Divider = tw.div`h-[0.5px] bg-slate-500`;

  const Pricing = () => {
    return (
      <section id="pricing" className="section-spacing dark:bg-black">
    <Container className="flex flex-col items-center">
      <SectionTitleContainer className="mb-14">
        <h2 className="section-title">Wanna Try Our Bot?</h2>
        <p>
          We rent our bot so you can add to your server bla bla bla
        </p>
      </SectionTitleContainer>

      <Row>
        {PricingInfo.map(({ pricing, plan, features, desc }, index) => (
          <RowItem className="w-full sm:w-1/2" key={index}>
            <article
              className="mb-8 rounded-lg py-6 px-4 shadow-lg dark:bg-[#1D2144]"
            >
              <Header>
                <h3 className="text-[1.728rem]">
                  {pricing}
                </h3>

                <h4 className="text-[1.2rem]">{plan}</h4>
              </Header>

              <p className="mb-4">{desc}</p>

              <NavLinkButton
                to="https://discord.com/channels/870332854721212416/952533896854143019"
                className="mb-8 block w-full text-center"
                variant="primary"
                rounded="lg"
              >
                Contact Us
              </NavLinkButton>

              <Divider></Divider>

              <ul className="mt-8 space-y-2 text-[#959cb1]">
                {features.map((feature, index) => (
                  <li key={index}>{feature}</li>
                ))}
              </ul>
            </article>
          </RowItem>
        ))}
      </Row>
    </Container>
  </section>
    );
  };

  export default Pricing;

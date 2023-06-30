import tw from "twin.macro";

import Row, { RowItem } from "../../common/Row";
import Container from "../../common/Container";
import Button from "../../common/Button";
import Input from "../../common/Input";
import TextArea from "../../common/TextArea";
import { LinkButton } from "../../common/Button";

const TicketFormContainer = tw.article`p-8 bg-[#F9FAFF] rounded-lg dark:bg-[#1D2144]`;
const NewsLetterContainer = tw.article`p-8 bg-[#F9FAFF] rounded-lg dark:bg-[#1D2144]`;

const Support = () => {
  return (
    <section
      id="support"
      className="section-spacing dark:bg-black dark:text-amber-500"
    >
      <Container>
        <Row className="gap-8 md:gap-0">
          <RowItem className="mb-2 w-full lg:mb-0 lg:w-8/12">
            <TicketFormContainer>
              <h4 className="mb-2 text-[1.563rem] font-bold">
                Need Help? Open a Ticket
              </h4>

              <p className="mb-8">
                Ill reply there, well its my community server but ill be there :D.
              </p>
              <LinkButton variant="secondary" rounded="lg">
              Join Discord
            </LinkButton>

            </TicketFormContainer>
          </RowItem>

          <RowItem className="w-full lg:w-4/12">

          </RowItem>
        </Row>
      </Container>
    </section>
  );
};

export default Support;

import { Body, Button, Column, Container, Head, Html, Preview, Row, Section, Text } from "@react-email/components";
import * as React from "react";
import { Logos } from "@evaluation-app/app/components/logos";

export default function Email({ text }: { text: string }) {
  return (
    <Html>
      <Head />
      <Preview>This is a Email send for E2E evaluation.</Preview>
      <Body style={main}>
        <Container style={container}>
          <Section style={logo}>
            <div className="border-b border-[#F2F2F4] px-12 py-16">
              <div className="inline-flex gap-4 rounded-full bg-[#F4F4F5] px-4 py-3">
                <div aria-hidden className="h-6 w-px bg-[#C7C7C8]" />
                <Logos />
              </div>
            </div>
          </Section>
          <Section style={sectionsBorders}>
            <Row>
              <Column style={sectionBorder} />
              <Column style={sectionCenter} />
              <Column style={sectionBorder} />
            </Row>
          </Section>
          <Section style={content}>
            <Text style={paragraph}>Hi,</Text>
            <Text style={paragraph}>Custom Text: {text}</Text>
            <Text style={paragraph}>
              This Email was send from E2E Evaluation App
              <Section className="text-center">
                <Button
                  href={"https://evaluation-app.solaimani.de"}
                  className="bg-brand rounded-lg px-[18px] py-3 text-white"
                >
                  Visit Website
                </Button>
              </Section>
            </Text>
            <Text style={paragraph}>
              Thanks,
              <br />
              Enam Solaimani
            </Text>
          </Section>
        </Container>

        <Section style={footer}>
          <Row>
            <Column align="right" style={{ width: "50%", paddingRight: "8px" }}>
              <a
                href="https://github.com/requireSol"
                target="_blank"
                className="flex items-center gap-2 rounded-full px-3 py-2 text-[0.8125rem] font-medium hover:bg-gray-100"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_29_46773)">
                    <path
                      d="M8 0.197998C3.58 0.197998 0 3.78 0 8.198C0 11.7333 2.292 14.7313 5.47 15.788C5.87 15.8633 6.01667 15.616 6.01667 15.4033C6.01667 15.2133 6.01 14.71 6.00667 14.0433C3.78133 14.526 3.312 12.97 3.312 12.97C2.948 12.0467 2.422 11.8 2.422 11.8C1.69733 11.304 2.478 11.314 2.478 11.314C3.28133 11.37 3.70333 12.138 3.70333 12.138C4.41667 13.3613 5.576 13.008 6.03333 12.8033C6.10533 12.286 6.31133 11.9333 6.54 11.7333C4.76333 11.5333 2.896 10.8453 2.896 7.78C2.896 6.90666 3.206 6.19333 3.71933 5.63333C3.62933 5.43133 3.35933 4.618 3.78933 3.516C3.78933 3.516 4.45933 3.30133 5.98933 4.336C6.62933 4.158 7.30933 4.07 7.98933 4.066C8.66933 4.07 9.34933 4.158 9.98933 4.336C11.5093 3.30133 12.1793 3.516 12.1793 3.516C12.6093 4.618 12.3393 5.43133 12.2593 5.63333C12.7693 6.19333 13.0793 6.90666 13.0793 7.78C13.0793 10.8533 11.2093 11.53 9.42933 11.7267C9.70933 11.9667 9.96933 12.4573 9.96933 13.2067C9.96933 14.2773 9.95933 15.1373 9.95933 15.3973C9.95933 15.6073 10.0993 15.8573 10.5093 15.7773C13.71 14.728 16 11.728 16 8.198C16 3.78 12.418 0.197998 8 0.197998Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_29_46773">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                GitHub
              </a>
            </Column>
            <Column align="left" style={{ width: "50%", paddingLeft: "8px" }}>
              <a
                href="https://twitter.com/requireSol"
                target="_blank"
                className="flex items-center gap-2 rounded-full px-3 py-2 text-[0.8125rem] font-medium hover:bg-gray-100"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 16 16"
                  fill="none"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <g clipPath="url(#clip0_29_46777)">
                    <path
                      d="M12.6007 0.768677H15.054L9.694 6.89534L16 15.2307H11.0627L7.196 10.1747L2.77067 15.2307H0.316L6.04933 8.67734L0 0.769343H5.06267L8.558 5.39068L12.6007 0.768677ZM11.74 13.7627H13.0993L4.324 2.16001H2.86533L11.74 13.7627Z"
                      fill="black"
                    />
                  </g>
                  <defs>
                    <clipPath id="clip0_29_46777">
                      <rect width="16" height="16" fill="white" />
                    </clipPath>
                  </defs>
                </svg>
                X (formally Twitter)
              </a>
            </Column>
          </Row>
          <Row>
            <Text style={{ textAlign: "center", color: "#706a7b" }}>
              <a
                href="https://www.linkedin.com/in/enam-solaimani/"
                target="_blank"
                className="flex items-center gap-2 text-[0.8125rem] font-medium"
              >
                <svg
                  width="16"
                  height="16"
                  viewBox="0 0 200 200"
                  xmlns="http://www.w3.org/2000/svg"
                >
                  <path
                    style={{ fill: "#e42b2b", fillRule: "evenodd" }}
                    d="M100,160.09C89.29,139.22,80.63,133.91,62.74,122c-19.05-12.69-34.5-33.32-27.5-55.6C44.67,36.35,82.83,30.45,100,56c17.17-25.59,55.33-19.69,64.76,10.35,7,22.28-8.45,42.91-27.5,55.6C119.37,133.91,110.71,139.22,100,160.09Z"
                  />
                </svg>
                Enam Solaimani{" "}
                <span className="text-[#5E5F6E]">
                  {new Date().getFullYear()}
                </span>
              </a>
            </Text>
          </Row>
        </Section>
      </Body>
    </Html>
  );
}

const fontFamily = "HelveticaNeue,Helvetica,Arial,sans-serif";

const main = {
  backgroundColor: "#efeef1",
  fontFamily,
};

const paragraph = {
  lineHeight: 1.5,
  fontSize: 14,
};

const container = {
  maxWidth: "580px",
  margin: "30px auto",
  backgroundColor: "#ffffff",
};

const footer = {
  maxWidth: "580px",
  margin: "0 auto",
};

const content = {
  padding: "5px 20px 10px 20px",
};

const logo = {
  display: "flex",
  justifyContent: "center",
  alingItems: "center",
  padding: 30,
};

const sectionsBorders = {
  width: "100%",
  display: "flex",
};

const sectionBorder = {
  borderBottom: "1px solid rgb(238,238,238)",
  width: "249px",
};

const sectionCenter = {
  borderBottom: "1px solid rgb(145,71,255)",
  width: "102px",
};

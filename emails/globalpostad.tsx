import {
  Html,
  Head,
  Preview,
  Body,
  Container,
  Section,
  Img,
  Text,
  Heading,
  Button,
  Row,
  Column,
} from "@react-email/components";

const fontFamily =
  "-apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif";
const genStyle = {
  fontFamily: fontFamily,
};
export default function SingleColumnHiringEmail() {
  return (
    <Html lang="en">
      <Head />
      <Preview>
        Unlock data-driven hiring best practices for building high-performance
        teams.
      </Preview>
      <Body style={{ margin: 0, padding: 0, backgroundColor: "#f5f5f5" }}>
        {/* Header */}
        <Section
          style={{
            backgroundColor: "#00C2CB",
            maxHeight: "100px",
            borderRadius: "0 0 50px 50px",
          }}
        >
          <Container style={{ height: "100px" }}>
            <Row>
              <Column
                style={{ textAlign: "left", height: "100px", width: "100%" }}
              >
                <Img
                  src="https://github.com/Resorsi/assets/blob/main/logo-nobackgroundblack.png?raw=true"
                  alt="Resorsi Logo"
                  style={{ height: "100%", width: "auto" }}
                />
              </Column>
              <Column style={{ height: "150px", width: "100%" }}>
                <Img
                  src="https://github.com/Resorsi/assets/blob/main/imagen1.png?raw=true"
                  alt="Team Illustration"
                  style={{ height: "100%", width: "auto" }}
                />
              </Column>
            </Row>
          </Container>
        </Section>

        {/* Main Content */}
        <Container style={{ backgroundColor: "#ffffff", padding: "20px" }}>
          <Heading
            style={{
              fontSize: "33px",
              color: "#00C2CB",
              fontWeight: "bolder",
              lineHeight: "33px",
              marginBottom: "10px",
              fontFamily: fontFamily,
            }}
          >
            The Science of Hiring: What 85 Years of Research Say About Building
            High-Performance Teams
          </Heading>
          <Text
            style={{
              fontSize: "14px",
              lineHeight: "24px",
              fontFamily: fontFamily,
              fontWeight: "bold",
            }}
          >
            Why Hiring Is Broken
          </Text>
          <Text
            style={{
              fontSize: "14px",
              lineHeight: "24px",
              marginBottom: "10px",
              fontFamily: fontFamily,
            }}
          >
            According to a study by Schmidt and Hunter (1998), despite
            significant investments in recruitment, nearly 50% of hires fail
            within the first 18 months. This high failure rate is largely due to
            continued reliance on outdated methods like intuition, unstructured
            interviews, and high dependence on resume screening—tools that
            research shows have low predictive power. For example, resume
            reviews predict success only about 18% of the time, and gut
            instincts perform even worse. Our clients say that on traditional
            hires they cut about 80% oftheir talent pool based on resumes.
            Science sees it as a royal waste of time.
          </Text>
          <Text
            style={{
              fontSize: "14px",
              lineHeight: "24px",
              marginBottom: "10px",
              fontWeight: "bold",
              fontFamily: fontFamily,
            }}
          >
            Steps to a Data-Driven Process:
          </Text>
          <Text
            style={{
              fontSize: "14px",
              lineHeight: "24px",
              margin: "10px 0",
              fontFamily: fontFamily,
            }}
          >
            <li style={genStyle}>
              List the 3 critical hard skills for success.
            </li>
            <li style={genStyle}>
              Pre-screen candidates with skill-based assessments.
            </li>
            <li style={genStyle}>
              Conduct structured interviews and work samples for top 10–20%.
            </li>
          </Text>

          <Text
            style={{
              fontSize: "14px",
              lineHeight: "24px",
              marginBottom: "10px",
              fontWeight: "bold",
              ...genStyle,
            }}
          >
            Key Predictors:
          </Text>
          <Text
            style={{
              fontSize: "14px",
              lineHeight: "24px",
              marginBottom: "10px",
              ...genStyle,
            }}
          >
            • General Mental Ability (GMA) Tests{"\n"}• Structured Interviews
            {"\n"}• Work Samples
          </Text>

          <Text
            style={{
              fontSize: "14px",
              lineHeight: "24px",
              marginBottom: "20px",
              ...genStyle,
            }}
          >
            Our process has driven a 90%+ retention rate for clients using these
            evidence-based methods.
          </Text>
        </Container>

        {/* Footer CTA */}
        <Section
          style={{
            backgroundColor: "#00C2CB",
            maxHeight: "100px",
            borderRadius: "50px 50px 0 0",
          }}
        >
          <Container style={{ height: "100px" }}>
            <Row>
              <Column
                style={{ textAlign: "left", height: "100px", width: "100%" }}
              >
                <Text
                  style={{
                    color: "#ffffff",
                    fontSize: "20px",
                    marginBottom: "10px",
                    fontWeight: "bold",
                    ...genStyle,
                  }}
                >
                  Want to talk about your screening process?
                </Text>
              </Column>
              <Column style={{ height: "150px", width: "100%" }}>
                <Button
                  style={{
                    width: "130px",
                    textAlign: "center",
                    padding: "10px 20px",
                    backgroundColor: "#ffffff",
                    color: "#00C2CB",
                    fontWeight: "bold",
                    textDecoration: "none",
                    borderRadius: "60px",
                    ...genStyle,
                  }}
                  href="https://example.com/screening"
                >
                  Click Here
                </Button>
              </Column>
            </Row>
          </Container>
        </Section>
      </Body>
    </Html>
  );
}

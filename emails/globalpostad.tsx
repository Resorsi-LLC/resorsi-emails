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
  Markdown,
  Hr,
} from "@react-email/components";
import { CSSProperties } from "react";

const fontFamily =
  "'Montserrat', -apple-system, BlinkMacSystemFont, 'Segoe UI', 'Roboto', 'Oxygen', 'Ubuntu', 'Cantarell', 'Fira Sans', 'Droid Sans', 'Helvetica Neue', sans-serif";
const genStyle = {
  fontFamily: fontFamily,
};
const paragraphStyle: CSSProperties = {
  fontSize: "14px",
  lineHeight: "24px",
  marginBottom: "10px",
  padding: "0",
  margin: "0",
  fontWeight: "bolder",
  ...genStyle,
};
const paragraphStyle2: CSSProperties = {
  fontSize: "14px",
  lineHeight: "24px",
  marginBottom: "10px",
  padding: "0",
  margin: "0",
  ...genStyle,
};
const headingStyle: CSSProperties = {
  fontSize: "33px",
  color: "#00C2CB",
  fontWeight: "bolder",
  lineHeight: "33px",
  marginBottom: "10px",
  fontFamily: fontFamily,
};

const heading3Style: CSSProperties = {
  fontSize: "25px",
  color: "#00C2CB",
  fontWeight: "bolder",
  lineHeight: "30px",
  marginBottom: "10px",
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
        <Container
          style={{
            backgroundColor: "#ffffff",
            width: "100%",
            maxWidth: "700px",
          }}
        >
          <Section
            style={{
              backgroundColor: "#00C2CB",
              borderRadius: "0 0 40px 40px",
            }}
          >
            <Container style={{ height: "100px", width: "100%", maxWidth: "700px", padding: "0 20px" }}>
              <Row>
                <Column
                  style={{ textAlign: "left", height: "100px", width: "100%" }}
                >
                  <Img
                    src="https://wuoirshnpbhzzuxhtime.supabase.co/storage/v1/object/public/assets//logo-nobackgroundblack.png"
                    alt="Resorsi Logo"
                    style={{ height: "100%", width: "auto" }}
                  />
                </Column>
                <Column
                  style={{ height: "150px", width: "100%", textAlign: "right" }}
                >
                  <Img
                    src="https://wuoirshnpbhzzuxhtime.supabase.co/storage/v1/object/public/assets//globalpostad.png"
                    alt="Team Illustration"
                    style={{ height: "100%", width: "auto" }}
                  />
                </Column>
              </Row>
            </Container>
          </Section>

          {/* Main Content */}
          <Container
            style={{
              backgroundColor: "#ffffff",
              padding: "0px 40px 0px 40px",
              maxWidth: "700px",
            }}
          >
            <Heading style={headingStyle}>
              The Science of Hiring: What 85 Years of Research Say About
              Building High-Performance Teams
            </Heading>
            <Text
              style={{
                fontSize: "14px",
                lineHeight: "24px",
                fontFamily: fontFamily,
                fontWeight: "bold",
                marginBottom: "0px",
              }}
            >
              Why Hiring Is Broken
            </Text>
            <Text
              style={{
                fontSize: "14px",
                lineHeight: "24px",
                marginBottom: "10px",
                marginTop: "0px",
                fontFamily: fontFamily,
              }}
            >
              According to a study by Schmidt and Hunter (1998), despite
              significant investments in recruitment, nearly 50% of hires fail
              within the first 18 months. This high failure rate is largely due
              to continued reliance on outdated methods like intuition,
              unstructured interviews, and high dependence on resume
              screening—tools that research shows have low predictive power. For
              example, resume reviews predict success only about 18% of the
              time, and gut instincts perform even worse. Our clients say that
              on traditional hires they cut about 80% of their talent pool based
              on resumes. Science sees it as a royal waste of time.
            </Text>
            <Text style={paragraphStyle}>
              Here’s a quick article to further make our case: Forbes article:
              70% of applicants admit admit to lying on their resumes{" "}
              <a href="https://resumelab.com/career-advice/lying-to-get-a-job">
                (Click here)
              </a>
            </Text>
            <Heading as="h3" style={heading3Style}>
              So, What Actually Predicts Performance? (While Keeping the Process
              Clean)
            </Heading>
            <Text
              style={{
                fontSize: "14px",
                lineHeight: "24px",
                marginBottom: "10px",
                fontWeight: "bold",
                fontFamily: fontFamily,
              }}
            >
              Start with low-effort, high-validity tests, then gradually
              increase candidate effort while using high validity predictors
            </Text>
            <Text style={genStyle}>
              Too vague? Here’s a better explanation:
            </Text>
            <ol style={{ fontFamily: fontFamily }}>
              <li>
                <Text style={paragraphStyle2}>
                  List the top 3 most critical hard skills someone in the role
                  needs to succeed. Forget the “curse word” soft skills—they’re
                  nice to have, but they don’t belong at the top of the funnel).
                </Text>
              </li>
              <li>
                <Text style={paragraphStyle2}>
                  Test for those 3 skills. No yes/no questions allowed).
                </Text>
              </li>
              <li>
                <Text style={paragraphStyle2}>
                  Stage one should assess cognitive ability in the context of
                  your 3 core competencies. Ask for just 30 minutes of the
                  candidate’s time. Automate grading. Keep only the top 10–20%
                  (depending on your pool size).
                </Text>
              </li>
            </ol>

            <Text style={paragraphStyle}>
              Now you’re finally ready to use resumes—for structured interviews.
            </Text>
            <Text
              style={{
                fontSize: "14px",
                lineHeight: "24px",
                marginBottom: "10px",
                ...genStyle,
              }}
            >
              Every applicant gets the same set of questions. Here's a look at
              how we approach it (with the resume as our guide):
            </Text>

            <ul style={{ fontFamily: fontFamily }}>
              <li>
                <Text style={paragraphStyle2}>
                  <strong>Technical Skills:</strong> Rate their familiarity with
                  relevant tools on a 1–3 scale.
                </Text>
              </li>
              <li>
                <Text style={paragraphStyle2}>
                  <strong> Work Experience:</strong> For their last 3 jobs, ask:
                </Text>
                <ul>
                  <li>
                    <Text style={paragraphStyle2}>How did you get the job</Text>
                  </li>
                  <li>
                    <Text style={paragraphStyle2}>What did you do?</Text>
                  </li>
                  <li>
                    <Text style={paragraphStyle2}>Why did you leave?</Text>
                  </li>
                </ul>
              </li>
              <li>
                <Text style={paragraphStyle2}>
                  <strong>Motivation & Fit:</strong>
                </Text>
                <ul>
                  <li>
                    <Text style={paragraphStyle2}>
                      Why are you interested in this role
                    </Text>
                  </li>
                  <li>
                    <Text style={paragraphStyle2}>
                      Where do you see yourself in 1 year? In 3 years?
                    </Text>
                  </li>
                </ul>
              </li>
            </ul>
            <Text style={paragraphStyle2}>
              These 30-minute interviews help us assess real-world experience,
              role knowledge, and candidate integrity. We must attach a number
              to everything we do here. Top performers move on, the rest receive
              a “thanks for applying” email.{" "}
            </Text>
            <Text style={paragraphStyle2}>
              Final stages are where you can bring in soft skills and a work
              sample. You already tested your non negociables so you are safe in
              terms of core competencies. This process will set you up for
              success.
            </Text>
            <Heading as="h3" style={heading3Style}>
              We didn’t make this up!
            </Heading>
            <Text style={paragraphStyle2}>
              The landmark study by Schmidt & Hunter shed light on the factors
              that truly predict job performance. According to their research,
              the following tools are the most effective:
            </Text>
            <ul style={{ fontFamily: fontFamily }}>
              <li>
                <Text style={paragraphStyle}>
                  General Mental Ability (GMA) Test
                </Text>
              </li>
              <li>
                <Text style={paragraphStyle}>Structured Interviews</Text>
              </li>
              <li>
                <Text style={paragraphStyle}>Work Samples</Text>
              </li>
            </ul>
            <Heading as="h3" style={heading3Style}>
              How Resorsi Applies this
            </Heading>
            <Text style={paragraphStyle2}>
              At Resorsi, we have effectively built our LATAM talent pipeline by
              leveraging these research findings. Our candidates undergo pre-
              screening with validated assessments, structured interviews, and
              role- fit diagnostics.
            </Text>
            <Text style={{ ...paragraphStyle2, padding: "10px 0" }}>
              As a result, we achieve a retention rate of over 90% for the
              companies we support.
            </Text>
            <Text style={paragraphStyle2}>
              Want to see how the system works? By adopting this evidence-based
              approach, your organization can transform its hiring process and
              build high-performance teams that drive success.
            </Text>
          </Container>
          {/* Footer CTA */}
          <Section
            style={{
              backgroundColor: "#00C2CB",
              maxHeight: "100px",
              borderRadius: "40px 40px 0 0",
              padding: "20px",
              marginTop: "20px",
            }}
          >
            <Container style={{ padding: "0 20px" }}>
              <Row>
                <Column style={{ textAlign: "left", width: "100%" }}>
                  <Text
                    style={{
                      color: "#ffffff",
                      fontSize: "18px",
                      marginBottom: "10px",
                      fontWeight: "bold",
                      ...genStyle,
                    }}
                  >
                    Want to talk about your screening process?
                  </Text>
                </Column>
                <Column style={{ width: "100%" }}>
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
        </Container>
      </Body>
    </Html>
  );
}

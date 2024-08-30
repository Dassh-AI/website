import { Anchor, Box, Button, Container, Grid, Image, Paper, Text } from "@mantine/core";
import "../styles/pages/home.css";
import ShowcaseCard from "../components/pages/home/Card";
import FeatureCard from "../components/pages/home/FeatureCard";
import Footbar from "../components/layout/footbar";
import Navbar from "../components/layout/navbar";
import { color } from "../contants/color";

const SHOWCASE_DATA = [
  {
    tag: "Talent Acquisition",
    title: (
      <>
        I Want to Test
        <br />
        Candidates Before Hiring
      </>
    ),
    description: (
      <>
        Ensure you’re hiring the best fit for your team with our AI-powered
        psychometric tests. Quickly assess candidates' traits and
        decision-making skills to make informed hiring decisions with
        confidence.
      </>
    ),
  },
  {
    tag: "Talent Development",
    title: (
      <>
        I Want to Test Current <br /> Employees for Training
      </>
    ),
    description: (
      <>
        Identify growth opportunities within your team using our AI-powered
        psychometric tests. Assess your employees' strengths and areas for
        improvement to tailor training programs that drive their success.
      </>
    ),
  },
];

const FEATURE_DATA = [
  {
    title: "Identify traits for<br/> any job",
    description: (
      <>
        Our AI pinpoints the key traits needed for any job, ensuring a perfect
        fit by aligning personality with role requirements.
      </>
    ),
    link_text: "Try it for free",
    features: [
      "Evaluate Job in 1 min",
      "Identify trait for any profile",
      "Choose traits for test generation",
      "Classified traits for easy mapping",
    ],
  },
  {
    title: "Generate Test Personalised<br/> to the Job Role",
    description: (
      <>
        Create tailored tests for any job role, with questions designed to match
        the specific traits and skills needed for success.
      </>
    ),
    link_text: "Generate for free",
    features: [
      "Get reliable tests within seconds",
      "AI conversation like ChatGPT",
      "Open-ended SJT questions",
      "Test duration is less than 30 mins",
    ],
  },
  {
    title: "In-Depth analysis with<br/> highly trained AI",
    description: (
      <>
        Our AI analyses responses in real-time and asks follow-up questions to
        provide a deeper, more insightful analysis.
      </>
    ),
    link_text: "Get more info",
    features: [
      "Detailed report on the traits",
      "Secured report for your eyes only",
      "Removes bias for accurate report",
      "Visuals to understand the report",
    ],
  },
];

const Home = () => {
  return (
    <section className='main'>
      {/* header */}
      <Navbar />
      <Container fluid pb={75} pt={60} className='main-container'>
        {/* Hero Section */}
        <Paper radius={50}>
          <Grid>
            <Grid.Col span={{ base: 12, md: 7 }} p={0}>
              <Box className='hero-card-left-top'>
                <Text className='hero-title'>
                  <span
                    className='text-typewriter'
                    style={{
                      whiteSpace: "pre",
                      display: "block",
                    }}
                  >
                    Test Yourself.
                  </span>
                  <span
                    className='text-typewriter'
                    style={{
                      whiteSpace: "pre",
                      display: "block",
                      animationDelay: "2.8s",
                    }}
                  >
                    Improve Yourself.
                  </span>
                </Text>
                <Text className='text-typewriter'
                  style={{
                    whiteSpace: "pre",
                    display: "block",
                    animationDelay: "4.8s",
                    fontSize: "14px",
                    fontWeight: 500,
                  }}
                  c={color.green}>

                  Behavioural analysis powered by GenAI

                </Text>
              </Box>
              <Box className='hero-card-left-bottom'>
                <Text className='hero-description  animate__animated animate__fadeInUp'>
                  Our{" "}
                  <span className='hero-description-bold'>
                    AI-powered psychometric tests
                  </span>{" "}
                  are made just for you. Get personalised insights, whether
                  you're looking for a new job or trying to grow in your career.
                  individuals
                </Text>
                <Button className="tryFreeButton" size={"sm"} px={12} h={30} color={"#F8E805"}>
                  <Anchor c={color.green} fw={600} href={"https://dev.dassh.xyz"} target="_blank">Try for Free</Anchor>
                </Button>
              </Box>
            </Grid.Col>

            <Grid.Col span={{ base: 12, md: 5 }} p={0}>
              <Image
                radius='md'
                src='assets/hero.png'
                className='hero-card-right'
              />
            </Grid.Col>
          </Grid>
        </Paper>

        {/* Showcase Section */}
        <Grid mt={65}>
          {SHOWCASE_DATA.map((item, index) => {
            return (
              <Grid.Col span={{ base: 12, md: 6 }} p={0} key={index}>
                <ShowcaseCard
                  tag={item.tag}
                  title={item.title}
                  description={item.description}
                  background={ index%2 ===1 ? "#CBDCBD" : "#F4F5DC"}
                />
              </Grid.Col>
            );
          })}

          <Grid.Col span={{ base: 12, md: 6 }} p={0}></Grid.Col>
        </Grid>

        {/* Feature Section */}

        <Box mt={75}>
          <Text className='section-heading'>Our AI tools helps</Text>

          {FEATURE_DATA.map((item, index) => {
            return (
              <FeatureCard
                key={index}
                title={item.title as string}
                description={item.description}
                features={item.features}
                link_text={item.link_text}
              />
            );
          })}
        </Box>

        {/* Pre Footer */}
        <Text className='pre-footer-text' pt={75}>
          Are you ready to{" "}
          <a  href={"https://dev.dassh.xyz"} target="_blank" className='pre-footer-text-underline'>Transform?</a>
        </Text>
      </Container>
      {/* Footer */}
      <Footbar />
    </section>
  );
};

export default Home;

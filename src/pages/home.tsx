import {
  Box,
  Container,
  Grid,
  Image,
  Paper,
  SimpleGrid,
  Text,
} from "@mantine/core";
import "../styles/pages/home.css";
import ShowcaseCard from "../components/pages/home/Card";
import { IconCircleCheck } from "@tabler/icons-react";
import FeatureCard from "../components/pages/home/FeatureCard";
import Footbar from "../components/layout/footbar";

const SHOWCASE_DATA = [
  {
    tag: "Talent Acquisition",
    title: (
      <>
        I Want to Migrate
        <br />
        to Canada
      </>
    ),
    description: (
      <>
        The pathway to Canadian residency is filled with legal hurdles and piles
        of paperwork. It feels nearly impossible to navigate on your own — and I
        believe you shouldn't have to. <br /> I'll be your trusted ally in
        immigration so that you can live, work, and thrive in Canada.
      </>
    ),
  },
  {
    tag: "Talent Development",
    title: (
      <>
        I Want to Migrate
        <br />
        to Canada
      </>
    ),
    description: (
      <>
        The pathway to Canadian residency is filled with legal hurdles and piles
        of paperwork. It feels nearly impossible to navigate on your own — and I
        believe you shouldn't have to. <br /> I'll be your trusted ally in
        immigration so that you can live, work, and thrive in Canada.
      </>
    ),
  },
];

const FEATURE_DATA = [
  {
    title: <>Identify traits for any job</>,
    description: (
      <>
        From initial applications to your flight arrival, I'll work with you to
        create a completely custom, highly detailed plan to smooth out the
        immigration experience.
      </>
    ),
    features: ["Lorem Ipsum", "Lorem Ipsum"],
  },
  {
    title: <>Identify traits for any job</>,
    description: (
      <>
        From initial applications to your flight arrival, I'll work with you to
        create a completely custom, highly detailed plan to smooth out the
        immigration experience.
      </>
    ),
    features: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
  },
  {
    title: <>Identify traits for any job</>,
    description: (
      <>
        From initial applications to your flight arrival, I'll work with you to
        create a completely custom, highly detailed plan to smooth out the
        immigration experience.
      </>
    ),
    features: ["Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum", "Lorem Ipsum"],
  },
];

const Home = () => {
  return (
    <section className='main'>
      <Container fluid pb={75} pt={10} className='main-container'>
        {/* Hero Section */}
        <Paper radius={50}>
          <Grid>
            <Grid.Col span={{ base: 12, md: 7 }} p={0}>
              <Box className='hero-card-left-top'>
                <Text className='hero-title'>
                  Better HR.
                  <br /> Better Futures.
                </Text>
              </Box>
              <Box className='hero-card-left-bottom'>
                <Text className='hero-description  animate__animated animate__fadeInUp'>
                  I help{" "}
                  <span className='hero-description-bold'>individuals</span>{" "}
                  navigate the immigration process and{" "}
                  <span className='hero-description-bold'>businesses</span>{" "}
                  solve complex people problems through personalized HR
                  consulting services.
                </Text>
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
                title={item.title}
                description={item.description}
                features={item.features}
              />
            );
          })}
        </Box>

        {/* Pre Footer */}
        <Text className='pre-footer-text' pt={75}>
          Are you ready to{" "}
          <span className='pre-footer-text-underline'>Transform?</span>
        </Text>
      </Container>
      {/* Footer */}
      <Footbar />
    </section>
  );
};

export default Home;

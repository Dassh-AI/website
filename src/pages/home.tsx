import {
  Box,
  Button,
  Container,
  Group,
  Paper,
  Text,
} from "@mantine/core";
import "../styles/pages/home.css";
import Footbar from "../components/layout/footbar";
import Navbar from "../components/layout/navbar";
import { color } from "../contants/color";
// import { TrackingEvents } from "../utils/tracking";
import { CALENDERLY_URL, PORTAL_URL } from "../contants/url";
import useDeviceSize from "../utils/useDeviceSize";
import FeatureSection from "../components/pages/home/FeatureSection";

const feature_section = [
  {
    bgColor: color.dull_green,
    title: "Resume Screening Tool",
    description: [
      "Eliminate the manual labour of screening and shortlisting applicants for the job.",
      "Find the appropriate set of applicants for the role by running a",
      "custom query on the multiple CVs",
    ],
    buttons: [
      {
        variant: "filled",
        bg: color.green,
        textColor: color.white,
        text: "Get Started",
        link: CALENDERLY_URL,
      },
      {
        variant: "outline",
        bg: color.green,
        textColor: color.green,
        text: "Explore",
        link: PORTAL_URL,
      },
    ],
    images: [
      "/assets/feature/smart_screening_1.png",
      "/assets/feature/hiring_tracker_2.png",
    ] as [string, string],
    features: [
      "Keyword matching",
      "Context based screening",
      "Application Tracking System (ATS)",
    ],
  },
  {
    bgColor: color.light_yellow,
    title: "Behaviour Analysis Tool",
    description: [
      "Dassh's AI couples with human intelligence to perform near accurate",
      "analysis of on-the-job behaviours. It generates follow-up questions based",
      "on real-time responses for personalised assessments.",
    ],
    buttons: [
      {
        variant: "filled",
        bg: color.green,
        textColor: color.white,
        text: "Get Started",
        link: CALENDERLY_URL,
      },
      {
        variant: "outline",
        bg: color.green,
        textColor: color.green,
        text: "Explore",
        link: PORTAL_URL,
      },
    ],
    images: [
      "/assets/feature/assessment.png",
      "/assets/feature/analysis.png",
    ] as [string, string],
    features: [
      "Job Role Evaluation",
      "Scenario Judgment Questions",
      "In depth Analytics",
    ],
  },
];

const Home = () => {
  const { isMobile } = useDeviceSize();
  return (
    <section className="main">
      {/* header */}
      <Navbar />
      <Container fluid pb={30} pt={60} className="main-container">
        {/* Hero Section */}
        <Paper radius={50} className="hero-section">
          <Box>
            <Text c={color.green} fw={600} className="hero-title">
              Making Hiring Process
            </Text>
            <Text
              className="hero-title"
              c={color.bright_green}
              fw={700}
              mt={isMobile ? -5 : -10}
            >
              Quicker, Smarter
              <span className="hero-title-seperator"> and</span> Less Expensive
            </Text>
          </Box>

          <Box mt={30}>
            <Text className="hero-description">
              Dassh is an AI platform that helps HRs screen CVs and assess
              on-the-job behavioural traits <br />
              to find the right candidate in minutes.
            </Text>
          </Box>

          <Box mt={50}>
            <Group justify="center">
              <Button color={color.yellow}>
                <Text c={color.green} fw={600} fz={18}>
                  Book a Demo
                </Text>
              </Button>
              <Button variant="transparent">
                <Text
                  c={color.light_green}
                  fw={600}
                  fz={18}
                  style={{
                    textDecoration: "underline",
                  }}
                >
                  Try For Free
                </Text>
              </Button>
            </Group>
          </Box>
        </Paper>
      </Container>

      {/* About Us Section */}

      <Paper id="ai-tools-help">
        {feature_section.map((section, index) => (
          <FeatureSection
            key={index}
            bgColor={section.bgColor}
            title={section.title}
            description={section.description}
            buttons={section.buttons}
            images={section.images}
            features={section.features}
          />
        ))}
      </Paper>

      {/* Footer */}
      <Footbar />
    </section>
  );
};

export default Home;

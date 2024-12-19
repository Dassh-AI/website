import { Box, Paper, SimpleGrid, Text } from "@mantine/core";
import Footbar from "../components/layout/footbar";
import Navbar from "../components/layout/navbar";
import { color } from "../contants/color";
import "../styles/pages/pricing.css";
import PricingCard from "../components/card/PricingCard";

const PRICING_DATA = [
  {
    title: "ATS Pro",
    description:
      "Companies who want smart ATS for tracking candidates during hiring process",
    selectText: "Get Started",
    features: [
      "Screen CV based on your criteria",
      "Track candidates in the whole process",
      "Schedule interview from the ATS",
    ],
    pricing: [
      {
        price: "Rs. 12",
        priceSub: "CV",
      },
    ],
  },
  {
    title: "Assessment Pro",
    description:
      "Companies who want to conduct organisation behaviour assessment of the candidate",
    selectText: "Get Started",
    features: [
      "Personalised behaviour analysis assessment",
      "Detailed report of each candidate",
      "Proctoring for the assessment",
      "Whitelist for your company",
    ],
    pricing: [
      {
        price: "Rs. 675",
        priceSub: "Assessment/Candidate",
      },
    ],
  },
  {
    title: "Value",
    tag: "Annually",
    description:
      "Companies who want intelligent CV screening and behaviour assessment tool",
    selectText: "Get Started",
    features: [
      "Everything in ATS Pro",
      "Everything in Assessment Pro",
      "Dedicates Support Team",
    ],
    isPopular: true,
    pricing: [
      {
        title: "300 tests",
        price: "Rs. 1.95L",
      },
      {
        title: "ATS",
        price: "Rs. 12",
        priceSub: "CV",
      },
    ],
  },
  {
    title: "Enterprise",
    description:
      "For companies handling a large volume of CVs for screening or conducting assessments.",
    selectText: "Contact Sales",
    features: [
      "Include everything from Value",
      "Discounted pricing based on volumes. (as low as Rs. 5/CV and Rs. 300/assessment/candidate)",
      "Whitelist for your company",
      "Proctoring for the assessment",
      "Dedicated support teams",
    ],
  },
];

const Pricing = () => {
  return (
    <section className="main">
      {/* header */}
      <Navbar />

      <Paper py={80} px={80}>
        <Box>
          <Text c={color.green} className="title">
            Flexible Pricing built for Dassh AI
          </Text>
          <Text c={color.green} className="sub-title">
            From CV screening to organisational behaviour analysis, we have a
            plan for you.
          </Text>
          <Text c={color.green} className="sub-title-1">
            *For companies with stringent data security, we will lend our AI
            engine to host on your server so as to restrict movement of all data
          </Text>
        </Box>

        <Box mt={60}>
          <SimpleGrid
            cols={{
              xs: 1,
              sm: 2,
              md: 2,
              lg: 3,
              xl: 3,
            }}
          >
            {PRICING_DATA.map((pricing, index) => (
              <Box>
                <PricingCard
                  key={index}
                  title={pricing.title}
                  tag={pricing?.tag}
                  isPopular={pricing?.isPopular}
                  description={pricing.description}
                  selectText={pricing.selectText}
                  features={pricing.features}
                  pricing={pricing.pricing}
                />
              </Box>
            ))}
          </SimpleGrid>
        </Box>
      </Paper>

      {/* Footer */}
      <Footbar />
    </section>
  );
};

export default Pricing;

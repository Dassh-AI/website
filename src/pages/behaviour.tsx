import {
  IconClockFilled,
  IconCurrencyDollar,
  IconSearch,
  IconUserFilled,
} from "@tabler/icons-react";
import Navbar from "../components/layout/navbar";
import ProductPage from "../components/pages/product";
import { color } from "../contants/color";
import "../styles/pages/product.css";
import Footbar from "../components/layout/footbar";
import { CALENDERLY_URL, INTERNAL_URL } from "../contants/url";

const BEHAVIOUR_DATA = {
  title: "AI-driven Behaviour Analysis",
  description: [
    "Dassh's AI identifies the most suitable organisational behavioural traits required for a job to drive exceptional",
    "performance. It then creates scenario-based judgment assessments tailored to candidates, accurately analysing their fit",
    "for the role. Finally, it delivers detailed, easy-to-understand reports to streamline decision-making.",
  ],
  buttons: [
    {
      variant: "filled",
      bg: color.yellow,
      textColor: color.green,
      text: "Get a Demo",
      link: CALENDERLY_URL,
      is_external: true,
    },
    {
      variant: "transparent",
      bg: color.white,
      textColor: color.light_green,
      text: "Choose Your Plan",
      link: INTERNAL_URL.PRICING,
      is_external: false,
    },
  ],
  images: [
    "/assets/product/assessment.png",
    "/assets/product/analysis.png",
  ] as [string, string],
  product_subtitle: `Don't just hire who "can do," hire "who will" do the job and thrive`,
  product_subdescription: [
    "Dassh’s AI is fine-tuned to simulate real-life job challenges, assessing candidates on key organisational behavioural traits.",
    "Dynamic follow-up questions based on live responses ensure every test is unique and highly personalised.",
  ],
  features: [
    {
      icon: <IconUserFilled color={color.green} />,
      title: "No tests are same, hence no cheating",
      description:
        "The assessment is tailored to the job, required traits, and candidate responses. Since candidates are unaware of the traits being evaluated, it eliminates plagiarism, ensuring genuine insights from authentic scenario-based answers.",
    },
    {
      icon: <IconClockFilled color={color.green} />,
      title: "Advanced proctoring mechanism",
      description:
        "The platform enables admins to implement robust proctoring measures, such as preventing tab switching, enabling video monitoring, and more, to ensure candidates are thoroughly and fairly supervised throughout the test.",
    },
    {
      icon: <IconCurrencyDollar color={color.green} />,
      title: "Improved cost per interview",
      description:
        "Minimum monthly fee of the HR/VP who conducts cultural fit interview round runs between $3000 to $10000, whereas our behavioural analysis AI $6 per candidate per assessment. It can save you money by boosting efficiency and quality of hire by more than 70% while covering the cost.",
    },
  ],
  working_title: "How does behaviour analysis work? ",
  working_description: [
    "Organisational behavioural analysis works by studying how individuals within a workplace behave, interact, and perform.",
    "It focuses on understanding the dynamics of employee skills for the job.",
  ],
  working: [
    {
      icon: <IconSearch color={color.green} size={50} />,
      title: "Identify",
      description:
        "Identify organisational behavioural traits required for the job",
    },
    {
      icon: <IconUserFilled color={color.green} size={50} />,
      title: "Assess",
      description:
        "Publish the test and let the candidates give the assessment for behavioural analysis",
    },
    {
      icon: <IconUserFilled color={color.green} size={50} />,
      title: "Analyse",
      description:
        "Examine the candidates with visually appealing and near accurate test report",
    },
  ],
  link: "/",
};

const Behaviour = () => {
  return (
    <section className="main">
      {/* header */}
      <Navbar />

      <ProductPage
        title={BEHAVIOUR_DATA.title}
        description={BEHAVIOUR_DATA.description}
        buttons={BEHAVIOUR_DATA.buttons}
        images={BEHAVIOUR_DATA.images}
        product_subtitle={BEHAVIOUR_DATA.product_subtitle}
        product_subdescription={BEHAVIOUR_DATA.product_subdescription}
        features={BEHAVIOUR_DATA.features}
        working_title={BEHAVIOUR_DATA.working_title}
        working_description={BEHAVIOUR_DATA.working_description}
        working={BEHAVIOUR_DATA.working}
        link={BEHAVIOUR_DATA.link}
      />

      {/* Footer */}
      <Footbar />
    </section>
  );
};

export default Behaviour;

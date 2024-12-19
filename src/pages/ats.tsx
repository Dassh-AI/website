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

const ATS_DATA = {
  title: "Intelligent CV Screening",
  description: [
    "Save effort and cost on screening process by automating it with Dassh's AI. In just a few minutes, analyse resumes and",
    "shortlist the most qualified candidates based on your specific criteria. Dassh,s AI also scores the candidates resume",
    "based on its relevance with the job role and responsibilities.",
  ],
  buttons: [
    {
      variant: "filled",
      bg: color.yellow,
      textColor: color.green,
      text: "Get a Demo",
      link: "/",
    },
    {
      variant: "transparent",
      bg: color.white,
      textColor: color.light_green,
      text: "Choose Your Plan",
      link: "/",
    },
  ],
  images: [
    "/assets/product/screening.png",
    "/assets/product/screening-table.png",
  ] as [string, string],
  product_subtitle: "Save Time, Save Cost, Hire Better",
  product_subdescription: [
    "The Dassh's application tracking system (ATS) helps recruiters streamline their complete recruitment cycle. An integral",
    "part of recruiter's tech stack, an ATS sorts through thousands of CVs to locate competent candidates for an open job role.",
  ],
  features: [
    {
      icon: <IconUserFilled color={color.green} />,
      title: "Brings light to only the topmost candidates with speed",
      description:
        "A fully advanced ATS main goal is to make the selection and recruitment operations more effective by scanning, ranking, and recommending candidates to your clients in the shortest time span",
    },
    {
      icon: <IconClockFilled color={color.green} />,
      title: "Reduces time spent on manual tasks",
      description:
        "An ATS can help you own your productivity game by eliminating all repetitive, manual tasks, thereby allowing you to focus on other strategic tasks at hand. Make use of bulk emailing, resume parser, notes, call logs and email templates to save time.",
    },
    {
      icon: <IconCurrencyDollar color={color.green} />,
      title: "Improved cost per hire",
      description:
        "A recruiter's minimum monthly fee runs between $2000 and $3000, whereas an Applicant Tracking System (ATS) costs between $100 and $150 per user each month. It can save you money by boosting efficiency by more than 5% per month while covering the cost.",
    },
  ],
  working_title: "How does an ATS work?",
  working_description: [
    "An ATS automates the whole hiring process, from creating job advertisements and posting them on different job sites to",
    "screening and sourcing prospects and tracking application statuses",
  ],
  working: [
    {
      icon: <IconSearch color={color.green} size={50} />,
      title: "Scan",
      description:
        "When you run CVs through Dassh’s ATS, it will scan them for specific keywords, context of the job",
    },
    {
      icon: <IconUserFilled color={color.green} size={50} />,
      title: "Sort",
      description:
        "Use the ATS to create candidate hotlists, make comments, mark favourites. This makes sorting and organising a huge number of CVs easy!",
    },
    {
      icon: <IconUserFilled color={color.green} size={50} />,
      title: "Track",
      description:
        "Seamlessly track each candidate throughout the recruiting process and schedule interview with the one that you seem fit",
    },
  ],
  link: "/",
};

const ATS = () => {
  return (
    <section className="main">
      {/* header */}
      <Navbar />

      <ProductPage
        title={ATS_DATA.title}
        description={ATS_DATA.description}
        buttons={ATS_DATA.buttons}
        images={ATS_DATA.images}
        product_subtitle={ATS_DATA.product_subtitle}
        product_subdescription={ATS_DATA.product_subdescription}
        features={ATS_DATA.features}
        working_title={ATS_DATA.working_title}
        working_description={ATS_DATA.working_description}
        working={ATS_DATA.working}
        link={ATS_DATA.link}
      />
      
      {/* Footer */}
      <Footbar />
    </section>
  );
};

export default ATS;

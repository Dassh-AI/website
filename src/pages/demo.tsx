import { Box, Paper, SimpleGrid } from "@mantine/core";
import Footbar from "../components/layout/footbar";
import Navbar from "../components/layout/navbar";
import { useSearchParams } from "react-router-dom";
import ProductCard from "../components/card/ProductCard";
import DemoForm from "../components/form/DemoForm";

const PRODUCTS = {
  ATS: {
    title: "The Intelligent CV Screening Tool",
    points: [
      "Scan through bulk resumes based on keyword and context match",
      "Sort candidates and create group based on specific criteria",
      "Easily track candidates in the hiring process with ATS",
      "Schedule interview and send offer letter ",
    ],
  },
  BEHAVIOUR: {
    title: "The AI-driven Behaviour Analysis",
    points: [
      "Identify organisational behavioural traits important to perform well on job",
      "Personalised on-the-job scenario judgement test for behavioural analysis",
      "Proctoring to avoid malpractices during the test",
      "In depth employee analytics and comparison report of all the candidates for better decision making",
    ],
  },
};

type TProduct = keyof typeof PRODUCTS;

const Demo = () => {
  const [searchParams] = useSearchParams();
  const product = searchParams.get("product") as TProduct | null;

  const products = product ? { [product]: PRODUCTS[product] } : PRODUCTS;

  return (
    <section className="main">
      {/* header */}
      <Navbar />
      <Paper mt={80} mih={"73vh"} px={40} pb={80}>
        <SimpleGrid
          cols={{
            xs: 1,
            sm: 1,
            md: 1,
            lg: 2,
          }}
        >
          <Box>
            {Object.entries(products).map(([key, value]) => (
              <Box key={key} pl={20}>
                <ProductCard title={value.title} points={value.points} />
              </Box>
            ))}
          </Box>

          <Box>
            <DemoForm />
          </Box>
        </SimpleGrid>
      </Paper>
      {/* Footer */}
      <Footbar />
    </section>
  );
};

export default Demo;

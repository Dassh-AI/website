import {
  Box,
  Button,
  Group,
  Paper,
  Text,
  Image,
  SimpleGrid,
} from "@mantine/core";
import useDeviceSize from "../../../utils/useDeviceSize";
import ProductFeatureCard from "../../card/ProductFeatureCard";
import { color } from "../../../contants/color";
import ProductWorkingCard from "../../card/ProductWorkingCard";
import "../../../styles/pages/product.css";

interface IProductPageProps {
  title: string;
  description: string[];
  buttons: {
    variant: string;
    bg: string;
    textColor: string;
    text: string;
    link: string;
  }[];
  images: [string, string];
  product_subtitle: string;
  product_subdescription: string[];
  feature_title?: string;
  features: {
    icon: JSX.Element;
    title: string;
    description: string;
  }[];

  working_title: string;
  working_description: string[];
  working: {
    icon: JSX.Element;
    title: string;
    description: string;
  }[];
  link: string;
}

const ProductPage: React.FC<IProductPageProps> = (props) => {
  const { width, isMobile } = useDeviceSize();
  return (
    <Paper px={isMobile ? 20 :80} pb={80}>
      <Box mt={100}>
        <Text fw={700} c={color.light_green} className="hero-title">
          {props.title}
        </Text>
        {props.description.map((desc, index) => (
          <Text key={index} className="hero-description" c={color.green}>
            {desc}
          </Text>
        ))}
      </Box>

      <Box mt={40}>
        <Group justify="center">
          {props.buttons.map((button, index) => (
            <Button key={index} variant={button.variant} color={button.bg}>
              <Text c={button.textColor} fw={600}>
                {button.text}
              </Text>
            </Button>
          ))}
        </Group>
      </Box>

      <Box mt={50}>
        <Group justify="center">
          <Image
            src={props.images[0]}
            alt="feature"
            fit="contain"
            height={isMobile ? 'auto' : width * 0.25}
            width={isMobile ? width * 0.8 : 'auto'}
          />
          <Image
            src={props.images[1]}
            alt="feature"
            fit="contain"
            height={isMobile ? 'auto' : width * 0.25}
            width={isMobile ? width * 0.8 : 'auto'}
          />
        </Group>
      </Box>

      <Box mt={40}>
        <Text className="product-subtitle" fw={600} c={color.green}>
          {props.product_subtitle}
        </Text>
        {props.product_subdescription.map((desc, index) => (
          <Text key={index} className="product-subdescription" c={color.green}>
            {desc}
          </Text>
        ))}
      </Box>

      <SimpleGrid
        cols={{
          xs: 1,
          sm: 2,
          md: 3,
          lg: 3,
          xl: 3,
        }}
        mt={80}
      >
        {props.features.map((feature, index) => (
          <ProductFeatureCard
            key={index}
            icon={feature.icon}
            title={feature.title}
            description={feature.description}
          />
        ))}
      </SimpleGrid>

      <Paper bg={color.green} radius={20} mt={80} className="working-container">
        <Text className="working-title" fw={600} c={color.white}>
          {props.working_title}
        </Text>

        {props.working_description.map((desc, index) => (
          <Text key={index} className="working-description" c={color.white}>
            {desc}
          </Text>
        ))}

        <SimpleGrid
          cols={{
            xs: 1,
            sm: 2,
            md: 3,
            lg: 3,
            xl: 3,
          }}
          mt={40}
        >
          {props.working.map((work, index) => (
            <ProductWorkingCard
              key={index}
              icon={work.icon}
              title={work.title}
              description={work.description}
            />
          ))}
        </SimpleGrid>

        <Group justify="center">
          <Button
            variant="filled"
            color={color.yellow}
            mt={40}
            // onClick={() => {
            //     window.location.href = props.link;
            // }}
          >
            <Text c={color.green} fw={600}>
              Get Started
            </Text>
          </Button>
        </Group>
      </Paper>
    </Paper>
  );
};

export default ProductPage;

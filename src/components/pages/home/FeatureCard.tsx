import {
  Box,
  Grid,
  Group,
  Image,
  Paper,
  SimpleGrid,
  Text,
} from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";
import { useEffect, useRef, useState } from "react";

interface IFeatureCard {
  title: JSX.Element | string;
  description: JSX.Element | string;
  features: string[];
  link_text: string;
}

const FeatureCard: React.FC<IFeatureCard> = (props) => {
  const [inView, setInView] = useState(false);
  const componentRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const entry = entries[0];
        if (entry.isIntersecting) {
          setInView(true);
          observer.disconnect(); // Stop observing once it's in view
        }
      },
      {
        threshold: 0,
      }
    );

    if (componentRef.current) {
      observer.observe(componentRef.current);
    }

    return () => {
      if (componentRef.current) {
        observer.unobserve(componentRef.current);
      }
    };
  }, []);
  return (
    <Box className='feature-section-box' mt={100} ref={componentRef}>
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Text className={`section-title ${inView ? "text-typewriter" : ""}`}>
            {props.title}
          </Text>
          <Text
            className={`section-description ${
              inView ? "animate__animated animate__fadeInUp" : ""
            }`}
            pt={40}
            pr={20}
          >
            {props.description}
          </Text>
          <Group
            pt={40}
            style={{
              cursor: "pointer",
            }}
          >
            <Text
              className={`section-link ${
                inView ? "animate__animated animate__fadeInUp" : ""
              }`}
            >
              {props.link_text}
            </Text>
            <Image src='assets/upArrow.svg' width={"10px"} />
          </Group>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <SimpleGrid
            cols={{ base: 1, sm: 2 }}
            spacing={{ base: 10, sm: "xl" }}
            verticalSpacing={{ base: "md", sm: "xl" }}
            className={`feature-section-features ${
              inView ? "animate__animated animate__fadeInUp" : ""
            }`}
          >
            {props.features?.map((item, index) => {
              return (
                <Box key={index}>
                  <Paper className='section-icon'>
                    <IconCircleCheck stroke={2} />
                  </Paper>
                  <Text className='section-icon-text'>{item}</Text>
                </Box>
              );
            })}
          </SimpleGrid>
        </Grid.Col>
      </Grid>
    </Box>
  );
};

export default FeatureCard;

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
  url: string;
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

    const currentRef = componentRef.current; // Save the current ref value

    if (currentRef) {
      observer.observe(currentRef);
    }

    return () => {
      if (currentRef) {
        observer.unobserve(currentRef); // Use the saved ref value in cleanup
      }
    };
  }, []);

  const titleLines =
    typeof props.title === "string"
      ? props.title.split("<br/>")
      : [props.title];

  const handleLinkOpen = () => {
    window.open(
      props.url,
      "_blank" // <- This is what makes it open in a new window.
    );
  };

  return (
    <Box className='feature-section-box' mt={100} ref={componentRef}>
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Text className='section-title'>
            {titleLines.map((line, index) => (
              <span
                key={index}
                className={`${inView ? "text-typewriter" : ""}`}
                style={{
                  display: "block",
                  animationDelay: `${index * 2}s`,
                }}
              >
                {line}
              </span>
            ))}
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
            onClick={handleLinkOpen}
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

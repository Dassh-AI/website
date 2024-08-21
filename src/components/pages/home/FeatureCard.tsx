import { Box, Grid, Paper, SimpleGrid, Text } from "@mantine/core";
import { IconCircleCheck } from "@tabler/icons-react";

interface IFeatureCard {
  title: JSX.Element | string;
  description: JSX.Element | string;
  features: string[];
}

const FeatureCard: React.FC<IFeatureCard> = (props) => {
  return (
    <Box className='feature-section-box' mt={100}>
      <Grid>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <Text className='section-title'>{props.title}</Text>
          <Text className='section-description' pt={40} pr={20}>
            {props.description}
          </Text>
        </Grid.Col>
        <Grid.Col span={{ base: 12, md: 6 }}>
          <SimpleGrid
            cols={{ base: 3, sm: 6, lg: 3 }}
            spacing={{ base: 10, sm: "xl" }}
            verticalSpacing={{ base: "md", sm: "xl" }}
            className="feature-section-features"
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

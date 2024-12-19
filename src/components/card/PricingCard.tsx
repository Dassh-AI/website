import {
  Box,
  Button,
  Card,
  Flex,
  Grid,
  Group,
  Paper,
  rem,
  Text,
} from "@mantine/core";
import { color } from "../../contants/color";
import { IconCircleCheck } from "@tabler/icons-react";
import React from "react";
import "../../styles/pages/pricing.css";

interface IPricingCardProps {
  tag?: string;
  title: string;
  description: string;
  selectText: string;
  features: string[];
  isPopular?: boolean;
  pricing?: {
    title?: string;
    price: string;
    priceSub?: string;
  }[];
}

const PricingCard: React.FC<IPricingCardProps> = (props) => {
  return (
    <Card
      withBorder
      radius={20}
      className={props?.isPopular ? "pricing-card-popular" : "pricing-card"}
      p={0}
    >
      {props?.isPopular && (
        <Paper bg={color.green}>
          <Text c={color.white} py={5} className="pricing-tag">
            Most Popular
          </Text>
        </Paper>
      )}
      <Box p={rem(20)}>
        <Box>
          <Group justify="space-between">
            <Text className="card-title" fw={500} c={color.green}>
              {props.title}
            </Text>

            {props?.tag && (
              <Button color={color.dimmed_green} variant="outline" size="xs">
                <Text c={color.dimmed_green} fw={500}>
                  {props?.tag}
                </Text>
              </Button>
            )}
          </Group>
          <Text c={color.green} className="card-description">
            {props.description}
          </Text>
        </Box>

        <Box mt={60}>
          {props.pricing?.map((pricing, index) => (
            <React.Fragment key={index}>
              <Text c={color.green} className="card-price-title">
                {pricing?.title}
              </Text>
              <Flex direction="row">
                <Text c={color.green} fw={500} className="card-price">
                  {pricing.price}
                </Text>
                {pricing?.priceSub && (
                  <Text c={color.green} className="card-price-sub">
                    /{pricing?.priceSub}
                  </Text>
                )}
              </Flex>
            </React.Fragment>
          ))}
        </Box>

        <Button fullWidth color={color.yellow} mt={10}>
          <Text c={color.green} fw={500}>
            {props.selectText}
          </Text>
        </Button>

        <Grid mt={40}>
          {props.features.map((feature, index) => (
            <React.Fragment key={index}>
              <Grid.Col span={1.5}>
                <Box className="card-icon">
                  <IconCircleCheck size={22} color={color.green} />
                </Box>
              </Grid.Col>
              <Grid.Col span={10.5}>
                <Text c={color.black} fw={400} className="card-point">
                  {feature}
                </Text>
              </Grid.Col>
            </React.Fragment>
          ))}
        </Grid>
      </Box>
    </Card>
  );
};

export default PricingCard;

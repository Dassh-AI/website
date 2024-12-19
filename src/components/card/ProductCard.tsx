import { Box, Grid, Paper, Text } from "@mantine/core";
import { color } from "../../contants/color";
import { IconCircleCheck } from "@tabler/icons-react";
import "../../styles/pages/demo.css";
import React from "react";

interface IProductCardProps {
  title: string;
  points: string[];
}

const ProductCard: React.FC<IProductCardProps> = (props) => {
  return (
    <Paper>
      <Text c={color.light_green} fw={600} className="card-title">
        {props.title}
      </Text>

      <Grid pb={20}>
        {props.points.map((point, index) => (
          <React.Fragment key={index}>
            <Grid.Col span={1}>
              <Box className="card-icon">
                <IconCircleCheck size={22} color={color.green} />
              </Box>
            </Grid.Col>
            <Grid.Col span={11}>
              <Text c={color.black} fw={400} className="card-point">
                {point}
              </Text>
            </Grid.Col>
          </React.Fragment>
        ))}
      </Grid>
    </Paper>
  );
};

export default ProductCard;

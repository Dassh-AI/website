import { Box, Card, Text } from "@mantine/core";
import { color } from "../../contants/color";
import "../../styles/pages/product.css";

interface IProductFeatureCard {
  icon: JSX.Element;
  title: string;
  description: string;
}

const ProductFeatureCard: React.FC<IProductFeatureCard> = (props) => {
  return (
    <Card
      shadow="xs"
      radius="md"
      bg={color.light_yellow}
      className="card-container"
      p={20}
    >
      <Box>{props.icon}</Box>

      <Box>
        <Text className="card-title" fw={600} c={color.green}>
          {props.title}
        </Text>
        <Text className="card-description" fw={400} c={color.green}>
          {props.description}
        </Text>
      </Box>
    </Card>
  );
};

export default ProductFeatureCard;

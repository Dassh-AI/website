import { Box, Card, Text } from "@mantine/core";
import "../../styles/pages/product.css";
import { color } from "../../contants/color";

interface IProductFeatureCard {
  icon: JSX.Element;
  title: string;
  description: string;
}

const ProductFeatureCard: React.FC<IProductFeatureCard> = (props) => {
  return (
    <Card px={60} className="card-container">
      {/* icon */}
      <Box className="card-icon-container">{props.icon}</Box>

      {/* title */}
      <Box>
        <Text className="card-title" fw={500} c={color.green}>
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
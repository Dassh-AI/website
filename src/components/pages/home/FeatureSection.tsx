import {
  Paper,
  Group,
  Box,
  Button,
  Text,
  ActionIcon,
  Image,
} from "@mantine/core";
import "../../../styles/pages/home.css";
import { color } from "../../../contants/color";
import { IconCircleCheck } from "@tabler/icons-react";
import useDeviceSize from "../../../utils/useDeviceSize";
import { openLink } from "../../../utils/openLink";

interface IFeatureSectionProps {
  bgColor: string;
  title: string;
  description: string[];
  buttons: {
    variant: string;
    bg: string;
    textColor: string;
    text: string;
    link: string;
    is_external: boolean;
  }[];
  images: [string, string];
  features: string[];
}

const FeatureSection: React.FC<IFeatureSectionProps> = (props) => {
  const { width, isMobile } = useDeviceSize();

  return (
    <Paper
      style={{ backgroundColor: props.bgColor }}
      className="feature-section"
      radius={20}
      px={40}
      py={50}
    >
      <Box>
        <Text
          c={color.green}
          fw={500}
          fz={30}
          className="feature-section-title"
        >
          {props.title}
        </Text>
        {props.description.map((desc, index) => (
          <Text
            c={color.green}
            fw={400}
            fz={20}
            key={index}
            className="feature-section-description"
          >
            {desc}
          </Text>
        ))}
      </Box>

      <Box mt={30}>
        <Group justify="center">
          {props.buttons.map((button, index) => (
            <Button
              key={index}
              variant={button.variant}
              color={button.bg}
              onClick={() => {
                openLink(button.link, button.is_external);
              }}
            >
              <Text c={button.textColor} fw={600} fz={18}>
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
            height={isMobile ? width * 0.8 : width * 0.25}
          />
          <Image
            src={props.images[1]}
            alt="feature"
            fit="contain"
            height={isMobile ? width * 0.8 : width * 0.25}
          />
        </Group>
      </Box>

      <Box mt={30}>
        <Group justify="space-around">
          {props.features.map((feature, index) => (
            <Group key={index}>
              <ActionIcon color={color.yellow} p={5} size={35}>
                <IconCircleCheck size={30} color={color.green} />
              </ActionIcon>
              <Text
                c={color.green}
                fw={400}
                fz={18}
                className="feature-section-text"
              >
                {feature}
              </Text>
            </Group>
          ))}
        </Group>
      </Box>
    </Paper>
  );
};

export default FeatureSection;

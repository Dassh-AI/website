import { ActionIcon, Box, Group, Paper, Text } from "@mantine/core";
import { IconArrowUpRight } from "@tabler/icons-react";
import { color } from "../../../contants/color";
import useDeviceSize from "../../../utils/useDeviceSize";

interface IShowcaseCard {
  tag: string;
  title: JSX.Element | string;
  description: JSX.Element | string;
}

const ShowcaseCard: React.FC<IShowcaseCard> = (props) => {
  const { isMobile } = useDeviceSize();
  return (
    <Paper radius={50} className='showcase-white'>
      {isMobile ? (
        <Box>
          <Text className='showcase-tag'>{props.tag}</Text>

          <Box>
            <Text className='mobile-showcase-title'>{props.title}</Text>
            <Text className='mobile-showcase-description'>
              {props.description}
            </Text>

            <Group mt='1em'>
              <Text className='showcase-learn-more'>Learn More</Text>
              <ActionIcon
                color={color.green}
                size={25}
                radius={10}
                className='showcase-icon'
              >
                <IconArrowUpRight stroke={1.5} size={18} />
              </ActionIcon>
            </Group>
          </Box>
        </Box>
      ) : (
        <Box>
          <Group justify='space-between'>
            <Text className='showcase-tag'>{props.tag}</Text>
            <ActionIcon
              color={color.green}
              size={35}
              radius={10}
              className='showcase-icon '
            >
              <IconArrowUpRight stroke={1.5} />
            </ActionIcon>
          </Group>

          <Box>
            <Text className='showcase-title'>{props.title}</Text>
            <Text className='showcase-description'>{props.description}</Text>
          </Box>
        </Box>
      )}
    </Paper>
  );
};

export default ShowcaseCard;

import { Anchor, Box, Center, Group, Paper, SimpleGrid } from "@mantine/core";
import "../../styles/layout/footer.css";
import { IconMail } from "@tabler/icons-react";

const Footbar = () => {
  return (
    <Paper className='section'>
      <SimpleGrid cols={{ base: 1, sm: 1, md: 3 }} className="section-grid">
        <Box></Box>
        <Box>© 2024 Dassh.AI Technologies. Mumbai, India</Box>
        <Box>
          <Group
            className="group"
          >
            <IconMail stroke={1.5} />
            <Anchor href='mailto:info@dassh.ai'>info@dassh.ai</Anchor>
          </Group>
        </Box>
      </SimpleGrid>
    </Paper>
  );
};

export default Footbar;

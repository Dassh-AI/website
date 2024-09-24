import { Anchor, Group, Box, Text } from "@mantine/core";
import { IconMail } from "@tabler/icons-react";
import "../../styles/layout/footer.css";
const logo = "/assets/DasshAI-dark.png";

const Footer = () => {
  return (
    <div className={"footer"}>
      <div className={"inner"}>
                <div className="logo-container">
                <img src={logo} alt="Dassh AI Logo" className="footer-logo" />
                </div>
        <Group className={"links"}>
          <Box>© 2024 Dassh.AI Technologies. Mumbai, India</Box>
        </Group>

        <Group>
          <IconMail stroke={1.5} />
          <Anchor href='mailto:info@dassh.ai'>
            <Text
              style={{
                color: "black",
              }}
            >
              info@dassh.ai
            </Text>
          </Anchor>
        </Group>

      </div>
    </div>
  );
};

export default Footer;

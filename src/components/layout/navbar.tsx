import {
  Group,
  Button,
  Divider,
  Image,
  Box,
  Burger,
  Drawer,
  ScrollArea,
  rem,
  UnstyledButton,
  Text,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import "../../styles/layout/navbar.css";

const Header = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  return (
    <Box py={25}>
      <header className={"header"}>
        <Group justify='space-between' h='100%'>
          <Image src='assets/DasshAI.svg' />

          <Group h='100%' gap={0} visibleFrom='sm'>
            <a href='#' className={"link"}>
              Features
            </a>
            <a href='#' className={"link"}>
              About
            </a>
            <a href='#' className={"link"}>
              Science
            </a>
          </Group>

          <Group visibleFrom='sm'>
            <UnstyledButton
              style={{
                borderRight: "1px solid #F4F5DC",
                padding: "5px 20px",
                color: "#F4F5DC",
              }}
            >
              <Text>Sign in</Text>
            </UnstyledButton>
            <Button color='#F8E805'>
              <Text
                style={{
                  color: "#063A3A",
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "18px"
                }}
              >
                Book a Call
              </Text>
            </Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom='sm'
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size='100%'
        padding='md'
        title='Navigation'
        hiddenFrom='sm'
        zIndex={1000000}
      >
        <ScrollArea h={`calc(100vh - ${rem(80)})`} mx='-md'>
          <Divider my='sm' />

          <a href='#' className={"link"}>
            Features
          </a>
          <a href='#' className={"link"}>
            About
          </a>
          <a href='#' className={"link"}>
            Science
          </a>

          <Divider my='sm' />

          <Group justify='center' grow pb='xl' px='md'>
            <Button variant='default'>Log in</Button>
            <Button>Sign up</Button>
          </Group>
        </ScrollArea>
      </Drawer>
    </Box>
  );
};

export default Header;

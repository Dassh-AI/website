import { useEffect, useState } from "react";
import {
  Group,
  Button,
  Image,
  Box,
  Burger,
  Drawer,
  UnstyledButton,
  Divider,
  Anchor,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import "../../styles/layout/navbar.css";
import { color } from "../../contants/color";
import { TrackingEvents } from "../../utils/tracking";
import { CALENDERLY_URL, INTERNAL_URL, PORTAL_URL } from "../../contants/url";
import { openLink } from "../../utils/openLink";

const handleSigninClick = () => {
  TrackingEvents.SIGN_IN();
};
const handleBookaCall = () => {
  TrackingEvents.BOOK_A_CALL();
};

const navbar_links = [
  {
    name: "Features",
    url: "#ai-tools-help",
    is_external: false,
  },
  {
    name: "About",
    url: INTERNAL_URL.ABOUT,
    is_external: false,
  },
  {
    name: "Compare Plans",
    url: INTERNAL_URL.PRICING,
    is_external: false,
  },
  {
    name: "Get Started",
    url: PORTAL_URL,
    is_external: true,
  },
];

const Navbar = () => {
  const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
    useDisclosure(false);

  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      const maxScroll = 100;
      if (window.scrollY > maxScroll) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  const scrollToSection = (id: string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: "smooth", block: "start" });
    }
  };

  return (
    <Box py={25} style={{ paddingTop: "60px" }}>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <Group justify="space-between" h="100%">
          <Image
            style={{
              width: "160px",
            }}
            src={"assets/DasshAI-dark.svg"}
          />

          <Group
            h="100%"
            w={"30vw"}
            justify="space-between"
            gap={0}
            visibleFrom="lg"
          >
            {navbar_links.map((link, index) => (
              <Anchor
                onClick={() => {
                  if (link.url.startsWith("#")) {
                    if (window.location.pathname === "/") {
                      scrollToSection(link.url.slice(1));
                    } else {
                      openLink(INTERNAL_URL.HOME, link.is_external);
                    }
                  } else {
                    openLink(link.url, link.is_external);
                  }
                }}
                className={"link"}
                style={{
                  color: color.green,
                }}
                key={index}
              >
                {link.name}
              </Anchor>
            ))}
          </Group>

          <Group visibleFrom="lg">
            <UnstyledButton
              style={{
                borderRight: "1px solid #F4F5DC",
                padding: "5px 20px",
                color: "#063A3A",
              }}
            >
              <Anchor
                href={PORTAL_URL}
                style={{
                  color: color.green,
                  textDecoration: "none",
                  fontWeight: 600,
                }}
                onClick={handleSigninClick}
              >
                Sign in
              </Anchor>
            </UnstyledButton>
            <Button color="#F8E805">
              <Anchor
                style={{
                  color: "#063A3A",
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "18px",
                  textDecoration: "none",
                }}
                href={CALENDERLY_URL}
                target="_blank"
                rel="noreferrer"
                onClick={handleBookaCall}
              >
                Book a Call
              </Anchor>
            </Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom="lg"
            color={color.green}
          />
        </Group>
      </header>

      <Drawer
        opened={drawerOpened}
        onClose={closeDrawer}
        size="100%"
        padding="0"
        hiddenFrom="lg"
        title={<Image src={"assets/DasshAI-dark.svg"} h={"1.2em"} />}
        zIndex={1000000}
        styles={{
          content: {
            backgroundColor: color.dull_green,
          },
          header: {
            backgroundColor: color.dull_green,
            padding: "10px 20px",
          },
        }}
      >
        {navbar_links.map((link, index) => (
          <Anchor
            onClick={() => {
              if (link.url.startsWith("#")) {
                if (window.location.pathname === "/") {
                  closeDrawer();
                  scrollToSection(link.url.slice(1));
                } else {
                  openLink(INTERNAL_URL.HOME, link.is_external);
                }
              } else {
                openLink(link.url, link.is_external);
              }
            }}
            className={"link drawer-link"}
            style={{
              color: color.green,
            }}
            key={index}
          >
            {link.name}
          </Anchor>
        ))}

        <Divider my="sm" />

        <Group justify="center" grow pb="xl" px="md">
          <Button variant="outline" color={color.green}>
            <Anchor
              href={PORTAL_URL}
              target="_blank"
              style={{
                color: color.green,
                fontWeight: 600,
              }}
              onClick={handleSigninClick}
            >
              Sign in
            </Anchor>
          </Button>
          <Button color="#F8E805">
            <Anchor
              style={{
                color: "#063A3A",
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "18px",
              }}
              href={CALENDERLY_URL}
              target="_blank"
              onClick={handleBookaCall}
            >
              Book a Call
            </Anchor>
          </Button>
        </Group>
      </Drawer>
    </Box>
  );
};

export default Navbar;

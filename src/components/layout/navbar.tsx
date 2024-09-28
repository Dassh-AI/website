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
import { TrackingEvents } from '../../utils/tracking';


const handleSigninClick = () => {
  TrackingEvents.SIGN_IN(); 
};
const handleBookaCall = () => {
  TrackingEvents.BOOK_A_CALL(); 
};
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


  const scrollToSection = (id:string) => {
    const section = document.getElementById(id);
    if (section) {
      section.scrollIntoView({ behavior: 'smooth', block: 'start' });
    }
  };

  return (
    <Box py={25} style={{ paddingTop: "60px" }}>
      <header className={`header ${isScrolled ? "scrolled" : ""}`}>
        <Group justify='space-between' h='100%'>
          <Image
          style={{
            width:"160px"
          }}
            src={isScrolled ? "assets/DasshAI-dark.svg" : "assets/DasshAI-light.svg"}
          />

          <Group
            h='100%'
            w={"30vw"}
            justify='space-between'
            gap={0}
            visibleFrom='lg'
          >
            <Anchor
              onClick={() => scrollToSection("ai-tools-help")} 
              className={"link"}
              style={{
                color: isScrolled ? "#063A3A" : "#CBDCBD",textDecoration: "none",
              }}
            >
              Features
            </Anchor>
            <Anchor
              onClick={() => scrollToSection("about-us")} 
              className={"link"}
              style={{
                color: isScrolled ? "#063A3A" : "#CBDCBD",textDecoration: "none",
              }}
            >
              About
            </Anchor>
            <Anchor
              href='https://destiny-horse-92e.notion.site/The-Science-Behind-Dassh-AI-A-Smarter-Way-to-Evaluate-Behavioural-Traits-10a412876f6480068a0cd5ea02232d26'
              className={"link"}
              style={{
                color: isScrolled ? "#063A3A" : "#CBDCBD",textDecoration: "none",
              }}
              target="_blank"
              rel="noopener noreferrer"
            >
              Science
            </Anchor>
          </Group>

          <Group visibleFrom='lg'>
            <UnstyledButton
              style={{
                borderRight: "1px solid #F4F5DC",
                padding: "5px 20px",
                color: isScrolled ? "#063A3A" : "#F4F5DC",
              }}
            >
              <Anchor
                href={"https://dev.dassh.xyz"}
                style={{
                  color: isScrolled ? color.green : color.grey,textDecoration: "none",
                  fontWeight: 600,
                }}
                onClick={handleSigninClick}

              >
                Sign in
              </Anchor>
            </UnstyledButton>
            <Button color='#F8E805'>
              <Anchor
                style={{
                  color: "#063A3A",
                  fontFamily: "Inter",
                  fontWeight: 600,
                  fontSize: "18px",
                  textDecoration: "none",
                }}
                href={
                  "https://calendly.com/harshitmodi-iitb/dassh-ai-tool-for-organisations"
                }
                target='_blank'
                rel='noreferrer'
                onClick={handleBookaCall}
              >
                Book a Call
              </Anchor>
            </Button>
          </Group>

          <Burger
            opened={drawerOpened}
            onClick={toggleDrawer}
            hiddenFrom='lg'
            color={isScrolled ? color.green : color.grey}
          />
        </Group>
      </header>

      <Drawer
      opened={drawerOpened}
      onClose={closeDrawer}
      size='100%'
      padding='0'
      hiddenFrom='lg'
      title={<Image src={"assets/DasshAI-dark.svg"} h={"1.2em"} />}
      zIndex={1000000}
      styles={{
        content: {
          backgroundColor: color.grey,
        },
        header: {
          backgroundColor: color.grey,
          padding: "10px 20px",
        },
      }}
    >
      <Anchor 
        className={"link drawer-link"} 
        onClick={() => {
          scrollToSection("ai-tools-help");
          closeDrawer();
        }}
      >
        Features
      </Anchor>
      <Anchor 
        className={"link drawer-link"} 
        onClick={() => {
          scrollToSection("about-us");
          closeDrawer(); 
        }}
      >
        About
      </Anchor>
      <Anchor 
        className={"link drawer-link"} 
        onClick={() => {
          scrollToSection("science");
          closeDrawer(); 
        }}
      >
        Science
      </Anchor>

      <Divider my='sm' />

      <Group justify='center' grow pb='xl' px='md'>
        <Button variant='outline' color={color.green}>
          <Anchor
            href={"https://dev.dassh.xyz"}
            style={{
              color: color.green,
              fontWeight: 600,
            }}
            onClick={handleSigninClick}
          >
            Sign in
          </Anchor>
        </Button>
        <Button color='#F8E805'>
          <Anchor
            style={{
              color: "#063A3A",
              fontFamily: "Inter",
              fontWeight: 600,
              fontSize: "18px",
            }}
            href={
              "https://calendly.com/harshitmodi-iitb/dassh-ai-tool-for-organisations"
            }
            target='_blank'
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

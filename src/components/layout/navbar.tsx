// import { useEffect, useState } from "react";
// import {
//   Group,
//   Button,
//   Divider,
//   Image,
//   Box,
//   Burger,
//   Drawer,
//   UnstyledButton,
//   Text,
// } from "@mantine/core";
// import { useDisclosure } from "@mantine/hooks";
// import "../../styles/layout/navbar.css";
// import { color } from "../../contants/color";

// const Navbar = () => {
//   const [drawerOpened, { toggle: toggleDrawer, close: closeDrawer }] =
//     useDisclosure(false);

//   const [isScrolled, setIsScrolled] = useState(false);

//   useEffect(() => {
//     const handleScroll = () => {
//       const headerElement = document.querySelector(".header") as HTMLElement;
//       const scrollY = window.scrollY;
//       const maxScroll = 100;

//       if (scrollY > maxScroll) {
//         headerElement.classList.add("scrolled");
//         setIsScrolled(true);
//       } else {
//         const scrollPercent = Math.min(scrollY / maxScroll, 1);
//         const backgroundPositionY = `${(1 - scrollPercent) * 100}%`;

//         headerElement.style.backgroundPositionY = backgroundPositionY;
//         headerElement.style.backgroundColor = `rgba(203, 220, 189, ${scrollPercent})`; // Transition color
//         headerElement.classList.remove("scrolled");
//         setIsScrolled(false);
//       }
//     };

//     window.addEventListener("scroll", handleScroll);

//     return () => {
//       window.removeEventListener("scroll", handleScroll);
//     };
//   }, []);

//   return (
//     <Box py={25} style={{ paddingTop: "60px" }}>
//       <header className={"header"}>
//         <Group justify='space-between' h='100%'>
//           <Image
//             src={isScrolled ? "assets/DasshAI-dark.svg" : "assets/DasshAI.svg"}
//           />

//           <Group h='100%' gap={0} visibleFrom='lg'>
//             <a
//               href='#'
//               className={"link"}
//               style={{
//                 color: isScrolled ? "#063A3A" : "#CBDCBD",
//               }}
//             >
//               Features
//             </a>
//             <a
//               href='#'
//               className={"link"}
//               style={{
//                 color: isScrolled ? "#063A3A" : "#CBDCBD",
//               }}
//             >
//               About
//             </a>
//             <a
//               href='#'
//               className={"link"}
//               style={{
//                 color: isScrolled ? "#063A3A" : "#CBDCBD",
//               }}
//             >
//               Science
//             </a>
//           </Group>

//           <Group visibleFrom='lg'>
//             <UnstyledButton
//               style={{
//                 borderRight: "1px solid #F4F5DC",
//                 padding: "5px 20px",
//                 color: isScrolled ? "#063A3A" : "#F4F5DC",
//               }}
//             >
//               <Text>Sign in</Text>
//             </UnstyledButton>
//             <Button color='#F8E805'>
//               <Text
//                 style={{
//                   color: "#063A3A",
//                   fontFamily: "Inter",
//                   fontWeight: 600,
//                   fontSize: "18px",
//                 }}
//               >
//                 Book a Call
//               </Text>
//             </Button>
//           </Group>

//           <Burger
//             opened={drawerOpened}
//             onClick={toggleDrawer}
//             hiddenFrom='lg'
//             color={color.grey}
//           />
//         </Group>
//       </header>

//       <Drawer
//         opened={drawerOpened}
//         onClose={closeDrawer}
//         size='100%'
//         padding='0'
//         hiddenFrom='lg'
//         title={<Image src={"assets/DasshAI-dark.svg"} h={"1.2em"} />}
//         zIndex={1000000}
//         styles={{
//           content: {
//             backgroundColor: color.grey, // Set the background color to red
//           },
//           header: {
//             backgroundColor: color.grey,
//             padding: "10px 20px",
//           },
//         }}
//       >
//         {/* <Divider my='sm' /> */}

//         <a href='#' className={"link drawer-link"}>
//           Features
//         </a>
//         <a href='#' className={"link drawer-link"}>
//           About
//         </a>
//         <a href='#' className={"link drawer-link"}>
//           Science
//         </a>

//         <Divider my='sm' />

//         <Group justify='center' grow pb='xl' px='md'>
//           <Button variant='outline' color={color.green}>
//             Sign in
//           </Button>
//           <Button color='#F8E805'>
//             <Text
//               style={{
//                 color: "#063A3A",
//                 fontFamily: "Inter",
//                 fontWeight: 600,
//                 fontSize: "18px",
//               }}
//             >
//               Book a Call
//             </Text>
//           </Button>
//         </Group>
//       </Drawer>
//     </Box>
//   );
// };

// export default Navbar;



import { useEffect, useState } from "react";
import {
  Group,
  Button,
  Image,
  Box,
  Burger,
  Drawer,
  UnstyledButton,
  Text,
  Divider,
} from "@mantine/core";
import { useDisclosure } from "@mantine/hooks";
import "../../styles/layout/navbar.css";
import { color } from "../../contants/color";

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

  return (
    <Box py={25} style={{ paddingTop: "60px" }}>
      <header className={`header ${isScrolled ? 'scrolled' : ''}`}>
        <Group justify='space-between' h='100%'>
          <Image
            src={isScrolled ? "assets/DasshAI-dark.svg" : "assets/DasshAI.svg"}
          />

          <Group h='100%' w={"30vw"} justify="space-between" gap={0} visibleFrom='lg'>
            <a
              href='#'
              className={"link"}
              style={{
                color: isScrolled ? "#063A3A" : "#CBDCBD",
              }}
            >
              Features
            </a>
            <a
              href='#'
              className={"link"}
              style={{
                color: isScrolled ? "#063A3A" : "#CBDCBD",
              }}
            >
              About
            </a>
            <a
              href='#'
              className={"link"}
              style={{
                color: isScrolled ? "#063A3A" : "#CBDCBD",
              }}
            >
              Science
            </a>
          </Group>

          <Group visibleFrom='lg'>
            <UnstyledButton
              style={{
                borderRight: "1px solid #F4F5DC",
                padding: "5px 20px",
                color: isScrolled ? "#063A3A" : "#F4F5DC",
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
                  fontSize: "18px",
                }}
              >
                Book a Call
              </Text>
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
        <a href='#' className={"link drawer-link"}>
          Features
        </a>
        <a href='#' className={"link drawer-link"}>
          About
        </a>
        <a href='#' className={"link drawer-link"}>
          Science
        </a>

        <Divider my='sm' />

        <Group justify='center' grow pb='xl' px='md'>
          <Button variant='outline' color={color.green}>
            Sign in
          </Button>
          <Button color='#F8E805'>
            <Text
              style={{
                color: "#063A3A",
                fontFamily: "Inter",
                fontWeight: 600,
                fontSize: "18px",
              }}
            >
              Book a Call
            </Text>
          </Button>
        </Group>
      </Drawer>
    </Box>
  );
};

export default Navbar;

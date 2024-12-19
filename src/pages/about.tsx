import {
  Box,
  Card,
  Center,
  Container,
  Flex,
  Grid,
  Paper,
  SimpleGrid,
  Text,
} from "@mantine/core";
import Footbar from "../components/layout/footbar";
import Navbar from "../components/layout/navbar";
import "../styles/pages/about.css";
import { color } from "../contants/color";
import {
  IconBrandLinkedin,
  IconBrandWhatsapp,
  IconMailbox,
  IconPhone,
} from "@tabler/icons-react";
import ContactForm from "../components/form/ContactForm";

const ABOUT_DATA = [
  {
    title: "Customers First",
    description:
      "Your satisfaction and trust are our top priorities, and we are committed to building lasting relationships",
  },
  {
    title: "Innovation",
    description:
      "We are pledged to build the most helpful tool for our customers and innovate for everyone",
  },
  {
    title: "Hospitality",
    description:
      "We believe transparency is the basic foundation for building any relationship",
  },
  {
    title: "Team Empowerment",
    description:
      "Your satisfaction and trust are our top priorities, and we are committed to building lasting relationships",
  },
];

const CONTACT_DATA = [
  {
    title: "Chat With Us",
    description: "We are there for you 24 x 7",
    contacts: [
      {
        icon: <IconBrandWhatsapp />,
        text: "Chat with us on WhatsApp",
        contact: "+91 1234567890",
      },
      {
        icon: <IconBrandLinkedin />,
        text: "Chat Via LinkedIn",
        contact: "+91 1234567890",
      },
    ],
  },
  {
    title: "Send us an Email",
    description: "Our team will respond promptly to your inquiries",
    contacts: [
      {
        icon: <IconMailbox />,
        text: "admin@dassh.ai",
        contact: "admin@dassh.ai",
      },
    ],
  },
  {
    title: "For more enquiry",
    description: "Reach out for immediate assisstance",
    contacts: [
      {
        icon: <IconPhone />,
        text: "+91 6352698962",
        contact: "+91 6352698962",
      },
    ],
  },
];

const About = () => {
  return (
    <section className="main">
      {/* header */}
      <Navbar />

      <Container py={80}>
        <Center
          style={{
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Text className="title" c={color.light_green} fw={600}>
            About Us
          </Text>
          <Text className="description" c={color.green} mt={10}>
            We revolutionise talent acquisition with cutting-edge AI tools that
            simplify hiring, uncover behavioural insights, and deliver
            actionable analytics—empowering organisations to build stronger,
            smarter teams effortlessly.
          </Text>
        </Center>
      </Container>
      <Paper bg={color.green} px={80} py={40}>
        <Grid>
          <Grid.Col span={{ xs: 12, sm: 6, md: 6, lg: 4.5, xl: 4.5 }}>
            <Flex
              direction="column"
              px={30}
              justify="center"
              style={{ height: "100%" }}
            >
              <Text className="title" c={color.white} fw={600} fz={40}>
                Our Core Values
              </Text>
              <Text className="description" c={color.white}>
                We break down the barriers so the team can focus on what matters
                - working together to create products their customers love
              </Text>
            </Flex>
          </Grid.Col>

          <Grid.Col span={{ xs: 12, sm: 6, md: 6, lg: 7.5, xl: 7.5 }}>
            <SimpleGrid cols={{ xs: 1, sm: 1, md: 1, lg: 2, xl: 2 }}>
              {ABOUT_DATA.map((about, index) => (
                <Card key={index} shadow="xs" radius="md" px={15} py={20}>
                  <Text className="card-title" fw={500} c={color.green}>
                    {about.title}
                  </Text>
                  <Text className="card-description" fw={400} c={color.green}>
                    {about.description}
                  </Text>
                </Card>
              ))}
            </SimpleGrid>
          </Grid.Col>
        </Grid>
      </Paper>

      <Container py={80}>
        <Center
          style={{
            flexDirection: "column",
            textAlign: "center",
          }}
        >
          <Text className="title" c={color.light_green} fw={600}>
            Contact Us
          </Text>
          <Text className="description" c={color.green} mt={10}>
            We are there for you 24 x 7
          </Text>
        </Center>
      </Container>

      <Paper>
        <Grid px={80}>
          <Grid.Col span={{ xs: 12, sm: 12, md: 12, lg: 8, xl: 8 }}>
            <Text c={color.green} fw={600} fz={30}>
              Leave a Message
            </Text>
            <Card px={15} mb={40} withBorder shadow="xs">
              <ContactForm />
            </Card>
          </Grid.Col>
          <Grid.Col span={{ xs: 12, sm: 12, md: 12, lg: 4, xl: 4 }}>
            {CONTACT_DATA.map((contact, index) => (
              <Card key={index} px={15} mb={40}>
                <Text fw={500} c={color.green}>
                  {contact.title}
                </Text>
                <Text fw={400} c={color.green}>
                  {contact.description}
                </Text>
                {contact.contacts.map((contact, index) => (
                  <Box key={index} mt={20}>
                    <Flex
                      align="center"
                      // onClick={()=>{
                      //     contact.contact
                      // }}
                    >
                      {contact.icon}
                      <Text className="contact-text" ml={10} c={color.green}>
                        {contact.text}
                      </Text>
                    </Flex>
                  </Box>
                ))}
              </Card>
            ))}
          </Grid.Col>
        </Grid>
      </Paper>

      {/* Footer */}
      <Footbar />
    </section>
  );
};

export default About;

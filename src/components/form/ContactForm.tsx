import {
    Box,
  Button,
  Group,
  Paper,
  SimpleGrid,
  Text,
  Textarea,
  TextInput,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { contactSchema, TContactSchema } from "./contact";
import "../../styles/component/input.css";
import { color } from "../../contants/color";
import {
    IconHomeFilled,
  IconMail,
  IconMailFilled,
  IconPhoneFilled,
  IconUser,
  IconUserFilled,
} from "@tabler/icons-react";

const ContactForm = () => {
  const form = useForm<TContactSchema>({
    initialValues: {
      name: "",
      email: "",
      phone: "",
      subject: "",
      message: "",
    },
    validate: zodResolver(contactSchema),
  });

  const handleSubmit = (values: TContactSchema) => {
    console.log(values);
  };

  return (
    <Box p={30}>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <SimpleGrid
          cols={{
            xs: 1,
            sm: 2,
          }}
          mt={10}
        >
          <TextInput
            label="Name"
            placeholder="Your name"
            required
            {...form.getInputProps("name")}
            classNames={{
              label: `inputLabel font-bold`,
              input: `inputBox font-bold`,
            }}
            leftSection={<IconUserFilled color={color.green} />}
          />

          <TextInput
            label="Email"
            placeholder="Your email"
            required
            {...form.getInputProps("email")}
            classNames={{
              label: `inputLabel font-bold`,
              input: `inputBox font-bold`,
            }}
            leftSection={<IconMailFilled color={color.green} />}
          />

          <TextInput
            label="Phone"
            placeholder="Your phone"
            {...form.getInputProps("phone")}
            classNames={{
              label: `inputLabel font-bold`,
              input: `inputBox font-bold`,
            }}
            leftSection={<IconPhoneFilled color={color.green} />}
          />

          <TextInput
            label="Subject"
            placeholder="Your subject"
            required
            mt={10}
            {...form.getInputProps("subject")}
            classNames={{
              label: `inputLabel font-bold`,
              input: `inputBox font-bold`,
            }}
            leftSection={<IconHomeFilled color={color.green} />}
          />
        </SimpleGrid>

        <Textarea
          label="Message"
          placeholder="Your message"
          required
          {...form.getInputProps("message")}
          classNames={{
            label: `inputLabel font-bold`,
            input: `inputBox font-bold`,
          }}
        />

        <Group justify="center" mt={40}>
          <Button type="submit" color={color.yellow} variant="filled">
            <Text c={color.green} fw={600}>
              Submit
            </Text>
          </Button>
        </Group>
      </form>
    </Box>
  );
};

export default ContactForm;

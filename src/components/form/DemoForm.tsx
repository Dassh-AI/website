import {
  Button,
  Group,
  Paper,
  SimpleGrid,
  Text,
  TextInput,
} from "@mantine/core";
import { useForm, zodResolver } from "@mantine/form";
import { demoSchema, TDemoSchema } from "./demo";
import "../../styles/component/input.css";
import { color } from "../../contants/color";

interface IDemoFormProps {
  product: string | null;
}

const DemoForm: React.FC<IDemoFormProps> = ({ product }) => {
  const form = useForm<TDemoSchema>({
    initialValues: {
      workEmail: "",
      firstName: "",
      lastName: "",
      title: "",
      companyName: "",
      details: product || "",
    },
    validate: zodResolver(demoSchema),
  });

  const handleSubmit = (values: TDemoSchema) => {
    console.log(values);
  };

  return (
    <Paper withBorder p={30}>
      <form onSubmit={form.onSubmit(handleSubmit)}>
        <TextInput
          label="Work email"
          placeholder="Your work email"
          required
          classNames={{
            label: `inputLabel font-bold`,
            input: `inputBox font-bold`,
          }}
          {...form.getInputProps("workEmail")}
        />

        <SimpleGrid cols={2} mt={10}>
          <TextInput
            label="First name"
            placeholder="Your first name"
            required
            {...form.getInputProps("firstName")}
            classNames={{
              label: `inputLabel font-bold`,
              input: `inputBox font-bold`,
            }}
          />

          <TextInput
            label="Last name"
            placeholder="Your last name"
            required
            {...form.getInputProps("lastName")}
            classNames={{
              label: `inputLabel font-bold`,
              input: `inputBox font-bold`,
            }}
          />

          <TextInput
            label="Title"
            placeholder="Your title"
            required
            {...form.getInputProps("title")}
            classNames={{
              label: `inputLabel font-bold`,
              input: `inputBox font-bold`,
            }}
          />

          <TextInput
            label="Company name"
            placeholder="Your company name"
            required
            {...form.getInputProps("companyName")}
            classNames={{
              label: `inputLabel font-bold`,
              input: `inputBox font-bold`,
            }}
          />
        </SimpleGrid>

        <Group justify="center" mt={40}>
          <Button type="submit" color={color.yellow} variant="filled">
            <Text c={color.green} fw={600}>
              Submit
            </Text>
          </Button>
        </Group>
      </form>
    </Paper>
  );
};

export default DemoForm;

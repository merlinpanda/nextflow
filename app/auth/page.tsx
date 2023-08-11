"use client";
import {
  useForm,
  isNotEmpty,
  isEmail,
  isInRange,
  hasLength,
  matches,
} from "@mantine/form";
import { TextInput, Button, PasswordInput, Box, Stack } from "@mantine/core";

export default function Auth() {
  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },

    validate: {
      email: isEmail("Invalid email"),
      password: hasLength(
        { min: 6, max: 20 },
        "Name must be 6-20 characters long",
      ),
    },
  });

  return (
    <>
      <Box p="lg" w="60%" mx="auto">
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Stack spacing="sm">
            <TextInput
              withAsterisk
              label="Email"
              placeholder="your@email.com"
              {...form.getInputProps("email")}
            />
            <PasswordInput
              withAsterisk
              label="Password"
              placeholder="please input your password"
              {...form.getInputProps("passsword")}
            />
            <Button mt="xs" type="submit">
              Submit
            </Button>
          </Stack>
        </form>
      </Box>
    </>
  );
}

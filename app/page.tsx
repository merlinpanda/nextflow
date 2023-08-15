"use client";

import {
  Box,
  Button,
  Card,
  Center,
  PasswordInput,
  Stack,
  Text,
  TextInput,
  createStyles,
} from "@mantine/core";
import { hasLength, isEmail, useForm } from "@mantine/form";
import { IconBrandOpenai } from "@tabler/icons-react";
import { useState } from "react";

const useStyles = createStyles((theme) => ({
  box: {
    position: "relative",
    display: "flex",
    width: "100%",
    height: "100vh",
    alignItems: "flex-start",
    justifyContent: "center",
    backgroundColor:
      theme.colorScheme === "dark"
        ? theme.colors.dark[8]
        : theme.colors.dark[0],
    paddingTop: "40px",
  },
}));

export default function Home() {
  const { classes } = useStyles();

  const form = useForm({
    initialValues: {
      email: "",
      password: "",
    },
    validate: {
      email: isEmail("Invalid email"),
    },
  });

  return (
    <Box className={classes.box}>
      <Card w={360} withBorder>
        <Box py="sm">
          <Center>
            <IconBrandOpenai size="2rem" />
          </Center>
        </Box>
        <form onSubmit={form.onSubmit((values) => console.log(values))}>
          <Stack>
            <TextInput
              withAsterisk
              label="Email"
              placeholder="you@email.com"
              {...form.getInputProps("email")}
            />
            <PasswordInput
              label="Password"
              placeholder="Your password"
              withAsterisk
              {...form.getInputProps("password")}
            />
            <Button type="submit">Submit</Button>
          </Stack>
        </form>
      </Card>
    </Box>
  );
}

import {
  Header,
  createStyles,
  Group,
  MediaQuery,
  Burger,
  Text,
  ActionIcon,
  Avatar,
} from "@mantine/core";
import {
  IconBellRingingFilled,
  IconMailFilled,
  IconBrandTiktoFilled,
} from "@tabler/icons-react";
import { useState } from "react";
import { CallbackInterface, LeftSideNormalInterface } from "./interfaces";

const useStyles = createStyles((theme) => ({}));

export default function PageHeader({
  callback,
  collapse,
}: CallbackInterface & LeftSideNormalInterface) {
  const { classes, theme } = useStyles();

  return (
    <>
      <Header
        styles={{
          root: {
            background:
              theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.white,
          },
        }}
        withBorder={false}
        height={60}
      >
        <Group h={60} p="xs" position="apart">
          <Group spacing="xs" align="center">
            <MediaQuery largerThan="sm" styles={{ display: "none" }}>
              <Burger
                opened={collapse}
                onClick={() => {
                  callback(!collapse);
                }}
                size="sm"
                color={theme.colors.gray[6]}
                mr="xl"
              />
            </MediaQuery>

            <Text>Application header</Text>
          </Group>
          <Group spacing="sm">
            <ActionIcon size="lg" variant="light" radius="xl">
              <IconBellRingingFilled size="1rem" />
            </ActionIcon>
            <ActionIcon size="lg" variant="light" radius="xl">
              <IconMailFilled size="1rem" />
            </ActionIcon>
            <ActionIcon size="lg" variant="light" radius="xl">
              <IconBrandTiktoFilled size="1rem" />
            </ActionIcon>
            <Avatar radius="xl" size="md">
              U
            </Avatar>
          </Group>
        </Group>
      </Header>
    </>
  );
}

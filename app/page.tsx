"use client";

import {
  useMantineTheme,
  AppShell,
  Navbar,
  Text,
  MediaQuery,
  Header,
  Burger,
  Group,
  Avatar,
  ActionIcon,
  Center,
  NavLink,
} from '@mantine/core';
import { useState } from 'react';
import { IconArrowLeft, IconBellRingingFilled, IconBrandTiktoFilled, IconMailFilled, IconGauge, IconFingerprint } from '@tabler/icons-react'

export default function Home() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState(false);
  return (
    <AppShell
      styles={{
        main: {
          background: theme.colorScheme === 'dark' ? theme.colors.dark[8] : theme.colors.gray[0],
        }
      }}
      layout='alt'
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={
        <Navbar styles={{
          root: {
            background: theme.colorScheme === 'dark' ? theme.colors.dark[9]: theme.white,
            boxShadow: theme.shadows.sm,
          }
        }} withBorder={false} hiddenBreakpoint="sm" hidden={!opened} width={{ sm: 200, lg: 220 }}>
          <Navbar.Section>Logo</Navbar.Section>
          <Navbar.Section grow mt="md">
            <NavLink
              label="First parent link"
              icon={<IconGauge size="1rem" stroke={1.5} />}
              childrenOffset={28}
            >
              <NavLink label="First child link" />
              <NavLink label="Second child link" />
              <NavLink label="Nested parent link" childrenOffset={28}>
                <NavLink label="First child link" />
                <NavLink label="Second child link" />
                <NavLink label="Third child link" />
              </NavLink>
            </NavLink>

            <NavLink
              label="Second parent link"
              icon={<IconFingerprint size="1rem" stroke={1.5} />}
              childrenOffset={28}
              defaultOpened
            >
              <NavLink label="First child link" />
              <NavLink label="Second child link" />
              <NavLink label="Third child link" />
            </NavLink>
          </Navbar.Section>
          <Navbar.Section>
            <Center p="sm">
              <ActionIcon size="md" radius="xl" variant="light">
                <IconArrowLeft size="1rem" />
              </ActionIcon>
            </Center>
          </Navbar.Section>
        </Navbar>
      }
      header={
        <Header styles={{
          root: {
            background: theme.colorScheme === 'dark' ? theme.colors.dark[9]: theme.white,
          }
        }} withBorder={false} height={60}>
          <Group h={60} p="xs" position="apart">
            <Group spacing="xs" align='center'>
              <MediaQuery largerThan="sm" styles={{ display: 'none' }}>
                <Burger
                  opened={opened}
                  onClick={() => setOpened((o) => !o)}
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
              <Avatar radius="xl" size="md">U</Avatar>
            </Group>
          </Group>
        </Header>
      }
    >
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
}

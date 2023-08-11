"use client";

import { useMantineTheme, AppShell, Text } from "@mantine/core";
import LeftSideNavbar from "@/components/LeftSideNavbar";
import PageHeader from "@/components/PageHeader";
import { useState } from "react";

export default function Home() {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <AppShell
      styles={{
        main: {
          background:
            theme.colorScheme === "dark"
              ? theme.colors.dark[8]
              : theme.colors.gray[0],
        },
      }}
      layout="alt"
      navbarOffsetBreakpoint="sm"
      asideOffsetBreakpoint="sm"
      navbar={<LeftSideNavbar collapse={opened} />}
      header={
        <PageHeader
          collapse={opened}
          callback={(opened: boolean) => setOpened(opened)}
        />
      }
    >
      <Text>Resize app to see responsive navbar in action</Text>
    </AppShell>
  );
}

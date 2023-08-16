"use client";

import { useMantineTheme, AppShell } from "@mantine/core";
import LeftSideNavbar from "@/components/LeftSideNavbar";
import PageHeader from "@/components/PageHeader";
import { useState } from "react";

export default function DashboardLayout({
  children,
}: {
  children: React.ReactNode;
}) {
  const theme = useMantineTheme();
  const [opened, setOpened] = useState<boolean>(false);

  return (
    <>
      <AppShell
        styles={{
          main: {
            background:
              theme.colorScheme === "dark"
                ? theme.colors.dark[8]
                : theme.colors.gray[1],
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
        {children}
      </AppShell>
    </>
  );
}

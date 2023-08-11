import {
  Navbar,
  createStyles,
  Center,
  ActionIcon,
  NavLinkProps,
} from "@mantine/core";
import { IconArrowLeft, IconArrowRight } from "@tabler/icons-react";
import { useState } from "react";
import Logo from "./Logo";
import { LeftSideNormalInterface } from "./interfaces";
import SideMenu from "./SideMenu";

const useStyles = createStyles((theme) => ({}));

export default function LeftSideNavbar({
  collapse: opened,
}: LeftSideNormalInterface) {
  const { theme } = useStyles();
  const [collapse, setCollapse] = useState<boolean>(false);

  return (
    <>
      <Navbar
        styles={{
          root: {
            background:
              theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.white,
            boxShadow: theme.shadows.sm,
            width: collapse ? "70px" : "200px",
          },
        }}
        withBorder={false}
        hiddenBreakpoint="sm"
        hidden={!opened}
      >
        <Navbar.Section>
          <Logo collapse={collapse} />
        </Navbar.Section>
        <Navbar.Section grow mt="md">
          <SideMenu collapse={collapse} />
        </Navbar.Section>
        <Navbar.Section>
          <Center p="sm">
            <ActionIcon
              onClick={() => setCollapse(!collapse)}
              size="md"
              radius="xl"
              variant="light"
            >
              {collapse ? (
                <IconArrowRight size="1rem" />
              ) : (
                <IconArrowLeft size="1rem" />
              )}
            </ActionIcon>
          </Center>
        </Navbar.Section>
      </Navbar>
    </>
  );
}

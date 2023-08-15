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
import { CallbackInterface, LeftSideNormalInterface } from "../interfaces";
import NotificationHoverAction from "./Actions/NotificationHoverAction";
import MailHoverAction from "./Actions/MailHoverAction";
import { SchemeToggle } from "./Actions/SchemeToggle";

const useStyles = createStyles((theme) => ({}));

export default function PageHeader({
  callback,
  collapse,
}: CallbackInterface & LeftSideNormalInterface) {
  const { theme } = useStyles();

  return (
    <>
      <Header
        styles={{
          root: {
            background:
              theme.colorScheme === "dark" ? theme.colors.dark[9] : theme.white,
          },
        }}
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
            <NotificationHoverAction />
            <MailHoverAction />
            <SchemeToggle />
            <Avatar size="md">U</Avatar>
          </Group>
        </Group>
      </Header>
    </>
  );
}

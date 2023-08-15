import {
  ActionIcon,
  Box,
  Group,
  Stack,
  Text,
  ThemeIcon,
  Title,
} from "@mantine/core";
import {
  IconApps,
  IconArrowRight,
  IconBrandAppstore,
  IconBrandOpenai,
  IconBrandTiktoFilled,
  IconBrandWechat,
} from "@tabler/icons-react";
import React from "react";

const TIKTOK = "TIKTOK";
const WECHAT = "WECHAT";
const XIAOHONGSHU = "XIAOHONGSHU";
const OPENAI = "TIKTOK";

export interface MessageCardProps {
  code: string;
  type: "TIKTOK" | "WECHAT" | "XIAOHONGSHU" | "OPENAI";
  app: string;
  time: string;
  intro: string;
}

export default function MessageCard({
  code,
  type,
  app,
  time,
  intro,
}: MessageCardProps) {
  const TypeIcon = (): React.JSX.Element => {
    switch (type) {
      case TIKTOK:
        return <IconBrandTiktoFilled size="1rem" color="dark" />;
      case WECHAT:
        return <IconBrandWechat size="1rem" color="green" />;
      case XIAOHONGSHU:
        return <IconBrandAppstore size="1rem" color="red" />;
      case OPENAI:
        return <IconBrandOpenai size="1rem" color="blue" />;
      default:
        return <IconApps size="1rem" />;
    }
  };

  return (
    <>
      <Box>
        <Stack spacing={6}>
          <Group position="apart" align="center">
            <Group spacing="sm">
              <ThemeIcon size="xs" variant="filled">
                <TypeIcon />
              </ThemeIcon>
              <Title order={6}>{app}</Title>
            </Group>
            <Group>
              <Text size={10}>{time}</Text>
              <ActionIcon size="xs" radius="xl" variant="filled">
                <IconArrowRight size="1rem" />
              </ActionIcon>
            </Group>
          </Group>
          <Text lineClamp={3} size={12}>
            {intro}
          </Text>
        </Stack>
      </Box>
    </>
  );
}

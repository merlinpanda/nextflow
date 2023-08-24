"use client";

import { DocumentItem } from "@/components/Interfaces";
import TableContents from "@/components/TableContent";
import { fetcher } from "@/lib/useRequest";
import {
  ActionIcon,
  Badge,
  Box,
  Button,
  Card,
  Divider,
  Grid,
  Group,
  Select,
  Stack,
  Tabs,
  Text,
  Textarea,
  Title,
  createStyles,
} from "@mantine/core";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { useTextSelection } from "@mantine/hooks";
import {
  IconBrandLaravel,
  IconMessageCircle,
  IconPhoto,
  IconSettings,
  IconVersionsFilled,
} from "@tabler/icons-react";

const LinkDatas = {
  active: "#overlays",
  links: [
    {
      label: "Usage",
      link: "#usage",
      order: 1,
    },
    {
      label: "Position and placement",
      link: "#position",
      order: 1,
    },
    {
      label: "With other overlays",
      link: "#overlays",
      order: 1,
    },
    {
      label: "Manage focus",
      link: "#focus",
      order: 1,
    },
    {
      label: "Examples",
      link: "#1",
      order: 1,
    },
    {
      label: "Show on focus",
      link: "#2",
      order: 2,
    },
    {
      label: "Show on hover",
      link: "#3",
      order: 2,
    },
    {
      label: "With form",
      link: "#4",
      order: 2,
    },
  ],
};

const useStyles = createStyles((theme) => ({
  selectBox: {
    backgroundColor: theme.colors.gray[1],
  },
}));

export default function Page({ params }: { params: { code: string } }) {
  const { data, error, isLoading } = useSWR(
    "/apis/document/" + params.code,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
    },
  );
  const [document, setDocument] = useState<DocumentItem>();
  const { classes } = useStyles();

  useEffect(() => {
    const doc = data?.data;
    setDocument(doc);
  }, [data]);

  return (
    <>
      <Card>
        <Stack>
          <Group position="apart" align="flex-start">
            <Stack
              style={{
                flexGrow: 1,
              }}
            >
              <Group>
                <ActionIcon radius="xs" size="sm" variant="filled" color="red">
                  <IconBrandLaravel size="1rem" stroke={1.5} />
                </ActionIcon>
                <Title order={4}>{document?.title}</Title>
              </Group>
              <Textarea>{document?.intro}</Textarea>
              <Group>
                <Badge>Laravel</Badge>
                <Badge>PHP</Badge>
                <Badge>Jis</Badge>
              </Group>
            </Stack>
            <Stack>
              <Select
                size="xs"
                icon={<IconVersionsFilled size="1rem" />}
                placeholder="Version"
                variant="unstyled"
                data={["React", "Angular", "Svelte", "Vue"]}
                display="inline-block"
                withinPortal
                defaultValue="React"
                className={classes.selectBox}
              />
              <Button size="xs">Save</Button>
            </Stack>
          </Group>

          <Tabs defaultValue="gallery">
            <Tabs.List>
              <Tabs.Tab value="gallery" icon={<IconPhoto size="0.8rem" />}>
                文档
              </Tabs.Tab>
              <Tabs.Tab
                value="messages"
                icon={<IconMessageCircle size="0.8rem" />}
              >
                提交
              </Tabs.Tab>
              <Tabs.Tab value="settings" icon={<IconSettings size="0.8rem" />}>
                学生
              </Tabs.Tab>
              <Tabs.Tab value="settings" icon={<IconSettings size="0.8rem" />}>
                KCards
              </Tabs.Tab>
            </Tabs.List>
          </Tabs>
          <Box>
            <Grid>
              <Grid.Col span={2}>
                <TableContents {...LinkDatas} />
              </Grid.Col>
              <Grid.Col span={10}></Grid.Col>
            </Grid>
          </Box>
        </Stack>
      </Card>
    </>
  );
}

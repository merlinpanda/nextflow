"use client";

import { DocumentGroupItem, DocumentItem } from "@/components/Interfaces";
import TableContents from "@/components/TableContent";
import { fetcher } from "@/lib/useRequest";
import {
  ActionIcon,
  Avatar,
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
  ThemeIcon,
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
  IconPlus,
  IconSettings,
  IconTag,
  IconVersionsFilled,
} from "@tabler/icons-react";
import CategoryLabel from "@/components/Category/CategoryLabel";
import CategoryIcon from "@/components/Category/CategoryIcon";

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
    "/apis/document_group/" + params.code,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
    },
  );
  const [document, setDocument] = useState<DocumentGroupItem>();
  const { classes } = useStyles();

  useEffect(() => {
    const doc = data?.data;
    setDocument(doc);
  }, [data]);

  return (
    <>
      <Stack>
        <Card>
          <Stack
            style={{
              flexGrow: 1,
            }}
          >
            <Group>
              {document?.category && (
                <CategoryIcon
                  canUploadThumb
                  size="xl"
                  category={document.category}
                />
              )}
              <Box>
                <Title order={4}>{document?.title}</Title>
                <Text size="xs" color="dimmed">
                  {document?.code}
                </Text>
              </Box>
            </Group>
            <Group>
              {document?.categories &&
                document.categories.map((category, index) => {
                  return <CategoryLabel key={index} category={category} />;
                })}
              <ActionIcon variant="light" color="blue">
                <IconPlus size="1rem" />
              </ActionIcon>
            </Group>
          </Stack>
        </Card>
        <Grid>
          <Grid.Col span={4}>
            <Card>a</Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card>b</Card>
          </Grid.Col>
          <Grid.Col span={4}>
            <Card>b</Card>
          </Grid.Col>
        </Grid>
        <Card>a</Card>
      </Stack>
    </>
  );
}

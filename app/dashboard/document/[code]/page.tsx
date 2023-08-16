"use client";

import { DocumentItem } from "@/components/Interfaces";
import TableContents from "@/components/TableContent";
import { fetcher } from "@/lib/useRequest";
import {
  Card,
  Divider,
  Grid,
  Stack,
  Text,
  Title,
  TypographyStylesProvider,
} from "@mantine/core";
import { useEffect, useState } from "react";
import useSWR from "swr";
import { useTextSelection } from "@mantine/hooks";

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

export default function Page({ params }: { params: { code: string } }) {
  const selection = useTextSelection();

  const { data, error, isLoading } = useSWR(
    "/apis/document/" + params.code,
    fetcher,
    {
      revalidateOnFocus: false,
      revalidateIfStale: false,
    },
  );
  const [document, setDocument] = useState<DocumentItem>();

  useEffect(() => {
    const doc = data?.data;
    setDocument(doc);
  }, [data]);

  return (
    <>
      <Card>
        <Stack>
          <Stack spacing="xs">
            <Title order={4}>{document?.title}</Title>
            <Text size="xs" color="dimmed">
              {document?.intro}
            </Text>
          </Stack>
          <Card.Section>
            <Divider />
          </Card.Section>
          <Grid>
            <Grid.Col span={3}>
              <TableContents {...LinkDatas} />
            </Grid.Col>
            <Grid.Col span={9}>
              <TypographyStylesProvider>
                <Text></Text>
              </TypographyStylesProvider>
            </Grid.Col>
          </Grid>
        </Stack>
      </Card>
    </>
  );
}

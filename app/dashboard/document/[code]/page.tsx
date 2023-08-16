"use client";

import { DocumentItem } from "@/components/Interfaces";
import { fetcher } from "@/lib/useRequest";
import { Card, Stack, Text, Title } from "@mantine/core";
import { useEffect, useState } from "react";
import useSWR from "swr";

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

  useEffect(() => {
    const doc = data?.data;
    setDocument(doc);
  }, [data]);

  return (
    <>
      <Card>
        <Stack>
          <Title order={4}>{document?.title}</Title>
          <Text>{document?.intro}</Text>
        </Stack>
      </Card>
    </>
  );
}
